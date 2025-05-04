import OptimizedImage from "../ImageOptimized.jsx";


const ColorFilter = ({ selectedPalette, setSelectedPalette, uniquePalettes, productCount, arrayWithPalettes }) => (
  <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2 items-center">
          <button
              onClick={() => setSelectedPalette("")}
              className={`whitespace-nowrap px-4 py-2 border rounded-md text-sm font-medium text-gray-800 ${
                  !selectedPalette ? "bg-gray-200 border-black" : "hover:bg-gray-100 border-gray-300"
              }`}
          >
              Të gjitha
          </button>

          {uniquePalettes.map((paletteKey) => (
              <button
                  key={paletteKey}
                  onClick={() => setSelectedPalette(paletteKey)}
                  className={`w-full h-6 rounded-md border-2 overflow-hidden p-1 ${
                      selectedPalette === paletteKey ? "border-black" : "border-transparent"
                  }`}
              >
                  {/*<OptimizedImage src={arrayWithPalettes[paletteKey]} alt={paletteKey} className="w-full h-full"/>*/}
                  <img src={arrayWithPalettes[paletteKey]} alt={paletteKey} className="w-full h-full"/>
              </button>
          ))}
      </div>
      <p className="text-gray-600 md:flex hidden">
          {productCount} {productCount === 1 ? "produkt" : "produkte"}
      </p>
  </div>
);


export default ColorFilter;
