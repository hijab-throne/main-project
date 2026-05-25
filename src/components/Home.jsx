import FeaturedSection from "./shared/FeaturedSection.jsx";
import Carousel from "./shared/Carousel.jsx";
import NewsLetterSignup from "./shared/NewsLetterSignup.jsx";
import React, { useState, useEffect } from 'react';
import AlternatingFeaturesSection from "./shared/AlternatingFeaturesSection.jsx";
import CategoryGrid from "./shared/CategoryGrid.jsx";
import BackgroundImage from "./BackgroundImage.jsx";

const PodcastPopup = ({ locale = 'sq' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const title = locale === 'en'
    ? "Where do we start? — Conversations with people who inspire."
    : "Nga t'ia nisim? - Biseda me njerez qe frymezojne.";
  const body = locale === 'en'
    ? 'Follow us for more success stories, challenges and life lessons.'
    : 'Na ndiqni per me shume histori suksesi, sfida dhe mesime jete.';

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem('podcastPopupDismissed');
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('podcastPopupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
        {/* Close Button */}
        <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Embedded YouTube Channel Uploads Playlist */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UUFIBskomLqoBtpkuMtioC6w"
              title="Ngatianisim Podcast by Kiti Shaban"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96 rounded-lg"
            ></iframe>
          </div>
          <p className="text-gray-600 mt-4">{body}</p>
        </div>
      </div>
    </div>
  );
};


const HOME_T = {
  sq: {
    heroLine: 'Vishe me krenari',
    brandQuoteBold: 'Hijab Throne',
    brandQuoteRest: ' ka një kuptim simbolik që lidhet me fuqizimin dhe dinjitetin e grave që mbajnë hijab. Sipas përshkrimit të markës me të njëjtin emër, hijabi shihet si një "fron" që pasqyron forcën, respektin dhe individualitetin e grave. Ideja është që gratë të ndihen të fuqizuara dhe të sigura në stilin e tyre modest, duke e parë hijabin si një simbol të vlerave të tyre dhe të bukurisë së brendshme.',
    mobileHeroBody: 'Hijabi nuk është thjesht një veshje – është një zgjedhje, një identitet dhe një burim krenarie. Me koleksionet tona, ndihesh rehat, elegante dhe e vërtetë me veten. Vishe me krenari, çdo ditë.',
    qualityTitle: 'Cilësi e Përsosur',
    qualityBody: 'Hixhabet dhe aksesorët tanë janë të përzgjedhur me kujdes dhe krijuar për të qëndruar gjatë, duke përdorur materiale të cilësisë më të lartë. Secili produkt është i veçantë dhe nuk do t\'i gjeni askund tjetër.',
    missionTitle: 'E Bërë me një Mision',
    missionBody: 'Misioni ynë është të krijojmë një botë ku çdo grua ndjehet e rehatshme dhe e sigurt në vetvete, duke u ofruar hijabe dhe aksesorë që përmbushin nevojat e saj dhe pasqyrojnë besimin dhe stilin personal.',
    communityTitle: 'Komuniteti Është Prioritet',
    communityBody: 'Përmes një përzgjedhjeje të kujdesshme të shajesh, ne ofrojmë produkte që pasqyrojnë parimin islam të ihsaan – përpjekja për përsosmëri në çdo gjë që bëjmë.',
    bigTagline: 'Në Hijab Throne, ne sjellim hijabe dhe aksesorë që gjithmonë keni dëshiruar – ose ato që nuk e dinit se ishin të mundshme.',
    bigBody: 'Pavarësisht se nuk i prodhojmë vetë, ne ofrojmë hijabe dhe aksesorë të cilësisë më të lartë, që janë të dizajnuara për t\'u përshtatur me çdo stil dhe rast. Çdo produkt që ne ofrojmë është krijuar me përkushtim ndaj cilësisë, inovacionit dhe stilit, duke ofruar një përvojë unike që nuk do ta gjeni askund tjetër.',
    bestSellers: 'Best Sellers',
    podcastTitle: 'Nga t\'ia nisim? - Biseda me njerez qe frymezojne.',
    podcastBody: 'Na ndiqni per me shume histori suksesi, sfida dhe mesime jete.',
  },
  en: {
    heroLine: 'Wear it with pride',
    brandQuoteBold: 'Hijab Throne',
    brandQuoteRest: ' carries a symbolic meaning tied to the empowerment and dignity of women who wear hijab. The brand sees the hijab as a "throne" that reflects strength, respect and individuality. Our idea is for women to feel empowered and confident in their modest style — seeing the hijab as a symbol of their values and inner beauty.',
    mobileHeroBody: 'Hijab is more than a garment — it\'s a choice, an identity and a source of pride. With our collections you feel comfortable, elegant and true to yourself. Wear it with pride, every day.',
    qualityTitle: 'Premium Quality',
    qualityBody: 'Our hijabs and accessories are carefully curated and made to last, using only the highest-quality materials. Each product is unique and not found elsewhere.',
    missionTitle: 'Made With a Mission',
    missionBody: 'Our mission is to build a world where every woman feels comfortable and confident in herself, by offering hijabs and accessories that meet her needs and reflect her faith and personal style.',
    communityTitle: 'Community First',
    communityBody: 'Through careful fabric selection, we offer products that reflect the Islamic principle of ihsaan — striving for excellence in everything we do.',
    bigTagline: 'At Hijab Throne, we bring you hijabs and accessories you\'ve always wanted — or didn\'t know were possible.',
    bigBody: 'Although we don\'t manufacture them ourselves, we offer premium hijabs and accessories designed for every style and occasion. Every product is selected with care for quality, innovation and style — an experience you won\'t find anywhere else.',
    bestSellers: 'Best Sellers',
    podcastTitle: 'Nga t\'ia nisim? — Conversations with people who inspire.',
    podcastBody: 'Follow us for more success stories, challenges and life lessons.',
  },
};

export default function Home({ locale = 'sq' }) {
  const t = HOME_T[locale] || HOME_T.sq;

  return (
      <div
          className="flex flex-col w-[100vw] md:w-full items-center text-center">
                <PodcastPopup locale={locale} />
          <BackgroundImage
  desktopJpg="/assets/modal/landing_page/lulu/DSCF6700.jpg"
  mobileJpg="/assets/mobile/landing_page/lulu/DSCF6700.jpg"
  desktopWebp="/assets/modal/landing_page/lulu/DSCF6700.webp"
  mobileWebp="/assets/mobile/landing_page/lulu/DSCF6700.webp"
 className="flex bg-cover md:bg-right-top bg-center-top bg-no-repeat w-full h-auto aspect-[1.5] md:aspect-auto md:h-[46rem] flex-col md:flex-row items-center space-x-6">

              <div className="w-full flex justify-end relative">
                  <div className="md:w-1/2 md:py-0 py-6 w-full z-10">
                      <h2 className="hidden md:flex w-full justify-center md:text-4xl font-bold text-[#111827] mb-6">
                          {t.heroLine}
                      </h2>
                      <div className="hidden md:flex mb-4 text-[#111827] px-12">
                          <p>
                              <span className="font-bold">{t.brandQuoteBold}</span>{t.brandQuoteRest}
                          </p>
                      </div>
                  </div>
              </div>
          </BackgroundImage>
          <div className="w-full bg-white">
              <div className="text-3xl font-bold my-4 md:my-8 md:hidden">{t.heroLine}</div>
              <p className="md:hidden mb-4 mt-2 text-sm text-gray-600 px-4">
                  {t.mobileHeroBody}
              </p>
              <section className="max-w-6xl mx-auto px-6 md:py-16 text-center hidden md:flex">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 uppercase">{t.qualityTitle}</h3>
                          <p className="mt-2 text-sm text-gray-600">{t.qualityBody}</p>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 uppercase">{t.missionTitle}</h3>
                          <p className="mt-2 text-sm text-gray-600">{t.missionBody}</p>
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-gray-900 uppercase">{t.communityTitle}</h3>
                          <p className="mt-2 text-sm text-gray-600">{t.communityBody}</p>
                      </div>
                  </div>
              </section>
          </div>
          <FeaturedSection locale={locale} />
          <div className="w-full bg-white">
              <section className="max-w-5xl mx-auto px-6 py-4 md:py-16 text-center">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900">{t.bigTagline}</h2>
                  <p className="mt-6 text-gray-600 text-sm md:text-lg leading-relaxed">{t.bigBody}</p>
              </section>
          </div>
          <AlternatingFeaturesSection locale={locale} />
          <CategoryGrid locale={locale} />
          <div className="py-12 md:py-24 w-full overflow-hidden text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#222222]">{t.bestSellers}</h2>
              <Carousel/>
          </div>

          <div className="flex relative w-full">
          <NewsLetterSignup locale={locale} />

          </div>
      </div>
  );
}
