import React, { memo, useRef, useState, useEffect } from 'react';
import {useImagePreview} from "../ImagePreview.jsx";
import OptimizedImage from "../ImageOptimized.jsx";

const ProductItem = memo((props) => {
  const {color,width,height,name,image} = props?.product || {}
  const ref = useRef();
    const { openImage } = useImagePreview();
  // Priority items (first row above the fold) skip lazy-loading entirely
  // so the browser can fetch the LCP image immediately.
  const [isVisible, setIsVisible] = useState(!!props.priority);

  useEffect(() => {
    if (props.priority) return; // already visible
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px 0px' // Start loading 200px before entering viewport
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [props.priority]);

  return (
    <div ref={ref} className="relative md:w-44 w-full">
      <div className="relative aspect-square cursor-pointer"  onClick={()=>openImage(image)}>
        {isVisible && (
          <OptimizedImage
            src={image}
            alt={name || "Product"}
            loading={props.priority ? "eager" : "lazy"}
            fetchpriority={props.priority ? "high" : undefined}
            decoding="async"
            priority={props.priority}
            imageClassName={`object-cover ${props.imagePosition ? props.imagePosition : "object-center"} `}
            className='rounded-lg w-full h-full transition-opacity duration-300'
            {...(width ? {width:width,height:height} : {}) }
          />
        )}
        <div
          className={`w-4 h-4 rounded-full border absolute bottom-2 right-2 ${props.hideColorCircle ? "hidden" : ""}`}
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
});

// First N items get fetchpriority=high and skip IntersectionObserver
// so the LCP image (which is in the grid for /kapuc/* and similar pages)
// loads as early as possible.
const PRIORITY_COUNT = 4;

const ProductGrid = ({ products, imagePosition, hideColorCircle }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product, i) => (
      <ProductItem
        key={product.id}
        product={product}
        imagePosition={imagePosition}
        hideColorCircle={hideColorCircle}
        priority={i < PRIORITY_COUNT}
      />
    ))}
  </div>
);

export default ProductGrid;