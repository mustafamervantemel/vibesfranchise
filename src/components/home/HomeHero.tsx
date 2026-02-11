import React from 'react';

export default function HomeHero() {
    return (
        <>

            {/* Hero Section - KORUNAN BÖLÜM */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-48 sm:pt-52 pb-16">
                {/* Top Wave Transition */}
                <div className="absolute top-0 left-0 w-full z-0 pointer-events-none rotate-180">
                    <svg
                        className="w-full h-auto text-[#C41E22] fill-current"
                        viewBox="0 0 1440 320"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fillOpacity="1"
                            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                {/* Background watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <div className="whitespace-nowrap text-[18vw] font-black leading-none tracking-tighter text-black/[0.02]">
                        VIBES SANDWICH
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
                    {/* Title - Font güncellendi */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] leading-[0.95] mb-2 font-serif italic">
                        SIRADANLIĞA
                        <br />
                        <span className="text-[#C41E22]">MEYDAN OKU</span>
                    </h1>

                    {/* Sandwich Image */}
                    <div className="relative flex items-center justify-center -my-4 sm:-my-6 md:-my-8">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C41E22]/10 blur-[80px] rounded-full"></div>
                        <img
                            alt="Vibes Sandwich"
                            className="relative w-[85vw] sm:w-[400px] md:w-[460px] lg:w-[520px] xl:w-[580px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            src="/pc-san-2.png"
                        />
                    </div>

                    {/* Description - Font güncellendi */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-lg font-medium mt-2 font-sans">
                        Sıradanlığa meydan okuyan tarifler, günlük taze ekmekler ve seni kendine getirecek gerçek lezzet. Vibes ile modunu yakala.
                    </p>
                </div>
            </section>
        </>
    );
}
