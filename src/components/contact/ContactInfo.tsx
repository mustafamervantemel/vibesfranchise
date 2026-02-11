import React from 'react';
import { MapPin, Phone, Mail, Store } from 'lucide-react';

export default function ContactInfo() {
    return (
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
    );
}
