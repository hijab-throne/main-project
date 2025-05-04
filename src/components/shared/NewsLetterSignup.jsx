import React, { useState } from 'react'
import OptimizedImage from "../ImageOptimized.jsx";

export default function NewsLetterSignup() {
  const photos = ['reviews/1.png', 'reviews/2.png', 'reviews/3.png', 'reviews/4.png', 'reviews/5.png']
  const [current, setCurrent] = useState(0)
  const lastIndex = photos.length - 1

  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? lastIndex : c - 1))
  const nextSlide = () =>
    setCurrent((c) => (c === lastIndex ? 0 : c + 1))

  return (
    <section className="py-8 px-4 w-full">
      <div className="mb-2 font-bold text-2xl md:text-3xl">Google reviews</div>
      <div className="relative mx-auto w-full max-w-md sm:max-w-xl flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-2 sm:-left-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow z-10"
          aria-label="Previous"
        >
          <span className="text-xl sm:text-2xl select-none">&#10094;</span>
        </button>

        {/* Image container */}
        <div className="overflow-hidden rounded-lg shadow-md h-48 sm:h-64 flex items-center justify-center bg-white w-full">
          <OptimizedImage
            src={photos[current]}
            alt={`Review ${current + 1}`}
            width={1402}
            height={418}
            imageClassName='object-contain'
            className="max-h-full max-w-full"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-2 sm:-right-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow z-10"
          aria-label="Next"
        >
          <span className="text-xl sm:text-2xl select-none">&#10095;</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mx-1 focus:outline-none ${
              idx === current ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
