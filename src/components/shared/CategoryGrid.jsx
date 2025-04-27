import { Link } from 'wouter'

const categories = [
  {
    title: 'Chiffon',
    image: '../assets/landing_page/lulu/DSCF6803.jpg',
    link: '/chiffon/shall-ch-gur',
  },
  {
    title: 'Jersey',
    image: '../assets/landing_page/image00048.jpeg',
    link: '/jersey/shall-jr-180',
  },
  {
    title: 'Jazz',
    image: '../assets/landing_page/image00054.jpeg',
    link: '/jazz/shall-jazz-200',
  },
  {
    title: 'Saten',
    image: '../assets/landing_page/lulu/DSCF6812.jpg',
    link: '/saten',
  },
  {
    title: 'Fustan Namazi',
    image: '../assets/fustane-namazi/femije/2.jpg',
    link: '/fustan-namazi/per-femije',
  },
  {
    title: 'Sfilatat',
    image: '../assets/aktivitetet/sfilatat/2022/image00007.jpeg',
    link: '/aktivitete/sfiltata',
  },
  {
    title: 'Panairet',
    image: '../assets/aktivitetet/panairet/2025/panair1.jpg',
    link: '/aktivitete/panaire',
  },
  {
    title: 'Politikat e dhurimit',
    image: '../assets/aktivitetet/politikat/img5.jpeg',
    link: '/aktivitete/politikat-e-dhurimit',
  }, {
    title: 'Aksesor',
    image: '../assets/aksesor/1.jpeg',
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
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-300"
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
