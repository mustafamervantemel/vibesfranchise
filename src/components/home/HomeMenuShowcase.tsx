import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

// Ana sayfada gösterilecek öne çıkan ürünler (ilk 4 farklı kategoriden)
const featuredProducts = [
    products.find(p => p.id === 1)!, // Saray Sandviç
    products.find(p => p.id === 2)!, // Etfesta Sandviç
    products.find(p => p.id === 10)!, // Şefimsi Sandviç
    products.find(p => p.id === 4)!, // SandoPesto Sandviç
];

export default function HomeMenuShowcase() {
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

    return (
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
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-vibes-red transition-colors"
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
                {featuredProducts.map((item, index) => (
                    <div key={item.id} className="min-w-[85vw] md:min-w-[400px] snap-center group">
                        <div className="relative h-[550px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col justify-between p-8 transition-transform duration-500 hover:-translate-y-4">
                            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-lg font-serif italic">0{index + 1}</span>
                            </div>

                            <div className="absolute top-6 left-6">
                                <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-sans">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="flex-1 flex items-center justify-center">
                                <img
                                    src={item.image}
                                    className="w-56 h-56 object-cover rounded-xl drop-shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                                    alt={item.name}
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-3xl font-serif text-white">{item.name}</h3>
                                    {item.badge && (
                                        <span className="text-white/60 text-sm font-sans">{item.badge}</span>
                                    )}
                                </div>
                                <p className="text-white/70 text-sm mb-6 line-clamp-2 font-sans">{item.description}</p>
                                <Link
                                    to="/products"
                                    className="w-full py-4 bg-white text-vibes-red font-semibold rounded-xl flex items-center justify-center gap-2 group-hover:bg-vibes-black group-hover:text-white transition-colors uppercase tracking-wider font-sans"
                                >
                                    Menüyü İncele
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
