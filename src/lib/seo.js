export const SITE_URL = 'https://hijabthrone.al';
export const SITE_NAME = 'Hijab Throne';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const BRAND_PHONE = '+355682063377';
export const BRAND_INSTAGRAM = 'https://www.instagram.com/hijab.throne/';
export const BRAND_MAPS = 'https://maps.app.goo.gl/oT8K92TAVNBvxhTj8';
export const BRAND_NIPT = 'M61410050C';

export const DEFAULT_SEO = {
  title: 'Hijab Throne – Shalla, Shami & Aksesorë Hijabi në Shqipëri',
  description:
    'Bli online shalla hijabi chiffon, jersey, jazz, saten dhe aksesorë në Hijab Throne. Dorëzim në gjithë Shqipërinë. Vishe me krenari.',
  keywords:
    'hijab Shqipëri, shall hijabi, shami hijabi, dyqan hijab Tiranë, shall chiffon, shall jersey, kapuc hijabi, fustan namazi',
};

const product = (overrides) => ({
  type: 'product',
  brand: 'Hijab Throne',
  availability: 'https://schema.org/InStock',
  priceCurrency: 'ALL',
  ...overrides,
});

const category = (overrides) => ({ type: 'category', ...overrides });
const info = (overrides) => ({ type: 'info', ...overrides });

