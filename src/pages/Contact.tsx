import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function Contact() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden bg-white">
            {/* Hero Header */}
            <div className="relative bg-[#C41E22] pt-32 pb-20 px-4 md:px-10 text-center overflow-hidden">
                {/* Brick pattern overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.1) 48px, rgba(255,255,255,0.1) 50px),
                            repeating-linear-gradient(90deg, transparent, transparent 118px, rgba(255,255,255,0.08) 118px, rgba(255,255,255,0.08) 120px)
                        `,
                        backgroundSize: '120px 50px',
                    }}
                ></div>
                <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white font-serif italic tracking-tight mb-4">
                    Bize Ulaşın
                </h1>
                <p className="relative z-10 text-white/80 text-lg md:text-xl font-sans max-w-xl mx-auto">
                    Vibes Sandwich ile iletişime geçmek çok kolay. Bizi ziyaret edin, arayın veya mail atın.
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-grow flex items-start justify-center py-12 px-4 md:px-10 -mt-8">
                <div className="w-full max-w-6xl">

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                        {/* Telefon */}
                        <a href="tel:+905550123456" className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#C41E22]/30 hover:shadow-xl transition-all duration-300 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#C41E22]/10 text-[#C41E22] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C41E22] group-hover:text-white transition-colors duration-300">
                                <Phone size={28} />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Telefon</h3>
                            <p className="text-xl font-bold text-[#1A1A1A]">+90 (555) 012-3456</p>
                            <p className="text-sm text-gray-400 mt-2 group-hover:text-[#C41E22] transition-colors">Hemen Arayın →</p>
                        </a>

                        {/* Mail */}
                        <a href="mailto:hello@vibessandwich.com" className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#C41E22]/30 hover:shadow-xl transition-all duration-300 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#C41E22]/10 text-[#C41E22] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C41E22] group-hover:text-white transition-colors duration-300">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">E-posta</h3>
                            <p className="text-xl font-bold text-[#1A1A1A]">hello@vibessandwich.com</p>
                            <p className="text-sm text-gray-400 mt-2 group-hover:text-[#C41E22] transition-colors">Mail Gönderin →</p>
                        </a>

                        {/* Çalışma Saatleri */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#C41E22]/10 text-[#C41E22] flex items-center justify-center mx-auto mb-5">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Çalışma Saatleri</h3>
                            <p className="text-lg font-bold text-[#1A1A1A]">Her gün</p>
                            <p className="text-gray-500 font-medium">10:00 — 22:00</p>
                        </div>
                    </div>

                    {/* Address + Map Section */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[400px]">

                        {/* Address Info */}
                        <div className="lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-[#1A1A1A]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#C41E22] text-white flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Adres</h3>
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-white font-serif mb-3">Vibes Sandwich</p>
                            <p className="text-lg text-white/70 leading-relaxed mb-6">
                                Mehmet Akif, Günyamaç Cd.,
                                <br />
                                34782 Çekmeköy/İstanbul
                            </p>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Mehmet+Akif+Günyamaç+Cd+34782+Çekmeköy+İstanbul"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#C41E22] hover:bg-[#a5181b] text-white font-bold rounded-full px-6 py-3 transition-colors duration-200 w-fit"
                            >
                                <Navigation size={18} />
                                Yol Tarifi Al
                            </a>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="lg:w-[60%] min-h-[300px] lg:min-h-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5!2d29.18!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzI0LjAiTiAyOcKwMTAnNDguMCJF!5e0!3m2!1str!2str!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vibes Sandwich Konum"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
