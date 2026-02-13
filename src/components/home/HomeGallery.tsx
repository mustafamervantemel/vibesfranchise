import { products } from '../../data/products';

export default function HomeGallery() {
    // Select a mix of products for the gallery
    const galleryItems = products.slice(0, 8); // First 8 items

    return (
        <section className="py-24 bg-vibes-black text-white relative overflow-hidden">
            {/* Background Grain */}
            <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-vibes-red font-bold tracking-widest text-sm uppercase mb-2 block animate-fade-in-up">
                        Görsel Deneyim
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in-up stagger-1">
                        Galerimiz
                    </h2>
                    <p className="text-gray-400 font-light text-xl max-w-2xl mx-auto animate-fade-in-up stagger-2 font-sans">
                        Vibes Sandwich deneyimine küçük bir bakış. En taze malzemeler, en iyi sunumlar.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-scale-in stagger-${index % 5}`}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-vibes-red text-xs font-bold tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.category === 'hot' ? 'Sıcak Lezzetler' : item.category === 'cold' ? 'Soğuk Sandviçler' : 'Tatlılar'}
                                </span>
                                <h3 className="text-xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
