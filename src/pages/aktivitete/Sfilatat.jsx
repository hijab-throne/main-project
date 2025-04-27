import React, { useState } from 'react'

const sfilata_2022 = [
  { id: 1, image: "../assets/aktivitetet/sfilatat/2022/image00001.jpeg" },
  { id: 2, image: "../assets/aktivitetet/sfilatat/2022/image00002.jpeg" },
  { id: 3, image: "../assets/aktivitetet/sfilatat/2022/image00003.jpeg" },
  { id: 4, image: "../assets/aktivitetet/sfilatat/2022/image00004.jpeg" },
  { id: 5, image: "../assets/aktivitetet/sfilatat/2022/image00005.jpeg" },
  { id: 6, image: "../assets/aktivitetet/sfilatat/2022/image00006.jpeg" },
  { id: 7, image: "../assets/aktivitetet/sfilatat/2022/image00007.jpeg" },
  { id: 8, image: "../assets/aktivitetet/sfilatat/2022/image00008.jpeg" },
  { id: 9, image: "../assets/aktivitetet/sfilatat/2022/image00009.jpeg" },
  { id: 10, image: "../assets/aktivitetet/sfilatat/2022/image00010.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2022/image00011.jpeg" }
];

const sfilata_2020 = [
  { id: 1, image: "../assets/aktivitetet/sfilatat/2020/image00012.jpeg" },
  { id: 2, image: "../assets/aktivitetet/sfilatat/2020/image00013.jpeg" },
  { id: 3, image: "../assets/aktivitetet/sfilatat/2020/image00014.jpeg" },
  { id: 4, image: "../assets/aktivitetet/sfilatat/2020/image00015.jpeg" },
  { id: 5, image: "../assets/aktivitetet/sfilatat/2020/image00016.jpeg" },
  { id: 6, image: "../assets/aktivitetet/sfilatat/2020/image00017.jpeg" },
  { id: 7, image: "../assets/aktivitetet/sfilatat/2020/image00018.jpeg" },
  { id: 8, image: "../assets/aktivitetet/sfilatat/2020/image00019.jpeg" },
  { id: 9, image: "../assets/aktivitetet/sfilatat/2020/image00020.jpeg" },
  { id: 10, image: "../assets/aktivitetet/sfilatat/2020/image00021.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00022.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00023.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00024.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00025.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00026.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00027.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00028.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00029.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00030.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00031.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00036.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00037.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00038.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00039.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00040.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00041.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00042.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00043.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00044.jpeg" },
  { id: 11, image: "../assets/aktivitetet/sfilatat/2020/image00045.jpeg" },
];

const sfilata_2019 = [
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00046.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00047.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00048.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00049.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00050.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00051.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00052.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00053.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00054.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00055.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00056.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00057.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00058.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00059.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00060.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00061.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00062.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00063.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00064.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00065.png" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00066.jpeg" },
  { id: 1, image: "../assets/aktivitetet/sfilatat/2019/image00067.jpeg" },
    ]


