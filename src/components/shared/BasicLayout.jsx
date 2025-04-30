import { useEffect, useState } from "react";
import main from "../../../public/assets/desktop/icons/main-logo.svg";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import OptimizedImage from "../ImageOptimized.jsx";

export default function BasicLayout({ navItems, children }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [location] = useLocation();
  const isActive = (href) => location?.includes(href)
const isMobile = window.innerWidth < 768
    const activeBorderClass = `${isMobile ? 'bg-[#8F89A9] text-[#ffffff] p-2' : 'border-[#8F89A9] text-[#8F89A9]'}`
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isDrawerOpen]);

  return (
    <div className="h-full flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full flex justify-between items-center px-4 py-3 bg-[#F3F1FA]">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center cursor-pointer">
          <img className="w-auto h-8" alt="logo" src={main} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 lg:space-x-4 uppercase text-[#222222] relative">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className="inline-block relative py-1"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {item.isClickable ? (
                <a href={item.href}>
                  <span
                    className={`lg:text-sm text-xs font-bold font-sans whitespace-nowrap border-b-2 transition-all duration-300 ${
                      isActive(item.href)
                        ? activeBorderClass
                        : "text-[#6F678E] border-transparent hover:text-[#8F89A9] hover:border-[#8F89A9]"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              ) : (
                <span
                        className={`lg:text-sm text-xs font-bold font-sans whitespace-nowrap border-b-2 transition-all duration-300 ${
                            isActive(item.href)
                                ? activeBorderClass
                                : "text-[#6F678E] border-transparent"
                        } cursor-pointer`}>
                  {item.label}
                </span>
              )}

                {/* Desktop Dropdown */}
{/* Desktop Dropdown */}
{item.dropdown && activeIndex === index && (
  <div
    className={`absolute ${
      index === navItems.length - 1 ? "right-0" : "left-0"
    } top-full bg-white shadow-lg rounded-md z-20`}
  >
    {item.dropdown.map((dropdownItem) => (
      <div key={dropdownItem.href} className="relative group">
        {dropdownItem.subdropdown ? (
          <div
            className="cursor-pointer block px-4 py-2 text-sm text-[#6F678E] hover:bg-[#8F89A9] hover:text-white whitespace-nowrap transition-all"
          >
            {dropdownItem.label}
            <span className="ml-2">›</span> {/* Changed arrow direction */}
          </div>
        ) : (
          <a
            href={dropdownItem.href}
            className="block px-4 py-2 text-sm text-[#6F678E] hover:bg-[#8F89A9] hover:text-white whitespace-nowrap transition-all"
          >
            {dropdownItem.label}
            {dropdownItem.subdropdown && <span className="ml-2">›</span>}
          </a>
        )}

        {/* Subdropdown */}
        {dropdownItem.subdropdown && (
          <div
            className="absolute left-full top-0 bg-white shadow-lg rounded-md z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            {dropdownItem.subdropdown.map((subItem) => (
              <a
                key={subItem.href}
                href={subItem.href}
                className="block px-4 py-2 text-xs text-[#6F678E] hover:bg-[#8F89A9] hover:text-white whitespace-nowrap transition-all"
              >
                {subItem.label}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm text-[#6F678E]"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50 overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          className="fixed top-4 right-4 text-sm text-[#6F678E] z-[60] bg-white p-1 rounded-full shadow-sm"
          onClick={() => setIsDrawerOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Drawer Content */}
        <div className="pt-6 p-6 pb-104">
          <nav className="flex mr-8 flex-col space-y-4 uppercase text-[#222222]">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`block font-bold text-sm ${
                    item.isClickable ? "" : "pointer-events-none"
                  } ${
                    isActive(item.href)
                      ? activeBorderClass
                      : "text-[#6F678E] hover:text-[#8F89A9]"
                  } transition-all`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                </a>

                {/* Drawer Dropdown */}
                {item.dropdown && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem.href}>
                        <a
                          href={dropdownItem.href}
                          className={` ${dropdownItem.isClickable ? "" : "pointer-events-none"} block text-sm font-medium text-[#6F678E] hover:bg-[#8F89A9] hover:text-white px-3 py-1 rounded transition-all`}
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>

                        {/* Subdropdown */}
                        {dropdownItem.subdropdown && (
                          <div className="pl-4 mb-3 flex flex-col gap-0.5">
                            {dropdownItem.subdropdown.map((subItem) => (
                              <a
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-xs font-light text-[#6F678E] hover:bg-[#8F89A9] hover:text-white px-3 py-1 rounded transition-all"
                                onClick={() => setIsDrawerOpen(false)}
                              >
                                {subItem.label}
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

      {/* Main Content */}
      <main className="flex-grow w-full">{children}</main>

      <footer className="mt-20 mb-12 text-[#222222]">
              {/*<p className="text-xl font-bold">Na kontaktoni</p>*/}
              <div className="flex justify-center items-center space-x-4 mt-4">
                  <a
                      href="https://www.instagram.com/hijab.throne/?hl=en"
                      target="_blank"
                      className="hover:scale-110 hover:text-blue-500 transition-all duration-300"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                           viewBox="0 0 64 64">
                          <linearGradient id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1" x1="32" x2="32" y1="6.667" y2="57.872"
                                          gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                              <stop offset="0" stopColor="#1a6dff"></stop>
                              <stop offset="1" stopColor="#c822ff"></stop>
                          </linearGradient>
                          <path fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)"
                                d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"></path>
                          <linearGradient id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2" x1="32" x2="32" y1="18.167" y2="45.679"
                                          gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                              <stop offset="0" stopColor="#6dc7ff"></stop>
                              <stop offset="1" stopColor="#e6abff"></stop>
                          </linearGradient>
                          <path fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)"
                                d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"></path>
                          <linearGradient id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3" x1="46" x2="46" y1="12.75" y2="23.049"
                                          gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                              <stop offset="0" stopColor="#6dc7ff"></stop>
                              <stop offset="1" stopColor="#e6abff"></stop>
                          </linearGradient>
                          <path fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)"
                                d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"></path>
                      </svg>
                  </a>
                  <a
                      href="tel:+355682063377"
                      target="_blank"
                      className="hover:scale-110 hover:text-blue-500 transition-all duration-300"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                           viewBox="0 0 64 64">
                          <linearGradient id="fzF5K76u~QPjMIgETt7bMa_43677_gr1" x1="32" x2="32" y1="5.25" y2="58.834"
                                          gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                              <stop offset="0" stopColor="#1a6dff"></stop>
                              <stop offset="1" stopColor="#c822ff"></stop>
                          </linearGradient>
                          <path fill="url(#fzF5K76u~QPjMIgETt7bMa_43677_gr1)"
                                d="M6.399,57.699l3.792-13.847c-2.076-3.74-3.17-7.975-3.168-12.272 C7.028,17.641,18.373,6.301,32.312,6.301c6.762,0.003,13.115,2.636,17.889,7.414c4.774,4.778,7.402,11.151,7.4,17.944 C57.595,45.633,46.25,57,32.312,57c-4.024,0-8.073-1.019-11.744-2.95L6.399,57.699z M20.828,51.918l0.346,0.188 C24.645,53.999,28.492,55,32.302,55c12.846,0,23.293-10.471,23.299-23.341c0.002-6.26-2.418-12.13-6.814-16.53 S38.538,8.304,32.312,8.301c-12.836,0-23.283,10.443-23.288,23.279c-0.002,4.089,1.072,8.113,3.107,11.639l0.209,0.361L9.239,54.902 L20.828,51.918z M32.312,53c-3.686,0-7.415-1.06-10.793-3.063l-0.437-0.318l-8.854,2.323l2.382-8.691l-0.244-0.387 c-2.123-3.376-3.243-7.271-3.241-11.269c0.004-11.67,9.513-21.165,21.195-21.165c5.642,0.002,10.961,2.218,14.979,6.239 c4,4.003,6.202,9.345,6.2,15.039C53.495,43.448,43.99,53,32.312,53z M22.583,48.242C25.641,50.047,29.001,51,32.304,51 c10.584,0,19.191-8.654,19.195-19.292c0.002-5.161-1.992-10-5.614-13.625c-3.642-3.644-8.459-5.651-13.565-5.653 c-10.581,0-19.191,8.598-19.195,19.166c-0.002,3.619,1.012,7.146,2.933,10.201l0.715,1.131l-1.698,6.199l6.429-1.687L22.583,48.242z"></path>
                          <linearGradient id="fzF5K76u~QPjMIgETt7bMb_43677_gr2" x1="32.305" x2="32.305" y1="17.5"
                                          y2="46.527" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                              <stop offset="0" stopColor="#6dc7ff"></stop>
                              <stop offset="1" stopColor="#e6abff"></stop>
                          </linearGradient>
                          <path fill="url(#fzF5K76u~QPjMIgETt7bMb_43677_gr2)" fillRule="evenodd"
                                d="M26.12,21.219c-0.464-1.031-0.952-1.052-1.394-1.07 c-0.361-0.015-0.774-0.015-1.187-0.015c-0.413,0-1.084,0.155-1.651,0.775c-0.568,0.62-2.168,2.118-2.168,5.164 c0,3.047,2.219,5.991,2.529,6.405c0.31,0.413,4.284,6.865,10.579,9.347c5.231,2.063,6.296,1.653,7.431,1.549 c1.135-0.103,3.664-1.498,4.18-2.944c0.516-1.446,0.516-2.685,0.361-2.944c-0.155-0.258-0.568-0.413-1.187-0.723 c-0.619-0.31-3.664-1.808-4.232-2.014c-0.568-0.206-0.981-0.31-1.394,0.31c-0.413,0.619-1.599,2.014-1.96,2.427 c-0.361,0.414-0.723,0.465-1.342,0.156c-0.619-0.311-2.614-0.964-4.98-3.074c-1.841-1.641-3.084-3.668-3.445-4.288 c-0.361-0.619-0.039-0.955,0.272-1.264c0.278-0.277,0.619-0.723,0.929-1.085c0.309-0.362,0.412-0.62,0.619-1.033 c0.206-0.414,0.103-0.775-0.052-1.085S26.67,22.443,26.12,21.219z"
                                clipRule="evenodd"></path>
                      </svg>
                  </a>
                  <a
                      href="https://maps.app.goo.gl/oT8K92TAVNBvxhTj8"
                      target="_blank"
                      className="hover:scale-110 hover:text-blue-500 transition-all duration-300"
                  >
                      <div className=' w-[25px] '>
                          <OptimizedImage imageClassName="object-contain" width={30} height={30} src="/landing_page/location-30.png"/>
                      </div>
                  </a>
              </div>
          </footer>
      </div>
  );
}