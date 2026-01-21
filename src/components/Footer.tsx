import { Instagram, Facebook, Twitter, Heart, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] text-[var(--text-primary)] pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E62429] to-transparent" />

      {/* Floating Decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#E62429]/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#C41E22]/10 to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left clip-reveal">
            <div className="flex items-center justify-center md:justify-start mb-4 group cursor-pointer">
              <img
                src="/vibeslogo-photo.png"
                alt="Vibes Sandwich"
                className="h-12 sm:h-14 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-[var(--text-tertiary)] leading-relaxed">
              Türkiye'nin en lezzetli sandwich deneyimi. Taze malzemeler, özel tarifler, mutlu müşteriler.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center clip-reveal stagger-2">
            <h4 className="font-bold text-lg mb-4 gradient-text">İletişim</h4>
            <div className="space-y-3">
              <a href="mailto:info@vibessandwich.com" className="flex items-center justify-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group">
                <Mail size={18} className="group-hover:text-[#E62429] transition-colors" />
                info@vibessandwich.com
              </a>
              <a href="tel:+905304866995" className="flex items-center justify-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group">
                <Phone size={18} className="group-hover:text-[#E62429] transition-colors" />
                0530 486 69 95
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right clip-reveal stagger-3">
            <h4 className="font-bold text-lg mb-4 gradient-text">Bizi Takip Edin</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="social-icon gradient-border-hover bg-[var(--bg-card)] p-3 rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="social-icon gradient-border-hover bg-[var(--bg-card)] p-3 rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="social-icon gradient-border-hover bg-[var(--bg-card)] p-3 rounded-xl transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center clip-reveal stagger-4">
          <p className="text-[var(--text-tertiary)] text-sm">
            &copy; 2026 Vibes Sandwich. Tüm hakları saklıdır.
          </p>
          <p className="text-[var(--text-tertiary)] text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-[#E62429] animate-heartbeat" /> by
            <a href="https://varonsoft.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              Varonsoft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
