import { useState, useCallback, useRef, memo, useMemo, useEffect } from "react";

const SPIN_DURATION_MIN = 4000;
const SPIN_DURATION_MAX = 6000;
const SAVE_DEBOUNCE_MS = 100;

const PRIZE_CONFIG = [
  { id: 0, text: "5% ZBRITJE", color: "#FF7BA3", probability: 11, maxRedemptions: 500 },
  { id: 1, text: "10% ZBRITJE", color: "#A8D5E2", probability: 2, maxRedemptions: 50 },
  { id: 2, text: "BLI NJË SHALL", subtext: "& TË DYTIN -20%", color: "#B4A5E8", probability: 4, maxRedemptions: 30 },
  { id: 3, text: "POSTA FALAS", color: "#FFD93D", probability: 3, maxRedemptions: 100 },
  { id: 4, text: "PROVO SËRISH ✨", color: "#95E1D3", probability: 80, maxRedemptions: 99999 },
];

const SEGMENT_ANGLE = 360 / PRIZE_CONFIG.length;
const RADIUS = 180;
const CENTER_X = 200;
const CENTER_Y = 200;
const TEXT_RADIUS = 120;
const ANTI_PATTERN_THRESHOLD = 3;
const COOLDOWN_SPINS = 5;
const POINTER_ANGLE_SVG = 270;

const compressGameState = (redemptionCounts) =>
  PRIZE_CONFIG.map((prize) => redemptionCounts[prize.id] || 0).join(",");

const decompressGameState = (compressed) => {
  const values = compressed.split(",").map(Number);
  const redemptions = {};
  PRIZE_CONFIG.forEach((prize, index) => {
    redemptions[prize.id] = values[index] || 0;
  });
  return redemptions;
};

const compressHistory = (history) => history.join(",");

const decompressHistory = (compressed) =>
  compressed ? compressed.split(",").map(Number) : [];

const getStoredState = (storageKey) => {
  try {
    const redemptionData = localStorage.getItem(storageKey);
    const historyData = localStorage.getItem(`${storageKey}_h`);
    return {
      redemptions: redemptionData ? decompressGameState(redemptionData) : null,
      history: historyData ? decompressHistory(historyData) : []
    };
  } catch {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}_h`);
    return { redemptions: null, history: [] };
  }
};

const saveState = (redemptions, history, storageKey) => {
  try {
    localStorage.setItem(storageKey, compressGameState(redemptions));
    localStorage.setItem(`${storageKey}_h`, compressHistory(history.slice(-20)));
  } catch {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}_h`);
  }
};

const initializeState = (storageKey) => {
  const stored = getStoredState(storageKey);
  if (stored.redemptions) return stored;

  const redemptions = {};
  PRIZE_CONFIG.forEach((prize) => {
    redemptions[prize.id] = 0;
  });
  return { redemptions, history: [] };
};

const calculateAvailablePrizes = (redemptions) =>
  PRIZE_CONFIG.filter((prize) => (redemptions[prize.id] || 0) < prize.maxRedemptions);

const analyzeRecentPattern = (history) => {
  if (history.length < 2) return { hasPattern: false };

  const recentSpins = history.slice(-ANTI_PATTERN_THRESHOLD);
  if (recentSpins.every(id => id === recentSpins[0]) && recentSpins.length >= ANTI_PATTERN_THRESHOLD) {
    return { hasPattern: true, repeatedPrize: recentSpins[0] };
  }

  return { hasPattern: false };
};

const calculateProgressiveOdds = (currentRedemptions, maxRedemptions, baseProbability) => {
  const remainingPercentage = (maxRedemptions - currentRedemptions) / maxRedemptions;

  if (remainingPercentage < 0.1) return baseProbability * 0.2;
  if (remainingPercentage < 0.2) return baseProbability * 0.4;
  if (remainingPercentage < 0.3) return baseProbability * 0.6;
  if (remainingPercentage < 0.5) return baseProbability * 0.8;

  return baseProbability;
};

const selectPrizeWithWeightedProbability = (availablePrizes, redemptions, history) => {
  const patternAnalysis = analyzeRecentPattern(history);

  const adjustedPrizes = availablePrizes.map(prize => {
    let adjustedProbability = prize.probability; // Start with base probability

    // Only apply progressive odds to LIMITED prizes (not the "try again" prize)
    if (prize.id !== 4) {
      adjustedProbability = calculateProgressiveOdds(
        redemptions[prize.id] || 0,
        prize.maxRedemptions,
        prize.probability
      );
    }

    // Only apply anti-pattern penalty to LIMITED prizes
    if (prize.id !== 4 && patternAnalysis.hasPattern && prize.id === patternAnalysis.repeatedPrize) {
      adjustedProbability *= 0.1;
    }

    // Remove the cooldown penalty for "try again" entirely
    // (The original cooldown code is deleted)

    return { ...prize, adjustedProbability };
  });

  const totalWeight = adjustedPrizes.reduce((sum, prize) => sum + Math.max(prize.adjustedProbability, 0), 0);
  const randomValue = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (const prize of adjustedPrizes) {
    cumulativeWeight += Math.max(prize.adjustedProbability, 0);
    if (randomValue <= cumulativeWeight) {
      return PRIZE_CONFIG.find(original => original.id === prize.id);
    }
  }

  return PRIZE_CONFIG.find(original => original.id === adjustedPrizes[adjustedPrizes.length - 1].id);
};

