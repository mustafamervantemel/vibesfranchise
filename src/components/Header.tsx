import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-black/5 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg py-2' : 'bg-white py-4'
        }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        {/* Left: Logo Area */}
        <div className="flex items-center shrink-0">
          <a href="https://vibessandwich.com" className="group flex items-center gap-3">
            <img
              src="/vibeslogo-photo.png"
              alt="Vibes Sandwich"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
