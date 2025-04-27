import React from "react";

const categories = [
  { name: "Spila", description: "Stil dhe siguri. Spilat tona për hixhab mbajnë shaminë pa e dëmtuar, me një prekje elegante.", image: "../src/assets/aksesor/m2.jpeg" },
  // { name: "Magnet", description: "Magnetët tanë të hixhabit nuk dëmtojnë pëlhurat dhe ofrojnë siguri të lartë pa i shpuar apo dëmtuar ato, duke mbajtur fort edhe disa shtresa.", image: "../src/assets/aksesor/img3.jpeg" },
  { name: "Dhikermates", description: "Dhikërmatës elektronik, me gurë ose të thjeshtë.", image: "../src/assets/aksesor/m3.jpeg" },
  { name: "Kapse Perle", description: "Siguri pa gjilpëra. Kapset tona për hixhab mbajnë fort shaminë pa e shpuar apo dëmtuar, duke ofruar rehati dhe stil gjatë gjithë ditës.", image: "../src/assets/aksesor/1.jpeg" },
  // { name: "Krahe", description: "Firma mercan, material i butë, i hollë dhe i freskët.", image: "../src/assets/aksesor/krahe.png" },
  { name: "Misk", description: "Misk Tahara është një parfum shumë i njohur dhe i vlerësuar, veçanërisht në kulturat e Lindjes së Mesme.", image: "../src/assets/aksesor/m.jpeg" },
];

export default function Aksesor() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {categories.map((item, index) => (
              <div key={index} className="border shadow rounded-xl flex flex-col items-center text-center">
                  <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover object-center mb-4 rounded-t"
                  />
                  <div className="p-2">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                  </div>
              </div>
          ))}
          <div className="border shadow rounded-xl flex flex-col items-center text-center p-2">
              <img
                  src="../src/assets/aksesor/krahe.png"
                  alt="krahe"
                  className="w-full h-64 object-contain mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Krahë</h3>
              <p className="text-gray-600">Firma mercan, material i butë, i hollë dhe i freskët.</p>
          </div>
      </div>
  );
}
