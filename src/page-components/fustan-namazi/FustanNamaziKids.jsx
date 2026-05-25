import React from "react";
import OptimizedImage from "../../components/ImageOptimized.jsx";

const CONTENT = {
  sq: {
    heading: "Fustane Namazi për fëmijë",
    intro: "Fustane namazi për vajza të moshave të ndryshme, në ngjyra të ndryshme dhe me material të butë për rehati maksimale gjatë faljes. Ideale për të vegjlit që po mësojnë adhurimin",
    priceLabel: "Çmimi:",
  },
  en: {
    heading: "Prayer Dresses for Kids",
    intro: "Prayer dresses for girls of all ages, in a variety of colors and crafted from soft material for maximum comfort during prayer. Ideal for little ones learning to worship.",
    priceLabel: "Price:",
  },
};

const products = [

  {
    id: 2,
    image: "/fustane-namazi/femije/2.jpg",
  },
  {
    id: 3,
    image: "/fustane-namazi/femije/3.jpg",
  },
  {
    id: 4,
    image: "/fustane-namazi/femije/4.jpg",
  },
      {
    id: 5,
    image: "/fustane-namazi/femije/6.jpeg",
  },      {
    id: 7,
    image: "/fustane-namazi/femije/7.jpeg",
  },
      {
    id: 8,
    image: "/fustane-namazi/femije/8.jpeg",
  },
];

const FustanNamaziKids = (props) => {
  const t = CONTENT[props?.locale || "sq"] || CONTENT.sq;
  return (
      <div>
        <div className="w-full h-full md:px-32 px-6">
          <div className="md:mt-8 mt-2 rounded-lg flex flex-col lg:flex-row items-center lg:items-start bg-white">
            <div className="max-w-xl text-center lg:text-left md:p-8 p-4 pb-0">
              <h1 className="text-3xl font-semibold">{t.heading}</h1>
              <p className="text-gray-600 md:mt-4 mt-2">
                {t.intro}
              </p>

              <div className="mt-4 flex flex-col pb-4">
                <div className="text-gray-700">
                  <strong>{t.priceLabel}</strong>{" "}
                  <span className="text-primary font-bold">1500L</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Image Grid Only */}
        <section className="w-full h-full md:px-32 px-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="rounded-lg overflow-hidden shadow">
                  <OptimizedImage
                      src={product.image}
                      alt={`Product ${product.id}`}
                      imageClassName='object-top'
                      className="w-full h-full"
                  />
                </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default FustanNamaziKids;
