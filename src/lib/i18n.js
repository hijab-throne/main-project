export const LOCALES = ['sq', 'en'];
export const DEFAULT_LOCALE = 'sq';

// Detect locale from a pathname like /en/foo or /about-us
export function getLocale(pathname) {
  if (!pathname) return DEFAULT_LOCALE;
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  return LOCALES.includes(seg) ? seg : DEFAULT_LOCALE;
}

// Strip locale prefix from a pathname to get the canonical (sq) path
export function stripLocale(pathname) {
  const clean = pathname.replace(/\.html$/, '').replace(/\/index$/, '');
  const seg = clean.replace(/^\/+/, '').split('/')[0];
  if (LOCALES.includes(seg) && seg !== DEFAULT_LOCALE) {
    return '/' + clean.replace(/^\/+/, '').split('/').slice(1).join('/');
  }
  return clean === '' ? '/' : clean;
}

// Add a locale prefix to a sq-canonical path
export function withLocale(path, locale) {
  if (locale === DEFAULT_LOCALE) return path === '' ? '/' : path;
  if (path === '/' || path === '') return `/${locale}`;
  return `/${locale}${path.startsWith('/') ? path : '/' + path}`;
}

export const T = {
  sq: {
    htmlLang: 'sq',
    ogLocale: 'sq_AL',
    nav: {
      aboutUs: 'About Us',
      chiffon: 'Chiffon',
      jersey: 'Jersey',
      jazz: 'Jazz',
      saten: 'Saten',
      underscarf: 'Underscarf',
      praktike: 'Praktike',
      fustanNamazi: 'Fustan Namazi',
      aksesor: 'Aksesor',
      aktivitete: 'Aktivitetet',
    },
    common: {
      tualtAll: 'Të gjitha',
      products: 'produkte',
      product: 'produkt',
      buyOnWhatsApp: 'Bli në WhatsApp',
      characteristics: 'Karakteristikat',
      langLabel: 'Gjuha',
      openMenu: 'Hap menunë',
      closeMenu: 'Mbyll menunë',
      backHome: 'Kthehu në faqen kryesore',
    },
    home: {
      heroLine: 'Vishe me krenari',
      heroBody:
        'Hijabi nuk është thjesht një veshje – është një zgjedhje, një identitet dhe një burim krenarie. Me koleksionet tona, ndihesh rehat, elegante dhe e vërtetë me veten. Vishe me krenari, çdo ditë.',
      brandQuote:
        'Hijab Throne ka një kuptim simbolik që lidhet me fuqizimin dhe dinjitetin e grave që mbajnë hijab. Sipas përshkrimit të markës me të njëjtin emër, hijabi shihet si një "fron" që pasqyron forcën, respektin dhe individualitetin e grave.',
      blockQualityTitle: 'Cilësi e Përsosur',
      blockQualityBody:
        'Hixhabet dhe aksesorët tanë janë të përzgjedhur me kujdes dhe krijuar për të qëndruar gjatë, duke përdorur materiale të cilësisë më të lartë.',
      blockMissionTitle: 'E Bërë me një Mision',
      blockMissionBody:
        'Misioni ynë është të krijojmë një botë ku çdo grua ndjehet e rehatshme dhe e sigurt në vetvete.',
      blockCommunityTitle: 'Komuniteti Është Prioritet',
      blockCommunityBody:
        'Përmes një përzgjedhjeje të kujdesshme të shajesh, ne ofrojmë produkte që pasqyrojnë parimin islam të ihsaan.',
      bigTagline:
        'Në Hijab Throne, ne sjellim hijabe dhe aksesorë që gjithmonë keni dëshiruar – ose ato që nuk e dinit se ishin të mundshme.',
      bigBody:
        'Pavarësisht se nuk i prodhojmë vetë, ne ofrojmë hijabe dhe aksesorë të cilësisë më të lartë, që janë të dizajnuara për t\'u përshtatur me çdo stil dhe rast.',
      bestSellers: 'Best Sellers',
      discoverCollections: 'Zbulo koleksionet tona',
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: {
      aboutUs: 'About Us',
      chiffon: 'Chiffon',
      jersey: 'Jersey',
      jazz: 'Jazz',
      saten: 'Satin',
      underscarf: 'Underscarf',
      praktike: 'Practical',
      fustanNamazi: 'Prayer Dress',
      aksesor: 'Accessories',
      aktivitete: 'Activities',
    },
    common: {
      tualtAll: 'All',
      products: 'products',
      product: 'product',
      buyOnWhatsApp: 'Buy on WhatsApp',
      characteristics: 'Features',
      langLabel: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      backHome: 'Back to homepage',
    },
    home: {
      heroLine: 'Wear it with pride',
      heroBody:
        'Hijab is more than a garment — it\'s a choice, an identity and a source of pride. With our collections you feel comfortable, elegant and true to yourself. Wear it with pride, every day.',
      brandQuote:
        'Hijab Throne carries a symbolic meaning tied to the empowerment and dignity of women who wear hijab. The brand sees the hijab as a "throne" reflecting strength, respect and individuality.',
      blockQualityTitle: 'Premium Quality',
      blockQualityBody:
        'Our hijabs and accessories are carefully curated and made to last, using only the highest quality materials.',
      blockMissionTitle: 'Made With a Mission',
      blockMissionBody:
        'Our mission is to build a world where every woman feels comfortable and confident in herself.',
      blockCommunityTitle: 'Community First',
      blockCommunityBody:
        'Through careful selection of fabrics, we offer products that reflect the Islamic principle of ihsaan — striving for excellence in everything we do.',
      bigTagline:
        'At Hijab Throne, we bring you hijabs and accessories you\'ve always wanted — or didn\'t know were possible.',
      bigBody:
        'Although we don\'t manufacture them ourselves, we offer premium hijabs and accessories designed for every style and occasion.',
      bestSellers: 'Best Sellers',
      discoverCollections: 'Discover our collections',
    },
  },
};

export function t(locale, key) {
  const parts = key.split('.');
  let cur = T[locale] || T[DEFAULT_LOCALE];
  for (const p of parts) {
    if (cur == null) return key;
    cur = cur[p];
  }
  return cur ?? key;
}
