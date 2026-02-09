import { useState, useRef, useEffect } from 'react';
import { ArrowRight, PlusCircle, ArrowLeft, Heart, Quote } from 'lucide-react';

const menuItems = [
    {
        id: 1,
        name: 'The Rebel',
        price: '₺220',
        description: 'Spicy buttermilk chicken, slaw, pickles, chili oil glaze.',
        image: '/pc-san-2.png', // Using existing image
    },
    {
        id: 2,
        name: 'Golden Hour',
        price: '₺260',
        description: 'Truffle mushrooms, swiss cheese, caramelized onions, brioche.',
        image: '/yenivibe.png', // Using existing image
    },
    {
        id: 3,
        name: 'Vibe Classic',
        price: '₺190',
        description: 'Double smash patty, american cheese, vibe sauce, lettuce.',
        image: '/mobil-san-1.png', // Using existing image
    },
];

export default function Home() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // Custom Cursor Logic
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="flex flex-col w-full bg-white relative">
            {/* Custom Cursor */}
            <div
                id="cursor"
                className={`hidden md:block fixed pointer-events-none z-[9999] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 border border-[#C41E22] rounded-full mix-blend-difference ${isHovered ? 'w-[60px] h-[60px] bg-white' : 'w-5 h-5'}`}
                style={{
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`,
                }}
            ></div>

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
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>

                    {/* Description - Font güncellendi */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-lg font-medium mt-2 font-sans">
                        Sıradanlığa meydan okuyan tarifler, günlük taze ekmekler ve seni kendine getirecek gerçek lezzet. Vibes ile modunu yakala.
                    </p>
                </div>
            </section>


            {/* The Vibe (Philosophy) */}
            <section id="philosophy" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <div className="md:col-span-7 relative z-10">
                        <h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tight mb-8 text-vibes-black">
                            Sadece bir sandviç değil. <br />
                            <span className="font-accent italic text-vibes-red">Bir duruş.</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl font-light text-vibes-black/80 max-w-xl font-sans">
                            <p>Sıradanlığa başkaldırıyoruz. Her katman maksimum etki için hesaplandı. Çıtır dokuların erimiş peynirle kaotik uyumu.</p>
                        </div>

                        {/* Interactive Ingredient List */}
                        <div className="mt-12 space-y-4 font-serif">
                            {['Artisan Brioche', 'Nashville Hot Tavuk', 'Ghost Pepper Aioli'].map((item, i) => (
                                <div key={i} className="group relative border-b border-gray-200 py-4 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl">{item}</span>
                                        <PlusCircle className="group-hover:rotate-45 transition-transform text-vibes-black" />
                                    </div>
                                    {/* Hover Image Reveal (Hidden on mobile for simplicity, or implemented if easy) */}
                                    <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 h-32 overflow-hidden rounded-lg bg-gray-100 shadow-xl z-20">
                                        <img src={`/mobil-san-1.png`} className="w-full h-full object-cover" alt={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="md:col-span-5 h-full relative flex justify-center">
                        <div className="relative w-full aspect-[4/5] max-w-md">
                            <div className="absolute inset-0 bg-[#C41E22] rounded-2xl rotate-3 opacity-20 blur-sm"></div>
                            <img
                                src="/vibeslogo-photo.png"
                                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                alt="Vibes Philosophy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Showcase (Horizontal Scroll) */}
            <section id="menu" className="bg-vibes-red py-32 overflow-hidden relative">
                <div className="px-6 md:px-12 mb-12 flex justify-between items-end text-white max-w-7xl mx-auto">
                    <div>
                        <p className="font-accent italic text-white/70 mb-2">Koleksiyon</p>
                        <h2 className="font-serif text-5xl md:text-6xl tracking-tight">İmza Lezzetler</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-vibes-red transition-colors"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-vibes-red transition-colors"
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto no-scrollbar px-6 md:px-12 gap-8 pb-12 snap-x snap-mandatory max-w-[1920px] mx-auto justify-start md:justify-center"
                >
                    {menuItems.map((item, index) => (
                        <div key={item.id} className="min-w-[85vw] md:min-w-[400px] snap-center group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="relative h-[550px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-4">
                                <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-lg font-serif italic">0{index + 1}</span>
                                </div>

                                <div className="flex-1 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        className="w-56 h-auto object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                                        alt={item.name}
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <h3 className="text-3xl font-serif text-white">{item.name}</h3>
                                    </div>
                                    <p className="text-white/70 text-sm mb-6 line-clamp-2 font-sans">{item.description}</p>
                                    <button className="w-full py-4 bg-white text-vibes-red font-semibold rounded-xl flex items-center justify-center gap-2 group-hover:bg-vibes-black group-hover:text-white transition-colors uppercase tracking-wider font-sans">
                                        Sipariş Ver
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Social Proof (Masonry) */}
            <section className="py-32 px-6 md:px-12 bg-gray-50 bg-grain">
                <div className="max-w-7xl mx-auto mb-16 text-center">
                    <h2 className="font-serif text-5xl md:text-7xl text-vibes-black">Vibe'ı Hisset</h2>
                    <p className="mt-4 text-gray-500 font-light text-xl font-sans">Asi ruhlar tarafından etiketlendi.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
                    {/* Item 1 */}
                    <div className="break-inside-avoid relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src="/pc-san-2.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 1" />
                        <div className="mt-4 flex justify-between items-center px-2">
                            <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@VIBES_LOVER</span>
                            <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                        </div>
                    </div>

                    {/* Item 2 (Quote) */}
                    <div className="break-inside-avoid bg-vibes-black text-white p-8 text-center flex flex-col items-center justify-center min-h-[300px] rounded-lg shadow-xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Quote className="text-vibes-red mb-4" size={40} />
                        <p className="font-serif text-2xl leading-relaxed">"Bugüne kadar yediğim en iyi sandviç. Lüks bir deneyim."</p>
                        <span className="mt-6 text-sm font-mono text-gray-400">GURME MAG</span>
                    </div>

                    {/* Item 3 */}
                    <div className="break-inside-avoid relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src="/yenivibe.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 2" />
                        <div className="mt-4 flex justify-between items-center px-2">
                            <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@ISTANBUL_EATS</span>
                            <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="break-inside-avoid relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src="/mobil-san-1.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 3" />
                        <div className="mt-4 flex justify-between items-center px-2">
                            <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@URBAN_FOODIE</span>
                            <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
