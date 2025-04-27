import React from "react";

const photos = [
  { id: 1, image: "../assets/aktivitetet/politikat/img1.jpeg" },
  { id: 2, image: "../assets/aktivitetet/politikat/img3.jpeg" },
  { id: 3, image: "../assets/aktivitetet/politikat/img4.jpeg" },
  { id: 4, image: "../assets/aktivitetet/politikat/img5.jpeg" },
];

export default function PolitikatEDhurimit() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Politikat e Mbështetjes dhe Dhurimit të Shamive për Vajzat që Mbulohen për Herë të Parë
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Në Hijab Throne, ne jemi të përkushtuar të mbështesim vajzat që vendosin të mbulohen për herë të parë, duke e
          kuptuar se ky është një hap i rëndësishëm dhe i veçantë në jetën e tyre. Për këtë arsye, kemi krijuar politika
          specifike për të ofruar mbështetje dhe dhurata në këtë udhëtim të ri.
        </p>

        <div className="space-y-12 mt-8">
          {[
            {
              title: "1. Programi i Dhurimit të Shamive",
              text: "Çdo vajzë që mbulohet për herë të parë mund të aplikojë për të marrë një shami falas nga koleksioni ynë. Ne besojmë se çdo fillim duhet të jetë i veçantë, dhe kjo dhuratë është një mënyrë për të shprehur mbështetjen dhe inkurajimin tonë. Së bashku me shaminë, ne ofrojmë një udhëzues praktik që ndihmon vajzat të mësojnë mënyrat e ndryshme të mbajtjes së hijabit dhe si të kujdesen për të.",
              image: photos[0].image
            },
            {
              title: "2. Konsultime Personale",
              text: "Ne ofrojmë konsultime personale për vajzat dhe familjet e tyre për t’i ndihmuar të ndihen më të sigurta dhe të mbështetura.",
              image: photos[1].image
            },
            {
              title: "3. Politika e Zbritjeve për Fillestaret",
              text: "Përveç dhuratave, ne ofrojmë gjithashtu zbritje të veçanta për vajzat që janë në fillimet e udhëtimit të tyre me hijabin. Kjo u mundëson atyre të eksplorojnë më shumë stile dhe materiale, duke e bërë këtë përvojë të përballueshme dhe të këndshme.",
              image: photos[2].image
            },
            {
              title: "4. Mbështetje Emocionale",
              text: "Ne e kuptojmë se mbulimi për herë të parë mund të sjellë sfida emocionale dhe sociale. Për këtë arsye, ne ofrojmë mbështetje të vazhdueshme përmes platformës sonë online, ku vajzat mund të ndajnë përvojat e tyre dhe të marrin mbështetje nga një komunitet i ngrohtë dhe mirëpritës.",
              image: photos[3].image
            }
          ].map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-gray-50 p-2 md:p-6 rounded-xl shadow-sm">
              <div className="md:w-1/2">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-700">{section.title}</h2>
                <p className="text-gray-600 mt-2">{section.text}</p>
              </div>
              <div className="md:w-1/2">
                <img src={section.image} alt={section.title} className=" w-64 md:w-full h-64 md:h-72 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-12 text-center">
          Me këto politika, ne synojmë të bëjmë këtë udhëtim të ri më të lehtë dhe të mbushur me pozitivitet për çdo
          vajzë që vendos të mbulohet për herë të parë. Hijab Throne është këtu për t’i mbështetur ato në çdo hap të
          rrugës së tyre.
        </p>
      </div>
    </div>
  );
}
