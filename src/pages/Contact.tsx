import { Utensils, MapPin, Phone, Mail, Store, ArrowRight, ChevronDown, Send, Menu } from 'lucide-react';

export default function Contact() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 bg-white pointer-events-none opacity-60"></div>

            {/* Main Content Split Layout */}
            <div className="relative z-10 flex-grow flex items-center justify-center py-10 px-4 md:px-10 mt-16">
                <div className="w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-black/5">
                    {/* Left Side: Form */}
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
                    {/* Right Side: Map & Info */}
                    <div className="lg:w-[45%] relative bg-white border-l border-[#e5dcdc] flex flex-col">
                        {/* Map Container */}
                        <div className="h-1/2 lg:h-3/5 w-full relative overflow-hidden bg-gray-100">
                            {/* Using a placeholder or Google Maps embed here would be ideal. For now using the image as per design */}
                            <img alt="Map" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzJFAjpISWO2IoI4Qwkuoo2DHJlvg_g8wqyIpXh9fllyht-X7Ia1pmIKVsqhomvt1CU3ePBQPHauWQXqlJLuz_hCHpquX6mTQ_PWWOWqISC4Etw4yNJfZ0nFCg4b4FErs9kNKL0K4192mVXnNg23tdUuPuSuBlfBSMl3Kus_z4AcuXJUrTlp3XK8eD_mNbbUDgUkZdxYujscfJ7NMows2UPtcquDAeWKU5bGbCned99ZFQoOD9yDeNVLiMNuM6P0hU3UFb23-6EW3y" />

                            {/* Map Marker Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-[#e5242a]/20 rounded-full animate-ping absolute inset-0"></div>
                                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 text-[#e5242a]">
                                        <MapPin className="text-3xl" size={32} />
                                    </div>
                                </div>
                                <div className="mt-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100">
                                    <p className="font-bold text-sm text-[#181111]">Vibes Genel Merkez</p>
                                </div>
                            </div>
                        </div>
                        {/* Contact Details Cards */}
                        <div className="flex-1 p-8 lg:p-12 bg-zinc-50 flex flex-col justify-center gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-[#e5dcdc]/50 hover:border-[#e5242a]/30 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-[#e5242a]/10 text-[#e5242a] flex items-center justify-center shrink-0 group-hover:bg-[#e5242a] group-hover:text-white transition-colors">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
                                    <p className="text-lg font-bold text-[#181111]">+90 (555) 012-3456</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-[#e5dcdc]/50 hover:border-[#e5242a]/30 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-[#e5242a]/10 text-[#e5242a] flex items-center justify-center shrink-0 group-hover:bg-[#e5242a] group-hover:text-white transition-colors">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">E-posta</p>
                                    <p className="text-lg font-bold text-[#181111]">hello@vibessandwich.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-[#e5dcdc]/50 hover:border-[#e5242a]/30 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-[#e5242a]/10 text-[#e5242a] flex items-center justify-center shrink-0 group-hover:bg-[#e5242a] group-hover:text-white transition-colors">
                                    <Store />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Merkez Şube</p>
                                    <p className="text-lg font-bold text-[#181111]">Lezzet Bulvarı No: 123, Sandwich City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