const Sfilatat = () => {
  // track open/closed for each year
  const [open2022, setOpen2022] = useState(false)
  const [open2020, setOpen2020] = useState(false)
  const [open2019, setOpen2019] = useState(false)

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Sfilatat e Bamirësisë për Kauzën e Fëmijëve me Kancer dhe Autik
        </h1>
        <section className="mb-12">
          <img
              src="../assets/aktivitetet/sfilatat/2022/sfilata.jpeg"
              alt="Sfilatë bamirësie"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-xl md:text-3xl text-center font-semibold text-gray-700 mb-4">
            Sfilatat e Bamirësisë
          </h2>
          <p className="text-sm md:text-lg text-center text-gray-600">
            Ne kemi organizuar sfilata bamirësie të dedikuara për mbledhjen e fondeve dhe ndërgjegjësimin për fëmijët që
            luftojnë me kancer. Këto evente sjellin së bashku komunitetin për të mbështetur familjet e prekura dhe për
            të dhënë shpresë për një të ardhme më të mirë.
          </p>
          <p className="text-sm md:text-lg text-center text-gray-600 mt-4">
            Gjatë këtyre sfilatave, ne prezantojmë koleksionet tona më të mira, duke i dhënë mundësinë pjesëmarrësve të
            kontribuojnë në një kauzë të denjë ndërsa shijojnë një mbrëmje elegante dhe me kuptim.
          </p>
        </section>

        {/* —————————————— 2022 —————————————— */}
        <h2 className="text-xl md:text-3xl text-center font-semibold text-gray-700 mb-4">
          Sfilata 2022
        </h2>
        <section className="flex flex-wrap justify-center gap-4">
          {sfilata_2022.map((item, idx) => (
              <img
                  key={item.id}
                  src={item.image}
                  alt={`Sfilata ${item.id}`}
                  className={`w-40 h-40  sm:w-48 sm:h-48  md:w-56 md:h-56  lg:w-64 lg:h-64  object-cover rounded-lg shadow-md
                ${idx > 2 && !open2022 ? 'hidden md:block' : ''}
              `}
              />
          ))}
        </section>
        {/* toggle only on mobile */}
        <div className="text-center mt-4 md:hidden">
          <button
              onClick={() => setOpen2022(o => !o)}
              className="text-blue-600 hover:underline"
          >
            {open2022
                ? 'Shiko më pak'
                : `Shiko ${sfilata_2022.length - 3} foto të tjera`}
          </button>
        </div>

        {/* —————————————— 2020 —————————————— */}
        <div className="my-8">
          <h2 className="text-xl md:text-3xl text-center font-semibold text-gray-700 mb-4">
            Sfilata 2020
          </h2>
          <section className="flex flex-wrap justify-center gap-4">
            {sfilata_2020.map((item, idx) => (
                <img
                    key={item.id}
                    src={item.image}
                    alt={`Sfilata ${item.id}`}
                    className={`
                  w-40 h-40 object-cover rounded-lg shadow-md
                  ${idx > 2 && !open2020 ? 'hidden md:block' : ''}
                `}
                />
            ))}
          </section>
          <div className="text-center mt-4 md:hidden">
            <button
                onClick={() => setOpen2020(o => !o)}
                className="text-blue-600 hover:underline"
            >
              {open2020
                  ? 'Shiko më pak'
                  : `Shiko ${sfilata_2020.length - 3} foto të tjera`}
            </button>
          </div>
        </div>

        {/* —————————————— 2019 —————————————— */}
        <h2 className="text-xl md:text-3xl text-center font-semibold text-gray-700 mb-4">
          Sfilata 2019
        </h2>
        <section className="flex flex-wrap justify-center gap-4">
          {sfilata_2019.map((item, idx) => (
              <img
                  key={item.id}
                  src={item.image}
                  alt={`Sfilata ${item.id}`}
                  className={`w-40 h-40  sm:w-48 sm:h-48  md:w-56 md:h-56  lg:w-64 lg:h-64 object-cover rounded-lg shadow-md
                ${idx > 2 && !open2019 ? 'hidden md:block' : ''}
              `}
              />
          ))}
        </section>
        <div className="text-center mt-4 md:hidden">
          <button
              onClick={() => setOpen2019(o => !o)}
              className="text-blue-600 hover:underline"
          >
            {open2019
                ? 'Shiko më pak'
                : `Shiko ${sfilata_2019.length - 3} foto të tjera`}
          </button>
        </div>

        {/* rest of your content unchanged */}
        <section className="text-center pt-8">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mb-4">
            Angazhimi Ynë
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Përmes këtyre iniciativave, ne synojmë jo vetëm të mbledhim fonde, por
            edhe të rrisim ndërgjegjësimin dhe të nxisim solidaritetin në
            komunitetin tonë.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Sfilatat;