const calculateRotationToLandOnPrize = (targetPrizeId, currentRotation) => {
  const targetSegmentCenterAngle = targetPrizeId * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;

  const targetWheelRotation = POINTER_ANGLE_SVG - targetSegmentCenterAngle;

  const currentNormalized = ((currentRotation % 360) + 360) % 360;
  const targetNormalized = ((targetWheelRotation % 360) + 360) % 360;

  let additionalRotation = targetNormalized - currentNormalized;

  if (additionalRotation <= 0) {
    additionalRotation += 360;
  }

  const fullRotations = 4 + Math.floor(Math.random() * 3);
  const maxWobble = SEGMENT_ANGLE * 0.35;
  const randomOffsetWithinSegment = (Math.random() * maxWobble * 2) - maxWobble;

  return fullRotations * 360 + additionalRotation + randomOffsetWithinSegment;
};

const segmentCache = PRIZE_CONFIG.map((prize, index) => {
  const startAngle = index * SEGMENT_ANGLE;
  const endAngle = startAngle + SEGMENT_ANGLE;
  const startRadian = (startAngle * Math.PI) / 180;
  const endRadian = (endAngle * Math.PI) / 180;

  const x1 = CENTER_X + RADIUS * Math.cos(startRadian);
  const y1 = CENTER_Y + RADIUS * Math.sin(startRadian);
  const x2 = CENTER_X + RADIUS * Math.cos(endRadian);
  const y2 = CENTER_Y + RADIUS * Math.sin(endRadian);

  const largeArcFlag = SEGMENT_ANGLE > 180 ? 1 : 0;
  const path = `M ${CENTER_X} ${CENTER_Y} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

  const middleAngle = startAngle + SEGMENT_ANGLE / 2;
  const textRadian = (middleAngle * Math.PI) / 180;
  const textX = CENTER_X + TEXT_RADIUS * Math.cos(textRadian);
  const textY = CENTER_Y + TEXT_RADIUS * Math.sin(textRadian);
  const textRotation = middleAngle + 90;

  return { prize, path, textX, textY, rotation: textRotation };
});

const confettiCache = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 0.5,
  duration: 2 + Math.random() * 2,
  rotation: Math.random() * 360,
  color: PRIZE_CONFIG[Math.floor(Math.random() * PRIZE_CONFIG.length)].color,
}));

const WheelSegment = memo(({ segmentData }) => {
  const { prize, path, textX, textY, rotation } = segmentData;
  const fontSize = prize.subtext ? "13px" : "15px";
  const textTransform = `rotate(${rotation}, ${textX}, ${textY})`;

  return (
    <g>
      <path d={path} fill={prize.color} stroke="white" strokeWidth="4" />
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="middle"
        transform={textTransform}
        className="fill-gray-800 font-bold pointer-events-none"
        fontSize={fontSize}
      >
        {prize.text}
        {prize.subtext && <tspan x={textX} dy="14">{prize.subtext}</tspan>}
      </text>
    </g>
  );
});
WheelSegment.displayName = "WheelSegment";

const ConfettiPiece = memo(({ piece }) => {
  const style = useMemo(() => ({
    left: `${piece.left}%`,
    top: "-10%",
    backgroundColor: piece.color,
    animation: `confettiFall ${piece.duration}s linear ${piece.delay}s forwards`,
    transform: `rotate(${piece.rotation}deg)`,
  }), [piece]);

  return <div className="absolute w-2 h-2 opacity-0" style={style} />;
});
ConfettiPiece.displayName = "ConfettiPiece";

const Confetti = memo(() => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
    {confettiCache.map((piece) => <ConfettiPiece key={piece.id} piece={piece} />)}
  </div>
));
Confetti.displayName = "Confetti";

const WinnerDisplay = memo(({ prize }) => {
  const isRetry = prize.id === 4;
  const message = isRetry ? "😊 Provo sërish!" : "🎊 Urime! Ke fituar:";
  const displayText = prize.subtext ? `${prize.text} ${prize.subtext}` : prize.text;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 border-2 sm:border-4 border-purple-400">
        <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4 text-center font-medium">{message}</p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center leading-tight">
          {displayText}
        </p>
      </div>
    </div>
  );
});
WinnerDisplay.displayName = "WinnerDisplay";

export default function SpinnerReward({ storageKey = "sg" }) {
  const [state, setState] = useState(() => initializeState(storageKey));
  const [currentRotation, setCurrentRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDuration, setSpinDuration] = useState(5000);

  const saveTimeoutRef = useRef(null);
  const spinAnimationRef = useRef(null);
  const selectedPrizeRef = useRef(null);

  useEffect(() => {
    return () => {
      if (spinAnimationRef.current) {
        clearTimeout(spinAnimationRef.current);
        spinAnimationRef.current = null;
      }
    };
  }, []);

  const debouncedSave = useCallback((newRedemptions, newHistory) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(() => {
      saveState(newRedemptions, newHistory, storageKey);
      saveTimeoutRef.current = null;
    }, SAVE_DEBOUNCE_MS);
  }, [storageKey]);

  const finishSpin = useCallback((selectedPrize) => {
    setIsSpinning(false);
    setWonPrize(selectedPrize);
    setShowConfetti(selectedPrize.id !== 4);
    spinAnimationRef.current = null;
    selectedPrizeRef.current = null;

    setState((previousState) => {
      const updatedRedemptions = {
        ...previousState.redemptions,
        [selectedPrize.id]: previousState.redemptions[selectedPrize.id] + 1
      };
      const updatedHistory = [...previousState.history, selectedPrize.id];

      debouncedSave(updatedRedemptions, updatedHistory);

      return {
        redemptions: updatedRedemptions,
        history: updatedHistory
      };
    });
  }, [debouncedSave]);

  const animateSpin = useCallback((selectedPrize, targetRotation, startRotation) => {
    const baseDuration = SPIN_DURATION_MIN + Math.random() * (SPIN_DURATION_MAX - SPIN_DURATION_MIN);
    const animationDuration = baseDuration * (0.95 + Math.random() * 0.1);

    const finalRotation = startRotation + targetRotation;

    setSpinDuration(animationDuration);
    setCurrentRotation(finalRotation);

    spinAnimationRef.current = setTimeout(() => {
      finishSpin(selectedPrize);
    }, animationDuration);
  }, [finishSpin]);

  const handleSpin = useCallback(() => {
    if (spinAnimationRef.current) return;

    const { redemptions, history } = state;
    const availablePrizes = calculateAvailablePrizes(redemptions);

    if (!availablePrizes.length) {
      alert("Të gjitha çmimet janë të shpenzuara!");
      return;
    }

    const selectedPrize = selectPrizeWithWeightedProbability(availablePrizes, redemptions, history);
    selectedPrizeRef.current = selectedPrize;

    setIsSpinning(true);
    setWonPrize(null);
    setShowConfetti(false);

    const targetRotation = calculateRotationToLandOnPrize(selectedPrize.id, currentRotation);

    animateSpin(selectedPrize, targetRotation, currentRotation);
  }, [state, currentRotation, animateSpin]);

  const wheelStyle = useMemo(() => ({
    transform: `rotate(${currentRotation}deg)`,
    transition: isSpinning ? `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)` : "transform 0.25s ease-out",
    willChange: isSpinning ? 'transform' : 'auto',
  }), [currentRotation, isSpinning, spinDuration]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <style>{`@keyframes confettiFall{to{top:110%;opacity:1}}`}</style>
      {showConfetti && <Confetti />}

      <div className="w-full max-w-6xl flex flex-col gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Rrotullo rrotën
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 md:mb-8">Fito çmime të mrekullueshme! 🎁</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 sm:-m-8 md:-m-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 opacity-25 blur-3xl" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20">
              <div className="w-0 h-0 border-l-[20px] sm:border-l-[24px] md:border-l-[28px] border-l-transparent border-r-[20px] sm:border-r-[24px] md:border-r-[28px] border-r-transparent border-t-[30px] sm:border-t-[36px] md:border-t-[42px] border-t-red-500 drop-shadow-2xl" />
            </div>
            <div className="absolute inset-0 -m-4 sm:-m-5 md:-m-6 rounded-full border-4 sm:border-6 md:border-[8px] border-purple-300 shadow-xl" />
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              className="cursor-pointer drop-shadow-2xl w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              onClick={handleSpin}
              style={wheelStyle}
            >
              {segmentCache.map((data) => <WheelSegment key={data.prize.id} segmentData={data} />)}

              {/* Center button with logo */}
              <circle cx="200" cy="200" r="62" fill="white" stroke="#9333EA" strokeWidth="5" />
              <circle cx="200" cy="200" r="56" fill="#F8F5FF" />
              <image
                href="/main.svg"
                x="162"
                y="162"
                width="76"
                height="76"
                className="pointer-events-none opacity-90"
              />

              <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B7FB8" />
                  <stop offset="100%" stopColor="#6F678E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 mt-4 sm:mt-6 w-full max-w-2xl px-2 sm:px-0">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`w-full px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-black text-lg sm:text-xl md:text-2xl text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl transform transition-all duration-300 ${
              isSpinning ? "opacity-60 cursor-not-allowed" : "hover:scale-105 hover:-translate-y-1 active:scale-95"
            }`}
          >
            {isSpinning ? "Duke u rrotulluar..." : "Kliko për të rrotulluar! 🎉"}
          </button>

          {wonPrize && <WinnerDisplay prize={wonPrize} />}

          <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center font-medium px-2">
            Kliko rrotën ose butonin për të rrotulluar dhe fituar një çmim të veçantë!
          </p>
        </div>
      </div>
    </div>
  );
}