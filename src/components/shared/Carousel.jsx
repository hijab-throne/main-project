import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "../ImageOptimized.jsx";

const images = [
  { image: "/carousel/1.png" },
  { image: "/carousel/2.png" },
  { image: "/carousel/3.png" },
  { image: "/carousel/image00001.jpeg" },
  { image: "/carousel/image00002.jpeg" },
  { image: "/carousel/image00003.jpeg" },
  { image: "/carousel/image00004.jpeg" },
  { image: "/carousel/image00005.jpeg" },
  { image: "/carousel/image00006.jpeg" },
  { image: "/carousel/image00007.jpeg" },
  { image: "/carousel/image00008.jpeg" },
  { image: "/carousel/image00009.jpeg" },
  { image: "/carousel/image00010.jpeg" },
  { image: "/carousel/image00011.jpeg" },
  { image: "/carousel/image00012.jpeg" },
  { image: "/carousel/image00013.jpeg" },
  { image: "/carousel/image00014.jpeg" },
  { image: "/carousel/image00015.jpeg" },
  { image: "/carousel/image00016.jpeg" },
  { image: "/carousel/image00017.jpeg" },
  { image: "/carousel/image00018.jpeg" },
  { image: "/carousel/image00019.jpeg" },
  { image: "/carousel/image00020.jpeg" },
  { image: "/carousel/image00023.jpeg" },
  { image: "/carousel/image00033.jpeg" },
  { image: "/carousel/image00034.jpeg" },
  { image: "/carousel/image00035.jpeg" },
  { image: "/carousel/image00036.jpeg" },
  { image: "/carousel/image00037.jpeg" },
  { image: "/carousel/image00038.jpeg" },
  { image: "/carousel/image00039.jpeg" },
  { image: "/carousel/image00040.jpeg" },
  { image: "/carousel/image00043.jpeg" },
  { image: "/carousel/image00044.jpeg" },
  { image: "/carousel/image00045.jpeg" },
  { image: "/carousel/image00046.jpeg" },
  { image: "/carousel/image00047.jpeg" },
  { image: "/carousel/image00048.jpeg" },
  { image: "/carousel/image00049.jpeg" },
  { image: "/carousel/image00050.jpeg" },
  { image: "/carousel/image00054.jpeg" },
  { image: "/carousel/image00055.jpeg" },
  { image: "/carousel/image00056.jpeg" },
  { image: "/carousel/image00057.jpeg" },
  { image: "/carousel/image00058.jpeg" },
];

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleImages(window.innerWidth < 768 ? 1 : 3);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [finalImages, setFinalImages] = useState([]);

  useEffect(() => {
    const firstThree = images.slice(0, 3);
    const restShuffled = shuffleArray(images.slice(3));
    setFinalImages([...firstThree, ...restShuffled]);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 > finalImages.length - visibleImages ? prev : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? 0 : prev - 1
    );
  };

  // Calculate slide width based on number of visible images
  const slideWidth = 100 / visibleImages;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-gray-50 py-8 px-4 md:px-0">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Carousel */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
      >
        {finalImages.map((img, index) => (
          <div
            key={index}
            className={`flex-none ${isMobile ? 'w-full' : 'w-1/3'} p-2`}
          >
            <div className="h-96 md:h-[400px] w-full bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
              <OptimizedImage
                src={img.image}
                alt={`Slide ${index}`}
                className="h-96 md:h-full w-full"
                imageClassName='object-cover object-center'
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}