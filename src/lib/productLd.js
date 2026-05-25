import { productJsonLd, breadcrumbsJsonLd } from './structuredData.js';
import { getSeo, SITE_URL } from './seo.js';

export function buildProductPageJsonLd(pathname, breadcrumbItems) {
  const seo = getSeo(pathname);
  const out = [];
  if (seo.type === 'product') {
    out.push(productJsonLd({
      name: seo.productName,
      description: seo.description,
      image: seo.image,
      sku: seo.sku,
      price: seo.price,
      priceCurrency: seo.priceCurrency || 'ALL',
      url: pathname,
      availability: seo.availability || 'https://schema.org/InStock',
    }));
  }
  if (breadcrumbItems?.length) {
    out.push(breadcrumbsJsonLd(breadcrumbItems));
  }
  return out;
}
