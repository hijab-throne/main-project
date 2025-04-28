import React, { createContext, useContext, useState, useCallback } from 'react';
import { X } from "lucide-react";
import OptimizedImage from "./ImageOptimized.jsx";
// Create Context
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

// Hook to use inside components
export const useImagePreview = () => {
  return useContext(ImagePreviewContext);
};

// Modal
const ImagePreviewModal = ({ imageUrl, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
          className="relative p-4 my-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
            className="z-10 absolute top-6 right-6 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-full p-1.5 shadow transition-all"
            onClick={onClose}
            aria-label="Close preview"
        >
          <X size={20}/>
        </button>


        {/* Image */}
        <OptimizedImage
            src={imageUrl}
            variant="modal"
            alt="Preview"
            className="max-w-[90vw] h-[90vh] w-auto object-cover rounded-lg animate-fadeIn"
        />
      </div>
    </div>
  );
};