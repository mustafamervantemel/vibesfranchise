import React from 'react';
import { Send, ChevronDown } from 'lucide-react';

export default function ContactForm() {
    return (
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-lg mx-auto w-full">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#181111] tracking-tight leading-[1.1] mb-4">
                        <span className="text-[#e5242a]">Vibes</span> ile İletişime Geçin
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Menümüz hakkında bir sorunuz mu var veya catering hizmeti mi almak istiyorsunuz? Bize mesaj atın, gerçekleştirelim.
                    </p>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#181111] ml-1">Ad Soyad</label>
                            <input className="w-full bg-[#f8f6f6] border border-[#e5dcdc] rounded-full px-6 py-4 text-[#181111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#e5242a] focus:border-transparent transition-all outline-none" placeholder="Ahmet Yılmaz" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#181111] ml-1">E-posta Adresi</label>
                            <input className="w-full bg-[#f8f6f6] border border-[#e5dcdc] rounded-full px-6 py-4 text-[#181111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#e5242a] focus:border-transparent transition-all outline-none" placeholder="ahmet@ornek.com" type="email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Konu</label>
                        <div className="relative">
                            <input className="w-full bg-[#f8f6f6] border border-[#e5dcdc] rounded-full px-6 py-4 text-[#181111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#e5242a] focus:border-transparent transition-all outline-none" placeholder="Aklınızda ne var?" type="text" />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <ChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Mesajınız</label>
                        <textarea className="w-full bg-[#f8f6f6] border border-[#e5dcdc] rounded-[2rem] px-6 py-4 text-[#181111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#e5242a] focus:border-transparent transition-all outline-none resize-none" placeholder="Bize catering ihtiyaçlarınızdan bahsedin..." rows={4}></textarea>
                    </div>
                    <div className="pt-4">
                        <button className="w-full bg-[#e5242a] hover:bg-[#b91c21] text-white font-bold text-lg rounded-full py-4 px-8 shadow-xl shadow-[#e5242a]/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group" type="button">
                            <span>Mesaj Gönder</span>
                            <Send className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
