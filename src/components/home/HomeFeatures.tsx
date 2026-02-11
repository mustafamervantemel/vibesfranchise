import { Leaf, ShieldCheck, Clock, Truck } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Taze Malzeme',
        description: 'Her gün taze tedarik edilen, kaliteli ve doğal malzemeler kullanıyoruz.',
    },
    {
        icon: ShieldCheck,
        title: 'Hijyen Garantisi',
        description: 'ISO standartlarında hijyenik mutfak ve üretim süreçleri.',
    },
    {
        icon: Clock,
        title: 'Hızlı Hazırlık',
        description: 'Siparişiniz dakikalar içinde özenle hazırlanır.',
    },
    {
        icon: Truck,
        title: 'Hızlı Teslimat',
        description: 'Kapınıza kadar sıcacık ve taze teslimat.',
    },
];

export default function HomeFeatures() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-vibes-black relative overflow-hidden">
            {/* Grid pattern bg */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="font-accent italic text-vibes-red mb-2">Neden Biz?</p>
                    <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-white">
                        Kalite <span className="font-accent italic text-vibes-red">Standartlarımız</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={i}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-xl bg-vibes-red/20 flex items-center justify-center mb-6 group-hover:bg-vibes-red transition-colors duration-300">
                                    <Icon className="text-vibes-red group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-sans">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed font-sans">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
