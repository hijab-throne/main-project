import React, { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { products } from "./constants.js";
import ProductDescription from "./ProductDescription.jsx";
import ColorFilter from "./ColourFilter.jsx";
import ProductGrid from "./ProductGrid.jsx";
import Features from "./Features.jsx";

export default function ProductPage(props) {
  const {
    features,
    details,
    title,
    description,
    mainImage,
    mainAlt,
    featuresTitle,
    showMainImage,
      imagePosition,
    arrayWithPalettes = [],
  } = props;

  const [selectedPalette, setSelectedPalette] = useState("");
  const [pathname] = useLocation();
  const [_, category, subCategory] = pathname.split("/") || [];

  const { uniquePalettes, filteredProducts } = useMemo(() => {
    const categorizedProducts =
      products?.[category]?.[subCategory] ?? products?.[category] ?? [];
    const uniquePalettes = Array.from(
      new Set(categorizedProducts.map((h) => h.palette))
    ).filter(Boolean);

    const filteredProducts = selectedPalette
      ? categorizedProducts.filter((h) => h.palette === selectedPalette)
      : categorizedProducts;

    return { uniquePalettes, filteredProducts };
  }, [category, subCategory, selectedPalette]);

  return (
    <div className="w-full h-full md:px-32 px-6">
      <ProductDescription
        title={title}
        description={description}
        details={details}
        imageSrc={mainImage}
        showMainImage={showMainImage}
        imageAlt={mainAlt}
      />
      <Features title="Karakteristikat" features={features} />
      <div className="mt-8">
        <ColorFilter
          selectedPalette={selectedPalette}
          setSelectedPalette={setSelectedPalette}
          uniquePalettes={uniquePalettes}
          arrayWithPalettes={arrayWithPalettes}
          productCount={filteredProducts.length}
        />
        <ProductGrid
            products={filteredProducts}
            imagePosition={imagePosition}
        />
      </div>
    </div>
  );
}
