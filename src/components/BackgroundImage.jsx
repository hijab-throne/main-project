import React, { useEffect, useState } from 'react';

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

const checkWebpSupport = () => {
  if (typeof document === 'undefined') return false;

  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

const BackgroundImage = ({
  desktopJpg,
  mobileJpg,
  desktopWebp,
  mobileWebp,
  className = '',
  children
}) => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const isMobile = isMobileDevice();
    const supportsWebp = checkWebpSupport();

    if (supportsWebp) {
      setBgImage(isMobile ? mobileWebp : desktopWebp);
    } else {
      setBgImage(isMobile ? mobileJpg : desktopJpg);
    }
  }, []);

  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
