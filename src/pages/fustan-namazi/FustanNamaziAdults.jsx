import React from "react";
import OptimizedImage from "../../components/ImageOptimized.jsx";

const products = [
  {
    id: 1,
    image: "/fustane-namazi/te_rritur/1.jpeg",
    name: "Fustan Namazi - Blu Mbretëror",
    price: "2200L",
    color: "Ngjyrë e thellë dhe qetësuese për një përqendrim të plotë gjatë faljes"
  },
  {
    id: 2,
    image: "/fustane-namazi/te_rritur/2.jpg",
    name: "Fustan Namazi - E Zezë Klasike",
    price: "2200L",
    color: "Elegancë dhe thjeshtësi – zgjedhja më e preferuar për çdo ditë"
  },
  {
    id: 3,
    image: "/fustane-namazi/te_rritur/3.jpeg",
    name: "Fustan Namazi - Rozë e Butë",
    price: "2200L",
    color: "Ngjyrë delikate dhe femërore që sjell qetësi dhe rehati"
  },
  {
    id: 4,
    image: "/fustane-namazi/te_rritur/4.jpg",
    name: "Fustan Namazi - Bezhë Natyrale",
    price: "2200L",
    color: "Neutral dhe i lehtë për t’u kombinuar – perfekt për çdo stinë"
  }
];


const FustanNamaziAdults = () => {
  return (
      <>
        <div className="w-full h-full md:px-32 px-6">
          <div className="md:mt-8 mt-2 rounded-lg flex flex-col lg:flex-row items-center lg:items-start bg-white">
            <div className="max-w-xl text-center lg:text-left md:p-8 p-4 pb-0">
              <h1 className="text-3xl font-semibold">Fustane Namazi për të Rritur</h1>
             <p className="text-gray-600 md:mt-4 mt-2">
              Zbulo koleksionin tonë të fustaneve për namaz – të butë, të rehatshëm dhe të dizajnuar për rehati
              maksimale gjatë faljes.
            </p>

            <div className="mt-4 flex flex-col pb-4">
              <div className="text-gray-700">
                <strong>Çmimi:</strong>{" "}
                <span className="text-primary font-bold">2200L</span>
              </div>
              <div className="text-gray-700">
                <strong>Ngjyra të disponueshme:</strong>{" "}
                <span className="text-gray-600">20 variante</span>
              </div>
            </div>

            </div>
          </div>
        </div>
        <section className="w-full h-full md:px-32 px-6 mt-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
            Modelet më të preferuara
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      imageClassName='object-top'
                      className="w-full h-72"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{product.color}</p>
                    <p className="text-primary font-bold mt-2">{product.price}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>
      </>
  );
};

export default FustanNamaziAdults;
