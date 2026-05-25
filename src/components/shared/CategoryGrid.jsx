import OptimizedImage from "../ImageOptimized.jsx";

const CATEGORIES = {
  sq: [
    { title: 'Chiffon', image: '/landing_page/lulu/DSCF6803.jpg', link: '/chiffon/shall-ch-180' },
    { title: 'Jersey', image: '/landing_page/image00048.jpeg', link: '/jersey/shall-jr-180' },
    { title: 'Jazz', image: '/landing_page/image00054.jpeg', link: '/jazz/shall-jazz-200' },
    { title: 'Saten', image: '/landing_page/lulu/DSCF6812.jpg', link: '/saten' },
    { title: 'Fustan Namazi', image: '/fustane-namazi/femije/2.jpg', link: '/fustan-namazi/per-femije' },
    { title: 'Sfilatat', image: '/aktivitetet/sfilatat/2022/image00007.jpeg', link: '/aktivitete/sfiltata' },
    { title: 'Panairet', image: '/aktivitetet/panairet/2025/panair1.jpg', link: '/aktivitete/panaire' },
    { title: 'Politikat e dhurimit', image: '/aktivitetet/politikat/img5.jpeg', link: '/aktivitete/politikat-e-dhurimit' },
    { title: 'Aksesor', image: '/aksesor/1.jpeg', link: '/aksesor' },
  ],
  en: [
    { title: 'Chiffon', image: '/landing_page/lulu/DSCF6803.jpg', link: '/en/chiffon/shall-ch-180' },
    { title: 'Jersey', image: '/landing_page/image00048.jpeg', link: '/en/jersey/shall-jr-180' },
    { title: 'Jazz', image: '/landing_page/image00054.jpeg', link: '/en/jazz/shall-jazz-200' },
    { title: 'Satin', image: '/landing_page/lulu/DSCF6812.jpg', link: '/en/saten' },
    { title: 'Prayer Dress', image: '/fustane-namazi/femije/2.jpg', link: '/en/fustan-namazi/per-femije' },
    { title: 'Fashion Shows', image: '/aktivitetet/sfilatat/2022/image00007.jpeg', link: '/en/aktivitete/sfiltata' },
    { title: 'Fairs', image: '/aktivitetet/panairet/2025/panair1.jpg', link: '/en/aktivitete/panaire' },
    { title: 'Donation Policy', image: '/aktivitetet/politikat/img5.jpeg', link: '/en/aktivitete/politikat-e-dhurimit' },
    { title: 'Accessories', image: '/aksesor/1.jpeg', link: '/en/aksesor' },
  ],
};

export default function CategoryGrid({ locale = 'sq' }) {
  const categories = CATEGORIES[locale] || CATEGORIES.sq;
  const heading = locale === 'en' ? 'Discover our collections' : 'Zbulo koleksionet tona';
  return (
    <section className="max-w-7xl mx-auto px-6 py-4 md:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        {heading}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <a
            href={cat.link}
            key={index}
            className="group cursor-pointer block"
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <OptimizedImage
                src={cat.image}
                alt={`${cat.title} – Hijab Throne`}
                imageClassName='object-top object-cover'
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center text-sm font-semibold text-gray-900 mt-2">
              {cat.title} <span aria-hidden>→</span>
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
