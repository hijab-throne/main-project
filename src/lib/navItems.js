import { T, withLocale, DEFAULT_LOCALE } from './i18n.js';

const NAV_LABELS_EN = {
  praktike: 'Practical',
  fustanNamazi: 'Prayer Dress',
  aksesor: 'Accessories',
  aktivitete: 'Activities',
};

// Build the nav array for a specific locale. Dropdown labels (product names)
// remain in their original form (they're brand/material names that don't translate).
export function getNavItems(locale = DEFAULT_LOCALE) {
  const wl = (path) => withLocale(path, locale);
  const labels = locale === 'en' ? NAV_LABELS_EN : null;
  const lbl = (sq, key) => (labels && labels[key]) || sq;

  return [
    { label: 'About Us', href: wl('/about-us'), isClickable: true },
    {
      label: 'Chiffon',
      href: wl('/chiffon'),
      isClickable: false,
      dropdown: [
        { label: 'Shall 180:70 cm', href: wl('/chiffon/shall-ch-180') },
        { label: 'Shami 150:150 cm', href: wl('/chiffon/shami-ch-150') },
        { label: 'Shall me gur 180:70 cm', href: wl('/chiffon/shall-ch-gur') },
      ],
    },
    {
      label: 'Jersey',
      href: wl('/jersey'),
      isClickable: false,
      dropdown: [
        { label: 'Shall 180:70 cm', href: wl('/jersey/shall-jr-180') },
        { label: 'Shami 200:100 cm', href: wl('/jersey/shami-jr-200') },
        { label: 'Shall me gur 180:70 cm', href: wl('/jersey/shall-jr-gur') },
        { label: 'Zhars me dredha', href: wl('/jersey/dredha') },
      ],
    },
    {
      label: 'Jazz',
      href: wl('/jazz'),
      isClickable: false,
      dropdown: [
        { label: 'Shall 200:70 cm', href: wl('/jazz/shall-jazz-200') },
        { label: 'Shall krep', href: wl('/jazz/shall-krep') },
      ],
    },
    { label: locale === 'en' ? 'Satin' : 'Saten', href: wl('/saten'), isClickable: true },
    {
      label: 'Underscarf',
      href: wl('/kapuc'),
      isClickable: false,
      dropdown: [
        { label: 'Kapuc tub', href: wl('/kapuc/tub') },
        { label: 'Kapuc me aspirim (klimatik)', href: wl('/kapuc/klimatik') },
        {
          label: 'Kapuc me silikon (kaymaz)',
          subdropdown: [
            { label: 'Kapuc me silikon 400', href: wl('/kapuc/silikon400') },
            { label: 'Kapuc me silikon 500', href: wl('/kapuc/silikon500') },
          ],
        },
        {
          label: 'Kapuc xhufke',
          subdropdown: [
            { label: 'Kapuc me pambuk lidhese xhufke', href: wl('/kapuc/pambuk') },
            { label: 'Kapuc elastik xhufke', href: wl('/kapuc/elastik') },
          ],
        },
        { label: 'Kapuc tyl', href: wl('/kapuc/tyl-i-lehte') },
        { label: 'Kapuc ceneli', href: wl('/kapuc/ceneli') },
        { label: 'Ninxha pambuk sedef', href: wl('/kapuc/sedef') },
        { label: 'Ninxha climatic ecardin', href: wl('/kapuc/aspirim') },
        { label: 'Ninxha classic ecardin', href: wl('/kapuc/classic') },
      ],
    },
    {
      label: lbl('Praktike', 'praktike'),
      href: wl('/praktike'),
      isClickable: false,
      dropdown: [
        { label: 'Pileli', href: wl('/praktike/pileli') },
        { label: locale === 'en' ? 'Sport Scarf' : 'Fular Sportiv duz', href: wl('/praktike/sportiv') },
        { label: 'Namaz Ortusu', href: wl('/praktike/ortusu') },
        { label: 'Hazir Turban', href: wl('/praktike/tese') },
        { label: 'Tesettur', href: wl('/praktike/viscon') },
        { label: locale === 'en' ? 'For Kids' : 'Per femije', href: wl('/praktike/femije') },
        { label: 'Penye Sal', href: wl('/praktike/penye') },
      ],
    },
    {
      label: lbl('Fustan Namazi', 'fustanNamazi'),
      href: wl('/fustan-namazi'),
      isClickable: false,
      dropdown: [
        { label: locale === 'en' ? 'For Adults' : 'Per te rritur', href: wl('/fustan-namazi/per-te-rritur') },
        { label: locale === 'en' ? 'For Kids' : 'Per femije', href: wl('/fustan-namazi/per-femije') },
      ],
    },
    { label: lbl('Aksesor', 'aksesor'), href: wl('/aksesor'), isClickable: true },
    {
      label: lbl('Aktivitetet', 'aktivitete'),
      href: wl('/aktivitete'),
      isClickable: false,
      dropdown: [
        { label: locale === 'en' ? 'Fashion Shows' : 'Sflitat', href: wl('/aktivitete/sfiltata') },
        { label: locale === 'en' ? 'Fairs' : 'Panairet', href: wl('/aktivitete/panaire') },
        { label: locale === 'en' ? 'Donation Policy' : 'Politikat e dhurimit', href: wl('/aktivitete/politikat-e-dhurimit') },
      ],
    },
  ];
}

// Keep the original export for backward compatibility (used by some legacy code).
export const navItems = getNavItems(DEFAULT_LOCALE);
