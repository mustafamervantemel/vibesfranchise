import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onApplyClick: () => void;
}

export default function Header({ onApplyClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass py-3 shadow-lg'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 group cursor-pointer clip-reveal"
          onClick={onApplyClick}
        >
          <img
            src="/vibeslogo-photo.png"
            alt="Vibes Sandwich"
            className="h-12 sm:h-14 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden sm:flex items-center gap-4 clip-reveal stagger-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-[var(--bg-tertiary)] group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={20} className="text-[#E62429] group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-sm font-medium text-[var(--text-secondary)]">Light</span>
              </>
            ) : (
              <>
                <Moon size={20} className="text-[#E62429] group-hover:rotate-[-20deg] transition-transform duration-300" />
                <span className="text-sm font-medium text-[var(--text-secondary)]">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-300 hover:bg-[var(--bg-tertiary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={24} className="text-[#E62429]" />
            ) : (
              <Moon size={24} className="text-[#E62429]" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#E62429] p-2 rounded-lg transition-all duration-300 hover:bg-[var(--bg-tertiary)]"
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
        <div className="glass mx-4 mt-4 rounded-xl p-4">
          <button
            onClick={() => {
              onApplyClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full btn-primary"
          >
            🥪 Başvuru Formuna Git
          </button>
        </div>
      </div>
    </header>
  );
}
