import React, { useState, useEffect, useMemo, useRef } from 'react';

// Detect mobile devices
const isMobileDevice = () =>
  typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Detect if URL is absolute
const isFullUrl = (url = '') => /^https?:\/\//i.test(url);

// Detect if image is SVG
const isSvg = (src = '') => src.toLowerCase().endsWith('.svg');

// Extract and clean classes based on regex
const extractClasses = (classStr = '', regex) => {
  const matches = [...(classStr.match(regex) || [])];
  const cleaned = classStr.replace(regex, '').trim();
  return { matches, cleaned };
};

// Correct width detection
const hasWidthClass = (classStr = '') =>
  /\bw-(\d+|\[\d+[a-zA-Z%]*\]|[1-9]\/[1-9]|auto)\b/.test(classStr);

// Build className safely
const buildClassName = (...classes) =>
  classes.flat().filter(Boolean).join(' ');

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
  const wrapperRef = useRef(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

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

  const aspectRatio = finalWidth && finalHeight
    ? finalHeight / finalWidth
    : 1 / fallbackAspectRatio;

  // IntersectionObserver to lazy-load
  useEffect(() => {
    if (!wrapperRef.current) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = (e) => {
    props?.onLoad?.();
    if (!isLoaded) {
      const img = e.currentTarget;
      if (!width || !height) {
        setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
      }
      setIsLoaded(true);
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  const { matches: roundedClasses, cleaned: afterRoundedClassName } = extractClasses(
    className,
    /rounded(-[^\s]*)?/g
  );

  const { matches: objectClasses, cleaned: pureWrapperClassName } = extractClasses(
    afterRoundedClassName,
    /\bobject-(cover|contain|fill|none|scale-down)\b/g
  );

  const hasObjectClass = [...objectClasses, imageClassName].some(cls =>
    /\bobject-(cover|contain|fill|none|scale-down)\b/.test(cls)
  );

  const shouldAddWrapperWFull = !hasWidthClass(className);
  const shouldAddImageWFull = !hasWidthClass(imageClassName);

  const wrapperWidthClass = shouldAddWrapperWFull ? 'w-full' : '';
  const imageWidthClass = shouldAddImageWFull ? 'w-full' : '';

  const finalImageClassName = buildClassName(
    'absolute inset-0',
    imageWidthClass,
    'h-full',
    'transition-opacity duration-700',
    isLoaded ? 'opacity-100' : 'opacity-0',
    !hasObjectClass && 'object-cover',
    objectClasses,
    imageClassName,
    roundedClasses
  );

  const wrapperClassName = buildClassName(
    'relative overflow-hidden',
    wrapperWidthClass,
    pureWrapperClassName,
    roundedClasses
  );

  const wrapperStyle = {
    paddingTop: `${aspectRatio * 100}%`,
    ...style,
  };

  const sharedImgProps = {
    alt,
    title: title || alt,
    loading,
    onError: handleError,
    className: finalImageClassName,
    ...props,
    onLoad: handleLoad,
  };

  if (hasError) {
    return (
      <div
        ref={wrapperRef}
        className={buildClassName('flex items-center justify-center bg-gray-100 text-gray-500', wrapperClassName)}
        style={style}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={wrapperClassName} style={style}>
      <div style={wrapperStyle}></div>

      {!isLoaded && (
        <div className={buildClassName('absolute inset-0 bg-gray-200 animate-pulse', roundedClasses)} />
      )}

      {shouldLoad && (
        shouldUseDirect ? (
          <img {...sharedImgProps} src={finalSrc} />
        ) : (
          <picture>
            <source srcSet={finalSrc} type="image/webp" />
            <img {...sharedImgProps} src={fallbackSrc} />
          </picture>
        )
      )}
    </div>
  );
};

export default OptimizedImage;
