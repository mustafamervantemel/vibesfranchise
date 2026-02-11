import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-vibes-red relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-6">
                    Vibes Ailesine<br />
                    <span className="font-accent italic">Katıl</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans">
                    Franchise fırsatlarını keşfet, kendi Vibes Sandwich şubeni aç.
                    Sıradanlığa birlikte meydan okuyalım.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/franchise"
                        className="group inline-flex items-center justify-center gap-3 bg-white text-vibes-red font-bold uppercase tracking-wider px-10 py-5 rounded-xl hover:bg-vibes-black hover:text-white transition-colors text-lg font-sans"
                    >
                        Franchise Başvurusu
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl hover:bg-white hover:text-vibes-red transition-colors text-lg font-sans"
                    >
                        Menüyü Keşfet
                    </Link>
                </div>
            </div>
        </section>
    );
}
