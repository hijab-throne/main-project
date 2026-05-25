import OptimizedImage from "../components/ImageOptimized.jsx";

const ABOUT_T = {
  sq: {
    h1: 'Rreth Hijab Throne – Markë Hijabi Shqiptare',
    lead:
      'Hijab Throne u krijua për të ofruar hijabe cilësore dhe elegante, të dizajnuara për çdo stil dhe rast. Ne ofrojmë një koleksion të gjerë shajesh, të cilat pasqyrojnë përkushtimin tonë ndaj cilësisë dhe shijes, duke plotësuar nevojat e grave shqiptare për veshje që reflektojnë besimin dhe personalitetin e tyre unik.',
    sections: [
      {
        title: 'Si Lindi Hijab Throne?',
        content:
          "Historia e Hijab Throne nisi nga dëshira për të sjellë një koleksion hijabesh të bukura dhe cilësore për gratë shqiptare. Pasi identifikuam një mungesë mundësish në treg, vendosëm të ofrojmë një platformë ku gratë mund të gjenin shaje të stilizuara, të dizajnuara me kujdes dhe që reflektonin stilin e jetesës dhe besimin e tyre. Edhe pse ne nuk i prodhojmë vetë, ne punojmë me markat më të besueshme për t'ju ofruar produkte të cilësisë së lartë.",
      },
      {
        title: 'Inspirimi',
        content:
          'Frymëzimi ynë vjen nga dëshira e grave shqiptare për të gjetur hijabe që respektojnë traditën, por gjithashtu ofrojnë mundësi për shprehje personale dhe stil të modernizuar.',
      },
      {
        title: 'Fillimet',
        content:
          'Pasi filluam të eksperimentojmë me materiale cilësore dhe dizajne të ndryshme, Hijab Throne u themelua me qëllimin për të ofruar diçka të veçantë për tregun shqiptar.',
      },
      {
        title: 'Rritja',
        content:
          'Gjatë periudhës së shkurtër që prej hapjes, Hijab Throne ka njohur një rritje të qëndrueshme falë mbështetjes dhe besnikërisë së klientëve tanë.',
      },
      {
        title: 'E Ardhmja',
        content:
          'Ne jemi të përkushtuar për të vazhduar inovimin dhe për të sjellë hijabet më të bukura dhe funksionale për gratë në Shqipëri dhe më gjerë.',
      },
      {
        title: 'Vizioni Ynë',
        content:
          'Vizioni ynë është të bëhemi lider në tregun e modës modeste në Shqipëri, duke ofruar hijabe që kombinojnë traditën me stilin modern.',
      },
    ],
  },
  en: {
    h1: 'About Hijab Throne – Albanian Hijab Brand',
    lead:
      'Hijab Throne was created to offer quality, elegant hijabs designed for every style and occasion. Our wide collection reflects our dedication to quality and taste, meeting the needs of Albanian women for clothing that reflects their faith and unique personality.',
    sections: [
      {
        title: 'How Hijab Throne Was Born',
        content:
          'The story of Hijab Throne began with a desire to bring beautiful, high-quality hijabs to Albanian women. After identifying a gap in the market, we decided to offer a platform where women could find stylish scarves, carefully designed to reflect their lifestyle and faith. Although we don\'t manufacture them ourselves, we work with the most trusted brands to bring you premium products.',
      },
      {
        title: 'Inspiration',
        content:
          'Our inspiration comes from the desire of Albanian women to find hijabs that respect tradition while also offering opportunities for personal expression and a modern style.',
      },
      {
        title: 'The Beginning',
        content:
          'After experimenting with quality materials and various designs, Hijab Throne was founded with the goal of offering something special to the Albanian market.',
      },
      {
        title: 'Growth',
        content:
          'In the short time since opening, Hijab Throne has enjoyed steady growth thanks to the support and loyalty of our customers.',
      },
      {
        title: 'The Future',
        content:
          'We are committed to continuing to innovate and bringing the most beautiful and functional hijabs to women in Albania and beyond.',
      },
      {
        title: 'Our Vision',
        content:
          'Our vision is to become the leading modest fashion brand in Albania, offering hijabs that combine tradition with modern style.',
      },
    ],
  },
};

const AboutUs = ({ locale = 'sq' }) => {
  const t = ABOUT_T[locale] || ABOUT_T.sq;
  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl md:text-4xl font-extrabold text-gray-800">{t.h1}</h1>
        <p className="mt-4 text-lg text-gray-600">{t.lead}</p>
      </div>

      <div className="w-full flex justify-center">
        <OptimizedImage
          src="/landing_page/image00057.jpeg"
          alt="About us"
          width={1644}
          height={1184}
          imageClassName='object-cover object-top md:object-center'
          className="max-h-[400px] max-w-full md:max-w-[800px] rounded-lg mt-4"
        />
      </div>

      <div className="mt-12 space-y-12 max-w-5xl mx-auto">
        {t.sections.map((section, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            <p className="mt-2 text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
