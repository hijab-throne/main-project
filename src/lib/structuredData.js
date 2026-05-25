import {
  SITE_URL,
  SITE_NAME,
  BRAND_PHONE,
  BRAND_INSTAGRAM,
  BRAND_NIPT,
} from './seo.js';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/main.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    sameAs: [BRAND_INSTAGRAM],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND_PHONE,
        contactType: 'customer service',
        areaServed: 'AL',
        availableLanguage: ['Albanian', 'sq'],
      },
    ],
    identifier: BRAND_NIPT,
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: BRAND_PHONE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AL',
      addressLocality: 'Tiranë',
    },
    sameAs: [BRAND_INSTAGRAM],
    identifier: BRAND_NIPT,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'sq-AL',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function breadcrumbsJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function productJsonLd({ name, description, image, sku, price, priceCurrency = 'ALL', url, availability = 'https://schema.org/InStock' }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : undefined,
    sku,
    brand: { '@type': 'Brand', name: SITE_NAME },
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
  };
  if (price) {
    data.offers = {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability,
      url: data.url,
      seller: { '@type': 'Organization', name: SITE_NAME },
    };
  }
  return data;
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}
