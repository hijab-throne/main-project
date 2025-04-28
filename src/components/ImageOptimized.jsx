import React, { useMemo } from 'react';

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const isFullUrl = (url) => /^https?:\/\//i.test(url);
const isSvg = (src = "") => src.toLowerCase().endsWith('.svg');

const OptimizedImage = ({
  src = '',
  alt = '',
  className = '',
  loading = 'lazy',
  width,
  height,
  title,
  variant = 'desktop',
  ...props
}) => {
  const isMobile = useMemo(() => isMobileDevice(), []);

  const style = width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  const shouldUseDirect = isFullUrl(src) || isSvg(src);

  if (shouldUseDirect) {
    return (
      <img
        src={src}
        alt={alt}
        title={title || alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        style={style}
        {...props}
      />
    );
  }
  const fileBase = src.substring(0, src.lastIndexOf('.'));
  const folder = variant === 'modal' ? 'modal' : isMobile ? 'mobile' : 'desktop';

  return (
    <picture>
      <source srcSet={`/assets/${folder}/${fileBase}.webp`} type="image/webp" />
      <img
        src={`/assets/${folder}/${src}`}
        alt={alt}
        title={title || alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        style={style}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
