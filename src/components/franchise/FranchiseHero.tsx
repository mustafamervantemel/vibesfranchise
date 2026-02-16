import { Truck, Coins, BadgeCheck, Clock } from 'lucide-react';

export default function FranchiseHero() {
    return (
        <section className="relative min-h-screen bg-[#C41E22] text-white overflow-hidden pt-40 md:pt-48 pb-12 flex flex-col justify-center">
            {/* Background Pattern - Subtle Food Icons */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <svg className="absolute w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="food-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                            {/* Burger */}
                            <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                            <line x1="12" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1" />
                            {/* Fries */}
                            <line x1="80" y1="10" x2="82" y2="25" stroke="white" strokeWidth="1.5" />
                            <line x1="84" y1="8" x2="85" y2="25" stroke="white" strokeWidth="1.5" />
                            <line x1="88" y1="10" x2="87" y2="25" stroke="white" strokeWidth="1.5" />
                            {/* Pizza slice */}
                            <path d="M20 80 L35 70 L35 90 Z" stroke="white" strokeWidth="1.5" fill="none" />
                            {/* Drink */}
                            <path d="M80 75 L75 100 L90 100 L85 75 Z" stroke="white" strokeWidth="1.5" fill="none" />
                            <line x1="82" y1="70" x2="82" y2="75" stroke="white" strokeWidth="1" />
                            {/* Dots */}
                            <circle cx="55" cy="55" r="2" fill="white" />
                            <circle cx="110" cy="45" r="1.5" fill="white" />
                            {/* Swirl */}
                            <path d="M50 100 Q60 90 55 80" stroke="white" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#food-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center flex-grow">

                {/* TOP BAR: Partner Logos & Phone */}

                {/* SLOGAN */}
                <div className="text-center mb-6 opacity-90">
                    <p className="text-sm md:text-base tracking-[0.3em] font-light uppercase border-y border-white/20 py-2 inline-block">
                        TAZE, DOLU, EFSANE
                    </p>
                </div>

                {/* MAIN TITLE */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tight mb-4 drop-shadow-md">
                        BAŞARI ORTAĞINIZ
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white/90">
                        Türkiye de düşük yatırım gerektiren<br />franchise fırsatları.
                    </p>
                </div>

                {/* DIAGRAM SECTION */}
                <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">

                    {/* LEFT SIDE BENEFITS */}
                    <div className="flex flex-col gap-16 md:items-end text-center md:text-right">
                        {/* Düşük Franchise Ücretleri */}
                        <div className="flex flex-col items-center md:items-end gap-2 group">
                            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <span className="text-3xl font-bold">₺</span>
                            </div>
                            <h3 className="text-lg font-bold leading-tight">Düşük<br />Franchise<br />Ücretleri</h3>
                        </div>

                        {/* Uygun Lojistik Yönetimi */}
                        <div className="flex flex-col items-center md:items-end gap-2 group">
                            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <Truck size={28} />
                            </div>
                            <h3 className="text-lg font-bold leading-tight">Uygun Lojistik<br />Yönetimi</h3>
                        </div>
                    </div>

                    {/* CENTER: 30 Gün + Store Illustration */}
                    <div className="flex flex-col items-center relative">
                        {/* 30 Gün Badge */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 mb-2">
                                <Clock size={28} />
                            </div>
                            <span className="font-bold text-center text-sm">30 gün<br />açık</span>
                            {/* Dashed connector down */}
                            <div className="w-0.5 h-10 border-l-2 border-dashed border-white/40 my-2"></div>
                        </div>

                        {/* Dashed connector lines to sides (desktop only) */}
                        <svg className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[140%] h-32 pointer-events-none" viewBox="0 0 500 120" fill="none" preserveAspectRatio="xMidYMid meet">
                            {/* Line to top-left (Düşük Franchise) */}
                            <path d="M250 20 Q180 10 100 40" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" fill="none" />
                            {/* Line to top-right (Daha Yüksek Getiri) */}
                            <path d="M250 20 Q320 10 400 40" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" fill="none" />
                        </svg>

                        {/* Shop Illustration */}
                        <div className="relative w-64 h-56 md:w-72 md:h-60 transition-transform hover:scale-105 duration-500">
                            {/* Roof/Awning */}
                            <div className="absolute top-0 left-0 right-0 h-14 bg-white flex items-center justify-center border-b-4 border-[#a5181b] z-20 shadow-lg rounded-t-md">

                                {/* Burger Icon on Awning */}
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <div className="w-7 h-3.5 bg-orange-400 rounded-t-full"></div>
                                    <div className="w-7 h-1.5 bg-red-500 my-0.5 rounded-sm"></div>
                                    <div className="w-7 h-2.5 bg-orange-300 rounded-b-md"></div>
                                </div>
                            </div>
                            {/* Store Front */}
                            <div className="absolute top-14 inset-x-2 bottom-0 bg-gray-700 flex border-x-8 border-gray-400">
                                {/* Window */}
                                <div className="flex-1 m-2 bg-blue-900/50 relative overflow-hidden border-2 border-white/10">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                                    {/* Reflection lines */}
                                    <div className="absolute top-3 left-3 w-20 h-1.5 bg-white/10 transform -rotate-45"></div>
                                    <div className="absolute top-10 left-3 w-20 h-1.5 bg-white/10 transform -rotate-45"></div>
                                </div>
                                {/* Door */}
                                <div className="w-16 bg-amber-700 m-2 border-4 border-gray-300 relative">
                                    <div className="bg-blue-900/60 w-10 h-12 mx-auto mt-3 border border-white/20 flex items-center justify-center">
                                        <div className="bg-white px-1 py-0.5 text-[7px] font-bold text-black transform -rotate-6">OPEN</div>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 absolute right-1.5 top-1/2"></div>
                                </div>
                            </div>
                            {/* Pillars */}
                            <div className="absolute top-14 bottom-0 left-0 w-3 bg-gray-400 border-r border-gray-500"></div>
                            <div className="absolute top-14 bottom-0 right-0 w-3 bg-gray-400 border-l border-gray-500"></div>
                            {/* Base */}
                            <div className="absolute -bottom-3 -left-6 -right-6 h-3 bg-gray-300 rounded-sm shadow-xl"></div>
                            {/* Red Counter/Bar at bottom */}
                            <div className="absolute bottom-0 inset-x-4 h-10 bg-[#C41E22] border-t-2 border-[#a5181b] rounded-b-sm"></div>
                        </div>

                        {/* Dashed connector lines to bottom sides (desktop only) */}
                        <svg className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 w-[140%] h-32 pointer-events-none" viewBox="0 0 500 120" fill="none" preserveAspectRatio="xMidYMid meet">
                            {/* Line to bottom-left (Uygun Lojistik) */}
                            <path d="M250 100 Q180 110 100 80" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" fill="none" />
                            {/* Line to bottom-right (Kalite Güvencesi) */}
                            <path d="M250 100 Q320 110 400 80" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" fill="none" />
                        </svg>
                    </div>

                    {/* RIGHT SIDE BENEFITS */}
                    <div className="flex flex-col gap-16 md:items-start text-center md:text-left">
                        {/* Daha Yüksek Getiri */}
                        <div className="flex flex-col items-center md:items-start gap-2 group">
                            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <Coins size={28} />
                            </div>
                            <h3 className="text-lg font-bold leading-tight">Daha Yüksek<br />Getiri</h3>
                        </div>

                        {/* Kalite Güvencesi */}
                        <div className="flex flex-col items-center md:items-start gap-2 group">
                            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <BadgeCheck size={28} />
                            </div>
                            <h3 className="text-lg font-bold leading-tight">Kalite<br />Güvencesi</h3>
                        </div>
                    </div>
                </div>


            </div>

            {/* Bottom Torn/Wave Effect - Orange/Yellow like reference */}
            <div className="relative w-full mt-auto">
                <svg className="block w-full h-20 md:h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,40 C100,80 200,10 300,50 C400,90 500,20 600,60 C700,100 800,30 900,50 C1000,70 1100,20 1200,40 L1200,120 L0,120 Z"
                        fill="#E8A317"
                    />
                    <path
                        d="M0,60 C150,90 250,30 400,70 C550,110 650,40 800,65 C950,90 1050,35 1200,55 L1200,120 L0,120 Z"
                        fill="#D4941A"
                    />
                </svg>
            </div>
        </section>
    );
}
