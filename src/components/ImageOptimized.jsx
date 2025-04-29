import React, { useState, useEffect, useMemo } from 'react';

// Helpers
const isMobileDevice = () =>
  typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const isFullUrl = (url = '') => /^https?:\/\//i.test(url);
const isSvg = (src = '') => src.toLowerCase().endsWith('.svg');

const extractClasses = (classStr = '', regex) => {
  const matches = [...(classStr.match(regex) || [])];
  const cleaned = classStr.replace(regex, '').trim();
  return { matches, cleaned };
};

const buildClassName = (...classes) => classes.flat().filter(Boolean).join(' ');

const OptimizedImage = ({
  src = '',
  alt = '',
  loading = 'lazy',
  width,
  height,
  title,
  className = '',
  imageClassName = '',
  fallbackAspectRatio = 16 / 9,
  variant = 'desktop',
  style = {},
  ...props
}) => {
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isMobile = useMemo(() => isMobileDevice(), []);
  const shouldUseDirect = useMemo(() => isFullUrl(src) || isSvg(src), [src]);

  const fileBase = src.startsWith('/')
    ? src.slice(1, src.lastIndexOf('.'))
    : src.slice(0, src.lastIndexOf('.'));
  const folder = variant === 'modal' ? 'modal' : isMobile ? 'mobile' : 'desktop';
  const finalSrc = shouldUseDirect ? src : `/assets/${folder}/${fileBase}.webp`;
  const fallbackSrc = finalSrc.replace(/\.webp$/i, '.jpg');

  const finalWidth = width || naturalSize.width;
  const finalHeight = height || naturalSize.height;
  const aspectRatio = finalWidth && finalHeight ? finalWidth / finalHeight : fallbackAspectRatio;

  const wrapperStyle = {
    aspectRatio: `${aspectRatio}`,
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  useEffect(() => {
    const img = new Image();
    img.src = finalSrc;
    img.onload = () => {
      setIsLoaded(true);
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => setHasError(true);
  }, [finalSrc]);

  // Extract rounded-* classes
  const { matches: roundedClasses, cleaned: afterRoundedClassName } = extractClasses(className, /rounded(-[^\s]*)?/g);

  // Extract object-* classes from wrapper and move to image
  const { matches: objectClasses, cleaned: pureWrapperClassName } = extractClasses(afterRoundedClassName, /\bobject-(cover|contain|fill|none|scale-down)\b/g);

  const hasObjectClass = /\bobject-(cover|contain|fill|none|scale-down)\b/.test(
    [...objectClasses, imageClassName].join(' ')
  );

  const finalImageClassName = buildClassName(
    'w-full',
    'h-full',
    'transition-opacity',
    'duration-700',
    isLoaded ? 'opacity-100' : 'opacity-0',
    !hasObjectClass && 'object-cover',
    objectClasses,
    imageClassName,
    roundedClasses
  );

  const wrapperClassName = buildClassName(
    pureWrapperClassName,
    roundedClasses
  );

  const sharedImgProps = {
    alt,
    title: title || alt,
    loading,
    width: finalWidth || undefined,
    height: finalHeight || undefined,
    onError: () => setHasError(true),
    className: finalImageClassName,
    ...props,
  };

  if (hasError) {
    return (
      <div
        className={buildClassName(
          'flex items-center justify-center bg-gray-100 text-gray-500',
          wrapperClassName
        )}
        style={wrapperStyle}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      {!isLoaded && (
        <div className={buildClassName('absolute inset-0 bg-gray-200 animate-pulse', roundedClasses)} />
      )}
      {shouldUseDirect ? (
        <img {...sharedImgProps} src={finalSrc} />
      ) : (
        <picture>
          <source srcSet={finalSrc} type="image/webp" />
          <img {...sharedImgProps} src={fallbackSrc} />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