export const PAGE_SEO = {
  '/': {
    title: 'Hijab Throne – Shalla, Shami & Aksesorë Hijabi në Shqipëri',
    description:
      'Bli online shalla hijabi chiffon, jersey, jazz, saten dhe aksesorë në Hijab Throne. Dorëzim në gjithë Shqipërinë. Cilësi, stil dhe elegancë.',
    keywords:
      'hijab Shqipëri, shall hijabi online, shami hijabi, dyqan hijab Tiranë, hijab throne, shall chiffon, shall jersey',
    ...info({ ogType: 'website' }),
  },
  '/about-us': {
    title: 'Rreth Hijab Throne – Markë Hijabi Shqiptare',
    description:
      'Historia, misioni dhe vizioni i Hijab Throne – një markë shqiptare që sjell hijabe cilësore dhe elegante për gratë shqiptare.',
    keywords: 'rreth hijab throne, marke hijabi shqiptare, historia hijab throne',
    ...info(),
  },

  '/chiffon/shall-ch-180': product({
    title: 'Shall Chiffon 180×70 cm – Hijab Throne',
    description:
      'Shall chiffon i lehtë, ajror dhe elegant 180×70 cm nga Sedef. Çmimi 800L. Disponohet në shumë ngjyra. Bli online në Hijab Throne.',
    keywords: 'shall chiffon, shall hijabi chiffon, shall 180, shall chiffon Sedef, hijab chiffon Shqipëri',
    productName: 'Shall Chiffon 180×70 cm',
    image: '/shall_chiffon/main.png',
    price: '800',
    sku: 'HT-CHIFFON-SHALL-180',
  }),
  '/chiffon/shami-ch-150': product({
    title: 'Shami Chiffon 150×150 cm – Hijab Throne',
    description:
      'Shami chiffon katrore 150×150 cm, ideale për stile elegante dhe formale. Bli online në Hijab Throne.',
    keywords: 'shami chiffon, shami 150, shami katrore hijabi, hijab chiffon Shqipëri',
    productName: 'Shami Chiffon 150×150 cm',
    image: '/shall_chiffon/main.png',
    sku: 'HT-CHIFFON-SHAMI-150',
  }),
  '/chiffon/shall-ch-gur': product({
    title: 'Shall Chiffon me Gur 180×70 cm – Hijab Throne',
    description:
      'Shall chiffon me gurë dekorativë 180×70 cm. Stil elegant për raste të veçanta. Bli online në Hijab Throne.',
    keywords: 'shall chiffon me gur, shall hijabi me gure, shall elegant hijabi',
    productName: 'Shall Chiffon me Gur 180×70 cm',
    image: '/shall_chiffon/main.png',
    sku: 'HT-CHIFFON-SHALL-GUR',
  }),

  '/jersey/shall-jr-180': product({
    title: 'Shall Jersey 180×70 cm – Hijab Throne',
    description:
      'Shall jersey i butë dhe elastik 180×70 cm. Komod për veshje të përditshme. Bli online në Hijab Throne.',
    keywords: 'shall jersey, shall hijabi jersey, shall 180 jersey, hijab jersey Shqipëri',
    productName: 'Shall Jersey 180×70 cm',
    image: '/shall_jersey/main.png',
    sku: 'HT-JERSEY-SHALL-180',
  }),
  '/jersey/shami-jr-200': product({
    title: 'Shami Jersey 200×100 cm – Hijab Throne',
    description:
      'Shami jersey 200×100 cm, ideale për mbulim të plotë. Material i butë dhe elastik. Bli online në Hijab Throne.',
    keywords: 'shami jersey, shami 200, shami jersey 200x100, hijab jersey',
    productName: 'Shami Jersey 200×100 cm',
    image: '/shall_jersey/main.png',
    sku: 'HT-JERSEY-SHAMI-200',
  }),
  '/jersey/shall-jr-gur': product({
    title: 'Shall Jersey me Gur 180×70 cm – Hijab Throne',
    description:
      'Shall jersey me gurë dekorativë 180×70 cm. Stil i veçantë dhe elegant. Bli online në Hijab Throne.',
    keywords: 'shall jersey me gur, shall hijabi me gure, shall elegant jersey',
    productName: 'Shall Jersey me Gur 180×70 cm',
    image: '/shall_jersey/main.png',
    sku: 'HT-JERSEY-SHALL-GUR',
  }),
  '/jersey/dredha': product({
    title: 'Zhars me Dredha – Shall Hijabi me Pleqe – Hijab Throne',
    description:
      'Shall hijabi me dredha (pleqe) elegant dhe modern. Stil i veçantë për gratë moderne. Bli online në Hijab Throne.',
    keywords: 'zhars me dredha, shall me dredha hijabi, shall pleqe',
    productName: 'Zhars me Dredha',
    image: '/shall_jersey/main.png',
    sku: 'HT-JERSEY-DREDHA',
  }),

  '/jazz/shall-jazz-200': product({
    title: 'Shall Jazz 200×70 cm – Hijab Throne',
    description:
      'Shall jazz luksoz 200×70 cm. Material premium me rënie elegante. Bli online në Hijab Throne.',
    keywords: 'shall jazz, shall jazz 200, shall hijabi jazz, hijab jazz Shqipëri',
    productName: 'Shall Jazz 200×70 cm',
    image: '/shall_jazz/main.png',
    sku: 'HT-JAZZ-SHALL-200',
  }),
  '/jazz/shall-krep': product({
    title: 'Shall Krep – Shall Hijabi Krep – Hijab Throne',
    description:
      'Shall krep me strukturë të veçantë. Stil elegant për çdo rast. Bli online në Hijab Throne.',
    keywords: 'shall krep, shall hijabi krep, hijab krep',
    productName: 'Shall Krep',
    image: '/shall_jazz/main.png',
    sku: 'HT-JAZZ-SHALL-KREP',
  }),

  '/saten': product({
    title: 'Shall Saten Hijabi – Luksoz dhe Elegant – Hijab Throne',
    description:
      'Shall saten luksoz me sipërfaqe me shkëlqim. Ideal për raste të veçanta dhe ceremoni. Bli online në Hijab Throne.',
    keywords: 'shall saten, shall hijabi saten, hijab saten Shqipëri, shami saten',
    productName: 'Shall Saten',
    image: '/shall_saten/main.png',
    sku: 'HT-SATEN-SHALL',
  }),

  '/kapuc/tub': product({
    title: 'Kapuc Tub Hijabi – Hijab Throne',
    description:
      'Kapuc tub i thjeshtë dhe komod për të mbajtur flokët dhe shallin në vend. Bli online në Hijab Throne.',
    keywords: 'kapuc tub, kapuc hijabi, kapuc shall hijabi',
    productName: 'Kapuc Tub',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-TUB',
  }),
  '/kapuc/klimatik': product({
    title: 'Kapuc Klimatik me Aspirim Hijabi – Hijab Throne',
    description:
      'Kapuc klimatik me aspirim që mban flokët në vend dhe lë lëkurën të frymojë. Bli online në Hijab Throne.',
    keywords: 'kapuc klimatik, kapuc me aspirim, kapuc hijabi klimatik',
    productName: 'Kapuc Klimatik me Aspirim',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-KLIMATIK',
  }),
  '/kapuc/silikon400': product({
    title: 'Kapuc Kaymaz me Silikon 400 – Hijab Throne',
    description:
      'Kapuc kaymaz me brez silikoni 400 që mban shallin pa rrëshqitur. Bli online në Hijab Throne.',
    keywords: 'kapuc kaymaz, kapuc me silikon, kapuc silikon 400, kapuc hijabi kaymaz',
    productName: 'Kapuc Kaymaz Silikon 400',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-SILIKON-400',
  }),
  '/kapuc/silikon500': product({
    title: 'Kapuc Kaymaz me Silikon 500 – Hijab Throne',
    description:
      'Kapuc kaymaz me brez silikoni 500. Mbajtës profesional për shallin. Bli online në Hijab Throne.',
    keywords: 'kapuc kaymaz 500, kapuc silikon 500, kapuc hijabi profesional',
    productName: 'Kapuc Kaymaz Silikon 500',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-SILIKON-500',
  }),
  '/kapuc/pambuk': product({
    title: 'Kapuc me Pambuk Lidhëse Xhufkë – Hijab Throne',
    description:
      'Kapuc xhufkë me pambuk natyral dhe lidhëse të rregullueshme. Bli online në Hijab Throne.',
    keywords: 'kapuc xhufke, kapuc pambuk, kapuc hijabi pambuk',
    productName: 'Kapuc Pambuk Xhufkë',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-PAMBUK',
  }),
  '/kapuc/elastik': product({
    title: 'Kapuc Elastik Xhufkë – Hijab Throne',
    description:
      'Kapuc elastik me xhufkë për përshtatje të përsosur. Bli online në Hijab Throne.',
    keywords: 'kapuc elastik, kapuc xhufke elastik, kapuc hijabi elastik',
    productName: 'Kapuc Elastik Xhufkë',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-ELASTIK',
  }),
  '/kapuc/tyl-i-lehte': product({
    title: 'Kapuc Tyl i Lehtë – Hijab Throne',
    description:
      'Kapuc tyl i lehtë dhe ajror. Ideal për mot të ngrohtë. Bli online në Hijab Throne.',
    keywords: 'kapuc tyl, kapuc tyl i lehte, kapuc hijabi tyl',
    productName: 'Kapuc Tyl i Lehtë',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-TYL-LEHTE',
  }),
  '/kapuc/ceneli': product({
    title: 'Kapuc Ceneli – Hijab Throne',
    description:
      'Kapuc ceneli me përfundime të hijshme dhe komod. Bli online në Hijab Throne.',
    keywords: 'kapuc ceneli, kapuc hijabi ceneli',
    productName: 'Kapuc Ceneli',
    image: '/kapuc/main.png',
    sku: 'HT-KAPUC-CENELI',
  }),
  '/kapuc/sedef': product({
    title: 'Ninxha Pambuk Sedef – Hijab Throne',
    description:
      'Ninxha pambuk Sedef me cilësi premium. Bli online në Hijab Throne.',
    keywords: 'ninxha sedef, ninxha pambuk, ninxha hijabi',
    productName: 'Ninxha Pambuk Sedef',
    image: '/kapuc/main.png',
    sku: 'HT-NINXHA-SEDEF',
  }),
  '/kapuc/aspirim': product({
    title: 'Ninxha Climatic Ecardin – Hijab Throne',
    description:
      'Ninxha climatic ecardin me aspirim premium. Bli online në Hijab Throne.',
    keywords: 'ninxha climatic, ninxha ecardin, ninxha aspirim',
    productName: 'Ninxha Climatic Ecardin',
    image: '/kapuc/main.png',
    sku: 'HT-NINXHA-CLIMATIC',
  }),
  '/kapuc/classic': product({
    title: 'Ninxha Classic Ecardin – Hijab Throne',
    description:
      'Ninxha classic ecardin me dizajn klasik dhe cilësi premium. Bli online në Hijab Throne.',
    keywords: 'ninxha classic, ninxha ecardin classic, ninxha hijabi',
    productName: 'Ninxha Classic Ecardin',
    image: '/kapuc/main.png',
    sku: 'HT-NINXHA-CLASSIC',
  }),

  '/praktike/pileli': product({
    title: 'Praktik Pileli – Hijab i Gatshëm – Hijab Throne',
    description:
      'Hijab praktik pileli, i gatshëm për veshje të shpejtë. Bli online në Hijab Throne.',
    keywords: 'praktik pileli, hijab praktik, hijab i gatshem',
    productName: 'Praktik Pileli',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-PILELI',
  }),
  '/praktike/sportiv': product({
    title: 'Fular Sportiv Duz – Hijab Throne',
    description:
      'Fular sportiv duz, ideal për aktivitete fizike dhe sport. Bli online në Hijab Throne.',
    keywords: 'fular sportiv, hijab sportiv, fular hijabi sport',
    productName: 'Fular Sportiv Duz',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-SPORTIV',
  }),
  '/praktike/ortusu': product({
    title: 'Namaz Örtüsü – Mbulim për Namaz – Hijab Throne',
    description:
      'Namaz örtüsü praktik dhe komod për kohën e namazit. Bli online në Hijab Throne.',
    keywords: 'namaz ortusu, mbulim namazi, fustan namazi praktik',
    productName: 'Namaz Örtüsü',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-ORTUSU',
  }),
  '/praktike/tese': product({
    title: 'Hazir Turban – Turban i Gatshëm – Hijab Throne',
    description:
      'Hazir turban i gatshëm për veshje të shpejtë dhe elegante. Bli online në Hijab Throne.',
    keywords: 'hazir turban, turban i gatshem, hijab turban',
    productName: 'Hazir Turban',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-TESE',
  }),
  '/praktike/viscon': product({
    title: 'Tesettür Praktik – Hijab Throne',
    description:
      'Tesettür praktik me fermuar, lehtë i veshshëm dhe elegant. Bli online në Hijab Throne.',
    keywords: 'tesettur praktik, hijab tesettur, fermuar viscon hijab',
    productName: 'Tesettür Praktik',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-VISCON',
  }),
  '/praktike/femije': product({
    title: 'Hijab Praktik për Fëmijë – Hijab Throne',
    description:
      'Hijab praktik për fëmijë, i butë dhe komod. Bli online në Hijab Throne.',
    keywords: 'hijab femije, hijab praktik femije, shami femije',
    productName: 'Hijab Praktik për Fëmijë',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-FEMIJE',
  }),
  '/praktike/penye': product({
    title: 'Praktik Penye Sal – Hijab Throne',
    description:
      'Praktik penye sal, kombinim i shallit dhe kapuc-it i gatshëm. Bli online në Hijab Throne.',
    keywords: 'praktik penye, penye sal, hijab penye',
    productName: 'Praktik Penye Sal',
    image: '/praktike/main.png',
    sku: 'HT-PRAKTIKE-PENYE',
  }),

  '/fustan-namazi/per-te-rritur': product({
    title: 'Fustan Namazi për të Rritur – Hijab Throne',
    description:
      'Fustan namazi për të rritur me cilësi premium. Komod dhe i përshtatshëm për lutje. Bli online në Hijab Throne.',
    keywords: 'fustan namazi, fustan namazi per te rritur, namaz dress, mbulim namazi',
    productName: 'Fustan Namazi për të Rritur',
    image: '/fustan_namazi/main.png',
    sku: 'HT-NAMAZ-ADULTS',
  }),
  '/fustan-namazi/per-femije': product({
    title: 'Fustan Namazi për Fëmijë – Hijab Throne',
    description:
      'Fustan namazi për fëmijë, dizajne të veçanta dhe komode për të vegjlit. Bli online në Hijab Throne.',
    keywords: 'fustan namazi femije, namaz dress kids, fustan namazi per femije',
    productName: 'Fustan Namazi për Fëmijë',
    image: '/fustan_namazi/main.png',
    sku: 'HT-NAMAZ-KIDS',
  }),

  '/aksesor': category({
    title: 'Aksesorë Hijabi – Kapëse, Gjilpëra & më shumë – Hijab Throne',
    description:
      'Aksesorë hijabi: kapëse, gjilpëra dekorative, mbajtëse dhe shumë më tepër. Bli online në Hijab Throne.',
    keywords: 'aksesor hijabi, kapese hijabi, gjilpera hijabi, aksesore shall',
  }),

  '/aktivitete/sfiltata': info({
    title: 'Sfilatat – Aktivitetet e Hijab Throne',
    description:
      'Sfilatat dhe ngjarjet e organizuara nga Hijab Throne për të promovuar modën modeste.',
    keywords: 'sfilata hijab, evente hijab throne, moda modeste Shqipëri',
  }),
  '/aktivitete/panaire': info({
    title: 'Panairet – Aktivitetet e Hijab Throne',
    description:
      'Panairet dhe ekspozitat ku Hijab Throne ka marrë pjesë. Lexo më shumë rreth aktiviteteve tona.',
    keywords: 'panair hijab, evente hijab throne, panair modeste',
  }),
  '/aktivitete/politikat-e-dhurimit': info({
    title: 'Politikat e Dhurimit – Hijab Throne',
    description:
      'Politikat tona të dhurimit dhe inisiativat bamirëse. Mëso si kontribuon Hijab Throne.',
    keywords: 'politika dhurimi hijab throne, bamiresia hijab throne',
  }),
  '/aktivitete/bamiresi': info({
    title: 'Bamirësitë – Hijab Throne',
    description:
      'Aktivitetet bamirëse dhe iniciativat sociale të Hijab Throne.',
    keywords: 'bamiresi hijab throne, aktivitete bamirese',
  }),

  '/shkelqim': product({
    title: 'Shami me Shkëlqim – Hijab Throne',
    description: 'Shami hijabi me shkëlqim, ideale për raste të veçanta.',
    keywords: 'shami shkelqim, shami hijabi shkelqim',
    productName: 'Shami me Shkëlqim',
    image: '/shall_chiffon/main.png',
    sku: 'HT-SHAMI-SHKELQIM',
  }),
};

