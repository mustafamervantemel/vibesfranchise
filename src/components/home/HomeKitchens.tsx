export default function HomeKitchens() {
    const kitchenImages = [
        {
            src: '/ghost-kitchen-1.png',
            alt: 'Vibes Sandwich Ghost Kitchen - Hazırlık İstasyonu',
            label: 'Hazırlık İstasyonu',
        },
        {
            src: '/ghost-kitchen-2.png',
            alt: 'Vibes Sandwich Ghost Kitchen - Üretim Alanı',
            label: 'Üretim Alanı',
        },
        {
            src: '/ghost-kitchen-3.png',
            alt: 'Vibes Sandwich Ghost Kitchen - El Yapımı Sandviçler',
            label: 'El Yapımı Lezzet',
        },
    ];

    return (
        <section className="py-24 bg-[#fafafa] relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#C41E22] font-bold tracking-widest text-sm uppercase mb-2 block animate-fade-in-up">
                        Sahne Arkası
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mb-6 animate-fade-in-up stagger-1">
                        Mutfaklarımız
                    </h2>
                    <p className="text-gray-500 font-light text-xl max-w-2xl mx-auto animate-fade-in-up stagger-2 font-sans">
                        Ghost kitchen konseptimizle, tüm enerjimizi lezzete odaklıyoruz.
                        Profesyonel mutfaklarımızda her sandviç özenle hazırlanır.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {kitchenImages.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer animate-scale-in stagger-${index}`}
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#C41E22] animate-pulse"></div>
                                    <span className="text-[#C41E22] text-xs font-bold tracking-wider uppercase">
                                        Ghost Kitchen
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.label}
                                </h3>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 group-hover:border-[#C41E22] transition-colors duration-300 rounded-tr-lg"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom info bar */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                    {[
                        { value: '100%', label: 'Hijyen Standardı' },
                        { value: 'Günlük', label: 'Taze Malzemeler' },
                        { value: '7/24', label: 'Kalite Kontrol' },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-3xl font-black text-[#C41E22] font-serif">{stat.value}</span>
                            <span className="text-gray-500 text-sm font-medium font-sans">{stat.label}</span>
                            {i < 2 && <span className="hidden md:block ml-8 w-px h-8 bg-gray-200"></span>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
