import { Link } from "wouter";
import { useEffect, useState } from "react";

const Petal = ({ style }) => (
  <div className="petal" style={style}>
    <svg viewBox="0 0 40 60" width="40" height="60" fill="none">
      <path
        d="M20 0 C5 15, 0 35, 20 60 C40 35, 35 15, 20 0Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  </div>
);

const FloatingOrb = ({ style }) => (
  <div className="orb" style={style} />
);

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const petals = [
    { top: "-5%",  left: "6%",   animationDelay: "0s",   animationDuration: "7s",   color: "#7c3aed", size: 24 },
    { top: "-2%",  right: "10%", animationDelay: "1.4s", animationDuration: "9s",   color: "#a78bfa", size: 20 },
    { top: "-4%",  left: "30%",  animationDelay: "2.8s", animationDuration: "8.2s", color: "#6d28d9", size: 16 },
    { top: "-3%",  right: "28%", animationDelay: "0.6s", animationDuration: "10s",  color: "#c4b5fd", size: 22 },
    { top: "-1%",  left: "55%",  animationDelay: "3.2s", animationDuration: "7.5s", color: "#8b5cf6", size: 14 },
    { top: "-6%",  right: "48%", animationDelay: "1.9s", animationDuration: "11s",  color: "#a78bfa", size: 18 },
  ];

  const orbs = [
    { top: "15%", left: "10%",  size: 140, color: "rgba(139,92,246,0.07)", delay: "0s" },
    { top: "50%", right: "8%",  size: 200, color: "rgba(167,139,250,0.05)", delay: "2s" },
    { top: "72%", left: "30%",  size: 100, color: "rgba(124,58,237,0.09)", delay: "1s" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500&display=swap');

        /* ── Wrapper ── */
        .nf-wrapper {
          min-height: calc(100vh - 64px);
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #faf5ff 0%, #ede9fe 40%, #f3e8ff 70%, #faf5ff 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px;
          box-sizing: border-box;
        }

        /* Noise grain */
        .nf-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* ── Orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(45px);
          animation: orbFloat 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0);    }
          50%      { transform: translateY(-18px); }
        }

        /* ── Petals ── */
        .petal {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          animation: petalFall linear infinite;
        }
        .petal svg { width: 100%; height: 100%; }
        @keyframes petalFall {
          0%   { transform: translateY(-40px)  rotate(0deg);   opacity: 0;    }
          8%   { opacity: 0.85; }
          85%  { opacity: 0.5;  }
          100% { transform: translateY(105vh) rotate(380deg); opacity: 0;    }
        }

        /* ── Content ── */
        .nf-content {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity  0.85s cubic-bezier(0.22,1,0.36,1),
                      transform 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .nf-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── 404 ── */
        .nf-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(100px, 24vw, 180px);
          line-height: 0.88;
          letter-spacing: -4px;
          margin: 0 0 6px;
          background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 40%, #a78bfa 70%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: numberPulse 4s ease-in-out infinite;
        }
        @keyframes numberPulse {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(139,92,246,0.12)); }
          50%      { filter: drop-shadow(0 0 32px rgba(139,92,246,0.28)); }
        }

        /* ── Ornament ── */
        .nf-ornament {
          margin: 10px auto 22px;
          opacity: 0.58;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nf-ornament svg {
          width: 96px;
          height: auto;
        }

        /* ── Message ── */
        .nf-message {
          font-family: 'Outfit', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          color: #5b4a7a;
          letter-spacing: 0.02em;
          margin: 0 0 30px;
        }

        /* ── Button ── */
        .nf-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, #7c3aed, #a78bfa);
          padding: 15px 34px;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 22px rgba(124,58,237,0.28);
          transition: transform  0.3s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }
        .nf-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .nf-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124,58,237,0.38);
        }
        .nf-link:hover::before { opacity: 1; }

        .nf-link span,
        .nf-link .arrow { position: relative; z-index: 1; }
        .nf-link .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .nf-link:hover .arrow { transform: translateX(-3px); }

        /* ════════════════════════════════════════
           MOBILE  (≤ 480 px)
           ════════════════════════════════════════ */
        @media (max-width: 480px) {
          .nf-wrapper {
            min-height: calc(100vh - 56px);
            padding: 0 20px;
          }

          .nf-number {
            font-size: clamp(88px, 30vw, 130px);
            letter-spacing: -2px;
            margin-bottom: 2px;
          }

          .nf-ornament {
            margin: 8px auto 18px;
          }
          .nf-ornament svg {
            width: 72px;
          }

          .nf-message {
            font-size: 0.97rem;
            margin-bottom: 26px;
            max-width: 260px;
            margin-left:  auto;
            margin-right: auto;
          }

          .nf-link {
            padding: 16px 28px;
            font-size: 0.78rem;
            letter-spacing: 0.09em;
            gap: 8px;
          }
        }
      `}</style>

      <div className="nf-wrapper">
        {/* Orbs */}
        {orbs.map((o, i) => (
          <FloatingOrb
            key={i}
            style={{
              top: o.top,
              [o.right ? "right" : "left"]: o.right || o.left,
              width:  o.size,
              height: o.size,
              background: o.color,
              animationDelay: o.delay,
            }}
          />
        ))}

        {/* Petals — all start above viewport and fall down */}
        {mounted &&
          petals.map((p, i) => (
            <Petal
              key={i}
              style={{
                top:  p.top,
                [p.right ? "right" : "left"]: p.right || p.left,
                width:  p.size,
                height: (p.size / 40) * 60,
                color:  p.color,
                animationDelay:    p.animationDelay,
                animationDuration: p.animationDuration,
              }}
            />
          ))}

        {/* Content */}
        <div className={`nf-content ${mounted ? "visible" : ""}`}>
          <h1 className="nf-number">404</h1>

          {/* Floral ornament */}
          <div className="nf-ornament">
            <svg viewBox="0 0 80 24" fill="none">
              <path d="M40 12 C34 6,26 4,20 8 C14 12,16 18,22 18 C28 18,32 14,40 12Z" fill="#a78bfa" opacity="0.5"/>
              <path d="M40 12 C46 6,54 4,60 8 C66 12,64 18,58 18 C52 18,48 14,40 12Z" fill="#a78bfa" opacity="0.5"/>
              <circle cx="40" cy="12" r="3" fill="#7c3aed" opacity="0.7"/>
              <line x1="5"  y1="12" x2="27" y2="12" stroke="#c4b5fd" strokeWidth="0.8"/>
              <line x1="53" y1="12" x2="75" y2="12" stroke="#c4b5fd" strokeWidth="0.8"/>
              <circle cx="5"  cy="12" r="1.5" fill="#c4b5fd" opacity="0.6"/>
              <circle cx="75" cy="12" r="1.5" fill="#c4b5fd" opacity="0.6"/>
            </svg>
          </div>

          <p className="nf-message">Faqja që po kërkoni nuk ekziston.</p>

          <Link href="/" className="nf-link">
            <span className="arrow">←</span>
            <span>Kthehu në faqen kryesore</span>
          </Link>
        </div>
      </div>
    </>
  );
}