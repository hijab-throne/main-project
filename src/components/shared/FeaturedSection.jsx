import { useState, useEffect, useRef } from 'react'
import OptimizedImage from "../ImageOptimized.jsx";

export default function FeaturedSection({ locale = 'sq' }) {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)
  const prevShowAllRef = useRef(showAll)

  const prefix = locale === 'en' ? '/en' : '';
  const sectionTitle = locale === 'en' ? 'Shop our latest products' : 'Bli produktet më të reja';
  const showMoreLabel = locale === 'en' ? 'Show more' : 'Shfaq më shumë';
  const showLessLabel = locale === 'en' ? 'Show less' : 'Shfaq më pak';

  const products = [
    {
      src: '/landing_page/lulu/DSCF6753.jpg',
      title: locale === 'en' ? 'Chiffon with Stones' : 'Chiffon me gurë',
      link: `${prefix}/chiffon/shall-ch-gur`,
      price: '1100 Lekë',
    },
    {
      src: '/landing_page/lulu/DSCF6736.jpg',
      title: locale === 'en' ? 'Shimmer Hijab' : 'Shami me shkëlqim',
      link: `${prefix}/shkelqim`,
      price: '1000 Lekë',
    },
    {
      src: '/landing_page/lulu/DSCF6812.jpg',
      title: locale === 'en' ? 'Satin' : 'Saten',
      link: `${prefix}/saten`,
      price: '900 Lekë',
    },
  ]

  useEffect(() => {
    if (prevShowAllRef.current && !showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    prevShowAllRef.current = showAll
  }, [showAll])

  return (
    <section className="max-w-7xl px-6 py-6 md:py-20 mx-auto" ref={sectionRef}>
      {/* Section Header */}
      <h2 className="text-2xl font-bold flex items-center justify-center text-gray-900 mb-8 md:mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
               1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125
               1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1
               5.513 7.5h12.974c.576 0 1.059.435 1.119
               1.007ZM8.625 10.5a.375.375 0 1 1-.75 0
               .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0
               .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span className="pl-3 text-2xl sm:text-3xl">{sectionTitle}</span>
      </h2>

      {/* 👇 Desktop view (always show all) */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <a href={product.link}
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            style={{ boxShadow: '0 10px 30px #8F89A9' }}
          >
            <OptimizedImage
              src={product.src}
              alt={product.title}
              imageClassName='object-cover object-top'
              className="w-full h-96"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-[#6F678E] font-bold text-md mt-1">
                {product.price}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* 👇 Mobile view (toggleable) */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-6">
          {(showAll ? products : [products[0]]).map((product, index) => (
            <a href={product.link}
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{ boxShadow: '0 10px 30px #8F89A9' }}
            >
              <OptimizedImage
                src={product.src}
                alt={product.title}
                imageClassName='object-cover object-top'
                className="w-full h-80"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-[#6F678E] font-bold text-md mt-1">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#6F678E] underline font-medium"
          >
            {showAll ? showLessLabel : showMoreLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
