import React from "react";
import OptimizedImage from "../../components/ImageOptimized.jsx";

const CONTENT = {
  sq: {
    heading: 'Aksesorë Hijabi',
    categories: [
      { name: "Spila", description: "Stil dhe siguri. Spilat tona për hixhab mbajnë shaminë pa e dëmtuar, me një prekje elegante.", image: "/aksesor/m2.jpeg" },
      { name: "Dhikermates", description: "Dhikërmatës elektronik, me gurë ose të thjeshtë.", image: "/aksesor/m3.jpeg" },
      { name: "Kapse Perle", description: "Siguri pa gjilpëra. Kapset tona për hixhab mbajnë fort shaminë pa e shpuar apo dëmtuar, duke ofruar rehati dhe stil gjatë gjithë ditës.", image: "/aksesor/1.jpeg" },
      { name: "Misk", description: "Misk Tahara është një parfum shumë i njohur dhe i vlerësuar, veçanërisht në kulturat e Lindjes së Mesme.", image: "/aksesor/m.jpeg" },
    ],
    krahe: {
      name: "Krahë",
      description: "Firma mercan, material i butë, i hollë dhe i freskët.",
    },
  },
  en: {
    heading: 'Hijab Accessories',
    categories: [
      { name: "Pins", description: "Style and security. Our hijab pins hold your scarf in place without damaging it, with a touch of elegance.", image: "/aksesor/m2.jpeg" },
      { name: "Dhikr Counters", description: "Electronic dhikr counters, with beads or plain.", image: "/aksesor/m3.jpeg" },
      { name: "Pearl Clips", description: "Secure without needles. Our hijab clips hold your scarf firmly without piercing or damaging the fabric, providing comfort and style throughout the day.", image: "/aksesor/1.jpeg" },
      { name: "Misk", description: "Misk Tahara is a beloved and highly valued perfume, especially in Middle Eastern cultures.", image: "/aksesor/m.jpeg" },
    ],
    krahe: {
      name: "Sleeves",
      description: "Mercan brand — soft, thin, and breathable material.",
    },
  },
};

export default function Aksesor(props) {
  const t = CONTENT[props.locale || "sq"] || CONTENT.sq;
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">{t.heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.categories.map((item, index) => (
              <div key={index} className="border shadow rounded-xl flex flex-col items-center text-center">
                  <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      imageClassName='object-cover object-center'
                      className="w-full h-64  mb-4 rounded-t"
                  />
                  <div className="p-2">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                  </div>
              </div>
          ))}
          <div className="border shadow rounded-xl flex flex-col items-center text-center p-2">
              <OptimizedImage
                  imageClassName='object-contain'
                  src="/aksesor/krahe.png"
                  alt={t.krahe.name}
                  className="w-full h-64 mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{t.krahe.name}</h3>
              <p className="text-gray-600">{t.krahe.description}</p>
          </div>
      </div>
    </div>
  );
}
