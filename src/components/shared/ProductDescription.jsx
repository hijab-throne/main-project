import React from "react";
import OptimizedImage from "../ImageOptimized.jsx";

const ProductDescription = props => {
  const { title, description, details, imageSrc, imageAlt, showMainImage } = props;
  return <div className="md:mt-8 mt-2 rounded-lg flex flex-col lg:flex-row items-center lg:items-start bg-white">
    <div className="max-w-xl text-center lg:text-left md:p-8 p-4 pb-0">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-gray-600 md:mt-4 mt-2">{description}</p>
      <div className="flex flex-col md:mt-4 mt-2">
        {details.map((detail, index) => (
          <span key={index} dangerouslySetInnerHTML={{__html: detail}}/>
        ))}
      </div>
    </div>
    <div className={`${showMainImage === false ? "hidden" : ""} flex w-full md:my-6 my-2 lg:mt-auto md:px-8 px-2`}>
      <OptimizedImage
        src={imageSrc}
        alt={imageAlt}
        imageClassName='md:object-cover object-contain'
        className="md:min-h-[300px] md:h-full h-[250px] mx-auto rounded-lg md:w-64 w-full"
      />
    </div>
  </div>
}
export default ProductDescription