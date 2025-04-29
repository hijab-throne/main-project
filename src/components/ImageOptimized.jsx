import React, { useState, useEffect, useMemo } from 'react';

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const isFullUrl = (url = '') => /^https?:\/\//i.test(url);
const isSvg = (src = '') => src.toLowerCase().endsWith('.svg');

const OptimizedImage = ({
  src = '',
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height,
  title,
  variant = 'desktop',
  fallbackAspectRatio = 16 / 9,
  ...props
}) => {
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isMobile = useMemo(() => isMobileDevice(), []);
  const shouldUseDirect = useMemo(() => isFullUrl(src) || isSvg(src), [src]);

  // Construct the final correct URL
  const fileBase = src.startsWith('/') ? src.slice(1, src.lastIndexOf('.')) : src.slice(0, src.lastIndexOf('.'));
  const folder = variant === 'modal' ? 'modal' : isMobile ? 'mobile' : 'desktop';
  const finalSrc = shouldUseDirect ? src : `/assets/${folder}/${fileBase}.webp`;
 const handleLoad = () => {
    setIsLoaded(true);
  };
  useEffect(() => {
      const img = new Image();
      img.src = finalSrc; // preload the final real src
      img.onload = () => {
          handleLoad()
        setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.onerror = () => {
        setHasError(true);
      };
  }, [finalSrc, width, height]);

  const finalWidth = width || naturalSize.width;
  const finalHeight = height || naturalSize.height;

  const aspectRatio = finalWidth && finalHeight
    ? finalWidth / finalHeight
    : fallbackAspectRatio;

  const wrapperStyle = {
    aspectRatio: `${aspectRatio}`,
    position: 'relative',
    overflow: 'hidden',
    ...(props?.style || {}),
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-500 ${className}`}
        style={wrapperStyle}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <div className={className} style={wrapperStyle}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      {shouldUseDirect ? (
        <img
          src={finalSrc}
          alt={alt}
          title={title || alt}
          loading={loading}
          width={finalWidth || undefined}
          height={finalHeight || undefined}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      ) : (
        <picture>
          <source srcSet={finalSrc} type="image/webp" />
          <img
            src={finalSrc}
            alt={alt}
            title={title || alt}
            loading={loading}
            width={finalWidth || undefined}
            height={finalHeight || undefined}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
