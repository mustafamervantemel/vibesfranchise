import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Ürünlerimiz', path: '/products' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b border-black/5 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg py-2' : 'bg-white py-4'
          }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          {/* Left: Logo Area */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src="/vibeslogo-photo.png"
                alt="Vibes Sandwich"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center rounded-full bg-black/5 px-2 py-1.5 backdrop-blur-md border border-black/5 shadow-inner">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-bold transition-all rounded-full ${isActive
                      ? 'text-black hover:text-[#E62429]'
                      : 'text-gray-600 hover:text-black hover:bg-black/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#E62429] opacity-100"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-black transition-colors hover:bg-black/10 lg:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'top-[80px] opacity-100 visible' : 'top-full opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold transition-all ${isActive ? 'text-[#E62429]' : 'text-black hover:text-[#E62429]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
