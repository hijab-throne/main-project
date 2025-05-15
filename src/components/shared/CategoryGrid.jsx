import { Link } from 'wouter'
import OptimizedImage from "../ImageOptimized.jsx";

const categories = [
  {
    title: 'Chiffon',
    image: '/landing_page/lulu/DSCF6803.jpg',
    link: '/chiffon/shall-ch-180',
  },
  {
    title: 'Jersey',
    image: '/landing_page/image00048.jpeg',
    link: '/jersey/shall-jr-180',
  },
  {
    title: 'Jazz',
    image: '/landing_page/image00054.jpeg',
    link: '/jazz/shall-jazz-200',
  },
  {
    title: 'Saten',
    image: '/landing_page/lulu/DSCF6812.jpg',
    link: '/saten',
  },
  {
    title: 'Fustan Namazi',
    image: '/fustane-namazi/femije/2.jpg',
    link: '/fustan-namazi/per-femije',
  },
  {
    title: 'Sfilatat',
    image: '/aktivitetet/sfilatat/2022/image00007.jpeg',
    link: '/aktivitete/sfiltata',
  },
  {
    title: 'Panairet',
    image: '/aktivitetet/panairet/2025/panair1.jpg',
    link: '/aktivitete/panaire',
  },
  {
    title: 'Politikat e dhurimit',
    image: '/aktivitetet/politikat/img5.jpeg',
    link: '/aktivitete/politikat-e-dhurimit',
  }, {
    title: 'Aksesor',
    image: '/aksesor/1.jpeg',
    link: '/aksesor',
  },
]

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-4 md:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        Zbulo koleksionet tona
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link
            href={cat.link}
            key={index}
            className="group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-md">
              <OptimizedImage
                src={cat.image}
                alt={cat.title}
                imageClassName='object-top object-cover'
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center text-sm font-semibold text-gray-900 mt-2">
              {cat.title} <span aria-hidden>→</span>
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
