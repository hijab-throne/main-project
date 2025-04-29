import OptimizedImage from "../ImageOptimized.jsx";

export default function AlternatingFeaturesSection() {
  const features = [
    {
      image: '/personalizime/buqeta.jpeg',
      title: 'Buqetë me Hijabe, Dhuratë Plot Stil',
      description: (
        <>
         Më në fund, një ide unike dhe elegante: hijabet e mbështjella në formën e një buqete me lule! Kombinimi perfekt i finesës, funksionalitetit dhe kreativitetit — një dhuratë e veçantë për një mikeshë të dashur, për nënën, ose thjesht për veten tënde.
        </>
      ),
      button: 'Buqeta',
      reverse: false,
    },
    {
      image: '/personalizime/shami.jpg',
      title: 'Hijabe të Personalizuara',
      description: (
        <>
          Hijabet tona të personalizuara janë të dizajnuara me emrin tuaj të qëndisur në arabisht ose ndonjë shkrim që ju preferoni. Një kombinim i përkujdesjes personale dhe stilit modest që e bën çdo veshje unike dhe të paharrueshme.
        </>
      ),
      button: 'Personalizime',
      reverse: true,
    },
  ]

  return (
    <section className="px-6 py-4 md:py-16 max-w-7xl mx-auto space-y-4 md:space-y-20">
      {features.map(({ image, title, description, button, reverse }, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${
            reverse ? 'md:flex-row-reverse' : ''
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <OptimizedImage
              src={image}
              alt={title}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">{description}</p>
            {/*<button className=" bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">*/}
            {/*  {button}*/}
            {/*</button>*/}
          </div>
        </div>
      ))}
    </section>
  )
}
