import { Heart, Quote } from 'lucide-react';

export default function HomeSocialProof() {
    return (
        <section className="py-32 px-6 md:px-12 bg-gray-50 bg-grain">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="font-serif text-5xl md:text-7xl text-vibes-black">Vibe'ı Hisset</h2>
                <p className="mt-4 text-gray-500 font-light text-xl font-sans">Asi ruhlar tarafından etiketlendi.</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
                {/* Item 1 */}
                <div className="break-inside-avoid relative group">
                    <img src="/pc-san-2.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 1" />
                    <div className="mt-4 flex justify-between items-center px-2">
                        <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@VIBES_LOVER</span>
                        <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                    </div>
                </div>

                {/* Item 2 (Quote) */}
                <div className="break-inside-avoid bg-vibes-black text-white p-8 text-center flex flex-col items-center justify-center min-h-[300px] rounded-lg shadow-xl">
                    <Quote className="text-vibes-red mb-4" size={40} />
                    <p className="font-serif text-2xl leading-relaxed">"Bugüne kadar yediğim en iyi sandviç. Lüks bir deneyim."</p>
                    <span className="mt-6 text-sm font-mono text-gray-400">GURME MAG</span>
                </div>

                {/* Item 3 */}
                <div className="break-inside-avoid relative group">
                    <img src="/yenivibe.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 2" />
                    <div className="mt-4 flex justify-between items-center px-2">
                        <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@ISTANBUL_EATS</span>
                        <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="break-inside-avoid relative group">
                    <img src="/mobil-san-1.png" className="w-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 bg-white p-4 shadow-sm" alt="Social 3" />
                    <div className="mt-4 flex justify-between items-center px-2">
                        <span className="text-xs font-bold tracking-widest font-sans text-vibes-black">@URBAN_FOODIE</span>
                        <button className="text-vibes-red hover:scale-125 transition-transform"><Heart size={20} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
