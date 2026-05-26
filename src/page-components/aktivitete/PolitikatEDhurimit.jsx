import React from "react";
import OptimizedImage from "../../components/ImageOptimized.jsx";

const photos = [
  { id: 1, image: "/aktivitetet/politikat/img1.jpeg" },
  { id: 2, image: "/aktivitetet/politikat/img3.jpeg" },
  { id: 3, image: "/aktivitetet/politikat/img4.jpeg" },
  { id: 4, image: "/aktivitetet/politikat/img5.jpeg" },
];

const CONTENT = {
  sq: {
    title: "Politikat e Mbështetjes dhe Dhurimit të Shamive për Vajzat që Mbulohen për Herë të Parë",
    intro: "Në Hijab Throne, ne jemi të përkushtuar të mbështesim vajzat që vendosin të mbulohen për herë të parë, duke e kuptuar se ky është një hap i rëndësishëm dhe i veçantë në jetën e tyre. Për këtë arsye, kemi krijuar politika specifike për të ofruar mbështetje dhe dhurata në këtë udhëtim të ri.",
    closing: "Me këto politika, ne synojmë të bëjmë këtë udhëtim të ri më të lehtë dhe të mbushur me pozitivitet për çdo vajzë që vendos të mbulohet për herë të parë. Hijab Throne është këtu për t'i mbështetur ato në çdo hap të rrugës së tyre.",
    sections: [
      {
        title: "1. Programi i Dhurimit të Shamive",
        text: "Çdo vajzë që mbulohet për herë të parë mund të aplikojë për të marrë një shami falas nga koleksioni ynë. Ne besojmë se çdo fillim duhet të jetë i veçantë, dhe kjo dhuratë është një mënyrë për të shprehur mbështetjen dhe inkurajimin tonë. Së bashku me shaminë, ne ofrojmë një udhëzues praktik që ndihmon vajzat të mësojnë mënyrat e ndryshme të mbajtjes së hijabit dhe si të kujdesen për të.",
      },
      {
        title: "2. Konsultime Personale",
        text: "Ne ofrojmë konsultime personale për vajzat dhe familjet e tyre për t'i ndihmuar të ndihen më të sigurta dhe të mbështetura.",
      },
      {
        title: "3. Politika e Zbritjeve për Fillestaret",
        text: "Përveç dhuratave, ne ofrojmë gjithashtu zbritje të veçanta për vajzat që janë në fillimet e udhëtimit të tyre me hijabin. Kjo u mundëson atyre të eksplorojnë më shumë stile dhe materiale, duke e bërë këtë përvojë të përballueshme dhe të këndshme.",
      },
      {
        title: "4. Mbështetje Emocionale",
        text: "Ne e kuptojmë se mbulimi për herë të parë mund të sjellë sfida emocionale dhe sociale. Për këtë arsye, ne ofrojmë mbështetje të vazhdueshme përmes platformës sonë online, ku vajzat mund të ndajnë përvojat e tyre dhe të marrin mbështetje nga një komunitet i ngrohtë dhe mirëpritës.",
      },
    ],
  },
  en: {
    title: "Support and Hijab Donation Policy for Girls Wearing the Hijab for the First Time",
    intro: "At Hijab Throne we are committed to supporting girls who decide to wear the hijab for the first time. We understand this is an important and special step in their lives, so we've created specific policies to offer support and gifts at the start of this new journey.",
    closing: "With these policies, we aim to make this new journey easier and full of positivity for every girl who decides to wear the hijab for the first time. Hijab Throne is here to support them every step of the way.",
    sections: [
      {
        title: "1. Hijab Donation Programme",
        text: "Every girl wearing the hijab for the first time can apply to receive a free hijab from our collection. We believe every beginning should feel special, and this gift is a way to express our support and encouragement. Alongside the hijab, we provide a practical guide that helps girls learn different ways to wear the hijab and how to care for it.",
      },
      {
        title: "2. Personal Consultations",
        text: "We offer personal consultations for girls and their families to help them feel more confident and supported.",
      },
      {
        title: "3. Beginner Discount Policy",
        text: "Alongside the gifts, we offer special discounts for girls at the start of their hijab journey. This lets them explore more styles and materials, making the experience affordable and enjoyable.",
      },
      {
        title: "4. Emotional Support",
        text: "We understand that wearing the hijab for the first time can bring emotional and social challenges. For this reason we offer ongoing support through our online platform, where girls can share their experiences and receive support from a warm, welcoming community.",
      },
    ],
  },
};

export default function PolitikatEDhurimit({ locale = "sq" }) {
  const t = CONTENT[locale] || CONTENT.sq;
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          {t.title}
        </h1>
        <p className="text-gray-600 text-center mb-8">{t.intro}</p>

        <div className="space-y-12 mt-8">
          {t.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-gray-50 p-2 md:p-6 rounded-xl shadow-sm"
            >
              <div className="md:w-1/2">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-2">{section.text}</p>
              </div>
              <div className="md:w-1/2">
                <OptimizedImage
                  src={photos[index].image}
                  alt={section.title}
                  className=" w-64 md:w-full h-64 md:h-72 rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-12 text-center">{t.closing}</p>
      </div>
    </div>
  );
}
