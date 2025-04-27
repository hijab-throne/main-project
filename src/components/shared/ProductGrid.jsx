import React, { memo, useRef, useState, useEffect } from 'react';
import {useImagePreview} from "../ImagePreview.jsx";

const ProductItem = memo((props) => {
  const {color,width,height,name,image} = props?.product || {}
  const ref = useRef();
    const { openImage } = useImagePreview();
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={ref} className="relative md:w-44 w-full">
      <div className="relative aspect-square cursor-pointer"  onClick={()=>openImage(image)}>
        {isVisible && (
          <img
            src={image}
            alt={name || "Product"}
            loading="lazy"
            decoding="async"
            className={`rounded-lg w-full h-full object-cover ${props.imagePosition ? props.imagePosition : "object-center"} transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            {...(width ? {width:width,height:height} : {}) }
          />
        )}
        {!loaded && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse" />
        )}
        <div
          className={`w-4 h-4 rounded-full border absolute bottom-2 right-2 ${props.hideColorCircle ? "hidden" : ""}`}
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
});

const ProductGrid = ({ products, imagePosition, hideColorCircle }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductItem key={product.id} product={product} imagePosition={imagePosition} hideColorCircle={hideColorCircle}/>
    ))}
  </div>
);

export default ProductGrid;