import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export default function Header({ onApplyClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 py-6 sm:py-8 lg:py-10 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center relative">
        {/* Logo - Centered on desktop, bigger and more prominent */}
        <div
          className="flex items-center gap-2 group cursor-pointer sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          onClick={onApplyClick}
        >
          <img
            src="/vibeslogo-photo.png"
            alt="Vibes Sandwich"
            className="h-14 sm:h-20 lg:h-28 xl:h-32 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#E62429] p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/90 backdrop-blur-md mx-4 mt-4 rounded-xl p-4 shadow-lg">
          <button
            onClick={() => {
              onApplyClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-[#C41E22] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#a81a1d] transition-colors"
          >
            🥪 Başvuru Formuna Git
          </button>
        </div>
      </div>
    </header>
  );
}
