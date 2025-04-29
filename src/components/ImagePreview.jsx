import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import OptimizedImage from './ImageOptimized.jsx';

// Create context
const ImagePreviewContext = createContext();

// Provider
export const ImagePreviewProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const openImage = useCallback((url) => {
    setImageUrl(url);
  }, []);

  const closeImage = useCallback(() => {
    setImageUrl(null);
  }, []);

  return (
    <ImagePreviewContext.Provider value={{ openImage }}>
      {children}
      {imageUrl && <ImagePreviewModal imageUrl={imageUrl} onClose={closeImage} />}
    </ImagePreviewContext.Provider>
  );
};

// Hook
export const useImagePreview = () => {
  return useContext(ImagePreviewContext);
};

// Modal
const ImagePreviewModal = ({ imageUrl, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-y-auto transition-all"
      onClick={onClose}
    >
      <div
        className="relative p-4 my-auto rounded-lg max-w-[90vw] max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        {isLoaded && <button
          className="absolute top-4 right-4 bg-white text-gray-700 hover:bg-gray-200 z-50 hover:text-gray-900 rounded-full p-2 shadow-md transition"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={20} />
        </button>}

        {/* Loading background */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
        )}

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg">
            Failed to load image
          </div>
        )}

        {/* OptimizedImage */}
        {!hasError && (
          <OptimizedImage
            src={imageUrl}
            alt="Preview"
            variant="modal"
            className={`max-w-full max-h-full rounded-lg transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            imageClassName='object-contain'
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};