import { stripLocale, getLocale, withLocale, DEFAULT_LOCALE } from './i18n.js';
import { PAGE_SEO_EN } from './seoTranslations.js';

const DEFAULT_SEO_EN = {
  title: 'Hijab Throne – Hijab Scarves & Accessories in Albania',
  description:
    'Shop chiffon, jersey, jazz and satin hijab scarves and accessories at Hijab Throne. Delivery across Albania. Wear it with pride.',
  keywords:
    'hijab Albania, hijab scarf, modest fashion albania, chiffon hijab, jersey hijab, hijab throne',
};

export function getSeo(pathname) {
  const locale = getLocale(pathname);
  const sqPath = stripLocale(pathname);
  const baseSq = PAGE_SEO[sqPath] || {};
  const baseEn = PAGE_SEO_EN[sqPath] || {};

  const localized = locale === 'en'
    ? { ...DEFAULT_SEO_EN, ...baseSq, ...baseEn }
    : { ...DEFAULT_SEO, ...baseSq };

  const canonicalPath = withLocale(sqPath, locale);
  return {
    ...localized,
    locale,
    sqPath,
    canonical: `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`,
    alternates: {
      sq: `${SITE_URL}${sqPath === '/' ? '' : sqPath}`,
      en: `${SITE_URL}${withLocale(sqPath, 'en')}`,
      'x-default': `${SITE_URL}${sqPath === '/' ? '' : sqPath}`,
    },
  };
}
