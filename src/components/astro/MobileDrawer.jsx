import { useEffect, useState } from 'react';

// Inline SVGs (avoids shipping lucide-react chunk on every page)
const MenuIcon = (props) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function MobileDrawer({ navItems, pathname, locale = 'sq', openLabel = 'Open menu', closeLabel = 'Close menu' }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href));

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <>
      <button
        className="md:hidden text-sm text-[#6F678E]"
        onClick={() => setIsOpen(true)}
        aria-label={openLabel}
      >
        <MenuIcon />
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden z-50 overflow-y-auto`}
      >
        <button
          className="fixed top-4 right-4 text-sm text-[#6F678E] z-[60] bg-white p-1 rounded-full shadow-sm"
          onClick={() => setIsOpen(false)}
          aria-label={closeLabel}
        >
          <XIcon />
        </button>

        <div className="pt-6 p-6 pb-104">
          <nav className="flex mr-8 flex-col space-y-4 uppercase text-[#222222]" aria-label={locale === 'en' ? 'Mobile navigation' : 'Navigimi mobil'}>
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`block font-bold text-sm ${item.isClickable ? '' : 'pointer-events-none'} ${
                    isActive(item.href) ? 'bg-[#4D4870] text-white p-2 rounded' : 'text-[#6F678E] hover:text-[#8F89A9]'
                  } transition-all`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>

                {item.dropdown && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((d) => (
                      <div key={d.label}>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="block text-sm font-medium text-[#6F678E] hover:bg-[#8F89A9] hover:text-white px-3 py-1 rounded transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            {d.label}
                          </a>
                        ) : (
                          <div className="block text-sm font-medium text-[#6F678E] px-3 py-1">{d.label}</div>
                        )}
                        {d.subdropdown && (
                          <div className="pl-4 mb-3 flex flex-col gap-0.5">
                            {d.subdropdown.map((s) => (
                              <a
                                key={s.href}
                                href={s.href}
                                className="block text-xs font-light text-[#6F678E] hover:bg-[#8F89A9] hover:text-white px-3 py-1 rounded transition-all"
                                onClick={() => setIsOpen(false)}
                              >
                                {s.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
