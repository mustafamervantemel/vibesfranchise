import elsanImg from '../../media/elsan.png';

export default function HomeHero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-48 sm:pt-52 pb-0"
            style={{
                backgroundColor: '#f0ece4',
                backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(135deg, rgba(0,0,0,0.01) 25%, transparent 25%),
                    linear-gradient(225deg, rgba(0,0,0,0.01) 25%, transparent 25%),
                    linear-gradient(315deg, rgba(0,0,0,0.01) 25%, transparent 25%),
                    linear-gradient(45deg, rgba(0,0,0,0.01) 25%, transparent 25%)
                `,
                backgroundSize: '120px 50px, 120px 50px, 60px 60px, 60px 60px, 60px 60px, 60px 60px',
            }}
        >

            {/* Brick wall overlay for realism */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 48px,
                            rgba(0,0,0,0.06) 48px,
                            rgba(0,0,0,0.06) 50px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 118px,
                            rgba(0,0,0,0.04) 118px,
                            rgba(0,0,0,0.04) 120px
                        )
                    `,
                    backgroundSize: '120px 50px',
                }}
            ></div>

            {/* Offset row for brick pattern */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 118px,
                            rgba(0,0,0,0.04) 118px,
                            rgba(0,0,0,0.04) 120px
                        )
                    `,
                    backgroundSize: '120px 50px',
                    backgroundPosition: '60px 25px',
                }}
            ></div>

            {/* Subtle vignette */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.08) 100%)',
                }}
            ></div>

            {/* ===== SPRAY PAINT GRAFFITI ELEMENTS ===== */}

            {/* Spray painted sandwich SVG - Sol taraf */}
            <div className="absolute left-4 md:left-12 lg:left-20 top-1/4 pointer-events-none opacity-30 md:opacity-40 z-[2]">
                <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'url(#spray-noise)', transform: 'rotate(-8deg)' }}>
                    <defs>
                        <filter id="spray-noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                        </filter>
                    </defs>
                    {/* Bottom bread */}
                    <path d="M20,85 Q25,95 90,95 Q155,95 160,85 Q160,75 90,75 Q20,75 20,85Z" fill="#C41E22" />
                    {/* Lettuce */}
                    <path d="M18,78 Q30,68 50,72 Q70,65 90,70 Q110,64 130,71 Q150,66 162,78" stroke="#C41E22" strokeWidth="4" fill="none" strokeLinecap="round" />
                    {/* Meat/filling */}
                    <rect x="25" y="58" width="130" height="14" rx="4" fill="#C41E22" opacity="0.7" />
                    {/* Tomato slices */}
                    <circle cx="55" cy="52" r="8" fill="#C41E22" opacity="0.5" />
                    <circle cx="90" cy="50" r="9" fill="#C41E22" opacity="0.5" />
                    <circle cx="125" cy="52" r="8" fill="#C41E22" opacity="0.5" />
                    {/* Top bread */}
                    <path d="M20,48 Q20,20 90,15 Q160,20 160,48 Q160,52 90,50 Q20,52 20,48Z" fill="#C41E22" />
                    {/* Seeds on top bread */}
                    <ellipse cx="60" cy="28" rx="3" ry="2" fill="#f0ece4" opacity="0.6" transform="rotate(-20 60 28)" />
                    <ellipse cx="90" cy="22" rx="3" ry="2" fill="#f0ece4" opacity="0.6" transform="rotate(10 90 22)" />
                    <ellipse cx="120" cy="27" rx="3" ry="2" fill="#f0ece4" opacity="0.6" transform="rotate(-15 120 27)" />
                </svg>
            </div>

            {/* Spray paint drip lines from sandwich */}
            <div className="absolute left-8 md:left-16 lg:left-24 top-[38%] pointer-events-none opacity-20 z-[2]">
                <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                    <path d="M10,0 Q8,30 12,50 Q13,58 10,60" stroke="#C41E22" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M25,0 Q27,20 24,35 Q22,42 25,45" stroke="#C41E22" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
            </div>

            {/* Sprey boya ile "Kadıköy" - Sol üst */}
            <div className="absolute left-4 md:left-10 lg:left-16 top-[12%] md:top-[15%] pointer-events-none z-[2] -rotate-6">
                <span
                    className="text-[#C41E22] text-2xl md:text-3xl lg:text-4xl opacity-40 md:opacity-50"
                    style={{
                        fontFamily: '"Permanent Marker", cursive',
                        textShadow: '2px 2px 4px rgba(196,30,34,0.15)',
                        filter: 'url(#spray-text)',
                    }}
                >
                    Kadıköy
                </span>
            </div>

            {/* Sprey boya ile "Çekmeköy" - Sağ üst */}
            <div className="absolute right-4 md:right-10 lg:right-16 top-[18%] md:top-[20%] pointer-events-none z-[2] rotate-3">
                <span
                    className="text-[#C41E22] text-xl md:text-2xl lg:text-3xl opacity-35 md:opacity-45"
                    style={{
                        fontFamily: '"Permanent Marker", cursive',
                        textShadow: '2px 2px 4px rgba(196,30,34,0.15)',
                    }}
                >
                    Çekmeköy
                </span>
            </div>

            {/* Sprey boya ekmek çizimi - Sağ alt */}
            <div className="absolute right-6 md:right-14 lg:right-24 bottom-[28%] md:bottom-[32%] pointer-events-none opacity-30 md:opacity-40 z-[2]"
                style={{ transform: 'rotate(5deg)' }}>
                <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'url(#spray-noise)' }}>
                    {/* Ekmek gövdesi */}
                    <path d="M15,50 Q10,35 20,20 Q40,5 70,5 Q100,5 120,20 Q130,35 125,50 Q120,55 70,58 Q20,55 15,50Z" fill="#C41E22" />
                    {/* Ekmek çizgileri */}
                    <path d="M35,18 Q55,10 80,12 Q105,14 115,22" stroke="#f0ece4" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
                    <path d="M30,28 Q60,20 100,26" stroke="#f0ece4" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
                    {/* Ekmek alt kısmı */}
                    <path d="M18,48 Q70,55 122,48" stroke="#f0ece4" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
                </svg>
            </div>

            {/* Sprey boya sucuk çizimi - Sağ orta */}
            <div className="absolute right-8 md:right-20 lg:right-32 top-[42%] md:top-[45%] pointer-events-none opacity-25 md:opacity-35 z-[2] hidden md:block"
                style={{ transform: 'rotate(-12deg)' }}>
                <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'url(#spray-noise)' }}>
                    {/* Sucuk gövdesi */}
                    <ellipse cx="80" cy="25" rx="75" ry="18" fill="#C41E22" />
                    {/* Sucuk ip bağları */}
                    <path d="M25,8 L25,42" stroke="#f0ece4" strokeWidth="2" opacity="0.3" />
                    <path d="M50,8 L50,42" stroke="#f0ece4" strokeWidth="2" opacity="0.3" />
                    <path d="M75,7 L75,43" stroke="#f0ece4" strokeWidth="2" opacity="0.3" />
                    <path d="M100,8 L100,42" stroke="#f0ece4" strokeWidth="2" opacity="0.3" />
                    <path d="M125,8 L125,42" stroke="#f0ece4" strokeWidth="2" opacity="0.3" />
                    {/* Kesik sucuk dilimi - sağda */}
                    <ellipse cx="155" cy="25" rx="4" ry="12" fill="#C41E22" opacity="0.6" transform="rotate(10 155 25)" />
                    <circle cx="155" cy="22" r="1.5" fill="#f0ece4" opacity="0.3" />
                    <circle cx="153" cy="28" r="1" fill="#f0ece4" opacity="0.3" />
                </svg>
            </div>

            {/* Sprey boya küçük sandviç - Sol alt */}
            <div className="absolute left-6 md:left-14 lg:left-20 bottom-[30%] md:bottom-[35%] pointer-events-none opacity-25 md:opacity-35 z-[2]"
                style={{ transform: 'rotate(8deg)' }}>
                <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'url(#spray-noise)' }}>
                    {/* Alt ekmek */}
                    <path d="M10,55 Q15,60 50,62 Q85,60 90,55 L85,50 Q50,48 15,50 Z" fill="#C41E22" />
                    {/* Malzemeler */}
                    <rect x="15" y="40" width="70" height="10" rx="3" fill="#C41E22" opacity="0.6" />
                    {/* Marul yaprakları */}
                    <path d="M12,42 Q25,32 40,38 Q55,30 70,36 Q82,30 88,40" stroke="#C41E22" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
                    {/* Üst ekmek */}
                    <path d="M12,38 Q10,18 50,12 Q90,18 88,38 Q88,40 50,38 Q12,40 12,38Z" fill="#C41E22" opacity="0.9" />
                </svg>
            </div>

            {/* Küçük sprey boya detayları - yıldızlar ve çizikler */}
            <div className="absolute left-[15%] bottom-[35%] pointer-events-none opacity-20 z-[2] hidden md:block">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20,0 L22,16 L40,20 L22,24 L20,40 L18,24 L0,20 L18,16 Z" fill="#C41E22" />
                </svg>
            </div>

            <div className="absolute right-[20%] top-[35%] pointer-events-none opacity-15 z-[2] hidden md:block">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M15,0 L17,12 L30,15 L17,18 L15,30 L13,18 L0,15 L13,12 Z" fill="#C41E22" />
                </svg>
            </div>

            {/* Sprey boya x işareti */}
            <div className="absolute left-[8%] top-[55%] pointer-events-none opacity-15 z-[2] hidden lg:block">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M2,2 L23,23 M23,2 L2,23" stroke="#C41E22" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>

            {/* Sprey boya ok işareti - sandviçe yönlendiren */}
            <div className="absolute right-[10%] top-[45%] pointer-events-none opacity-20 z-[2] hidden md:block rotate-12">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <path d="M0,20 Q20,18 40,20 M30,10 L42,20 L30,30" stroke="#C41E22" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* SVG filter for spray texture on text */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="spray-text">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>
                </defs>
            </svg>

            {/* ===== MAIN CONTENT ===== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center flex-1 justify-center">
                {/* Title */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#C41E22] leading-[0.95] mb-2 font-serif italic drop-shadow-sm">
                    SIRADANLIĞA
                    <br />
                    <span className="text-[#C41E22]">MEYDAN OKU</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A]/60 max-w-lg font-medium mt-4 font-sans">
                    Sıradanlığa meydan okuyan tarifler, günlük taze ekmekler ve seni kendine getirecek gerçek lezzet. Vibes ile modunu yakala.
                </p>

                {/* Hands holding sandwich */}
                <div className="relative mt-8 flex justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#C41E22]/5 blur-[100px] rounded-full"></div>
                    <img
                        alt="Vibes Sandwich"
                        className="relative w-[70vw] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        src={elsanImg}
                    />
                </div>
            </div>

            {/* Scrolling Marquee Banner */}
            <div className="relative z-20 w-full bg-[#C41E22] py-3 overflow-hidden -mb-1">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
                    {[...Array(3)].map((_, setIdx) => (
                        <div key={setIdx} className="flex items-center gap-8">
                            {['TAM LEZZET', 'TAZE MALZEMELER', 'EL YAPIMI', 'HIZLI TESLİMAT', 'ÖZEL SOSLAR', 'EKŞİ MAYALI EKMEK'].map((text, i) => (
                                <span key={i} className="flex items-center gap-4 text-white font-black text-lg md:text-xl tracking-wider font-serif">
                                    <span className="text-[#FFC107] text-2xl">✦</span>
                                    {text}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Cloud/wave bottom transition */}
            <div className="relative z-10 w-full -mb-1">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#FFF8F0"
                        d="M0,64 C120,100 240,110 360,96 C480,82 600,40 720,32 C840,24 960,50 1080,64 C1200,78 1320,80 1440,72 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>
        </section>
    );
}
