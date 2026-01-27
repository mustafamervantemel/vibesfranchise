import { Instagram, Facebook, Twitter, Heart, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E62429] to-transparent" />

      {/* Floating Decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#E62429]/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#C41E22]/10 to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4 group cursor-pointer">
              <img
                src="/vibeslogo-photo.png"
                alt="Vibes Sandwich"
                className="h-12 sm:h-14 w-auto transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Türkiye'nin en lezzetli sandwich deneyimi. Taze malzemeler, özel tarifler, mutlu müşteriler.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4 text-[#E62429]">İletişim</h4>
            <div className="space-y-3">
              <a href="mailto:info@vibessandwich.com" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <Mail size={18} className="group-hover:text-[#E62429] transition-colors" />
                info@vibessandwich.com
              </a>
              <a href="tel:+905304866995" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <Phone size={18} className="group-hover:text-[#E62429] transition-colors" />
                0530 486 69 95
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-4 text-[#E62429]">Bizi Takip Edin</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="bg-[#2A2A2A] hover:bg-[#E62429] p-3 rounded-xl transition-all duration-300 text-white"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="bg-[#2A2A2A] hover:bg-[#E62429] p-3 rounded-xl transition-all duration-300 text-white"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="bg-[#2A2A2A] hover:bg-[#E62429] p-3 rounded-xl transition-all duration-300 text-white"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Vibes Sandwich. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-[#E62429]" /> by
            <a href="https://varonsoft.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium">
              Varonsoft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
