import { Leaf, ShieldCheck, ChefHat, Sparkles } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Temiz Gıda',
        description: 'Katkı maddesi içermeyen, doğal ve taze malzemelerle hazırlanır.',
    },
    {
        icon: ShieldCheck,
        title: 'Hijyenik Mutfak',
        description: 'En yüksek hijyen standartlarında, steril mutfaklarda üretilir.',
    },
    {
        icon: ChefHat,
        title: 'Lezzetli Tarif',
        description: 'Uzman şeflerimizin özel tarifleriyle eşsiz lezzet garantisi.',
    },
];

export default function TechVibe() {
    return (
        <section className="bg-[#1A1A1A] py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E22]/10 px-4 py-1.5 text-xs font-medium text-[#C41E22] ring-1 ring-[#C41E22]/20 uppercase tracking-wider">
                        <Sparkles className="h-3.5 w-3.5" />
                        Vibes Kalite
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl uppercase">
                        KALİTE BİZİM
                        <br />
                        <span className="text-[#C41E22]">TUTKUMUZ</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        Her bir sandviçimiz, en taze malzemelerle hijyenik ortamda
                        ve uzman ellerde özenle hazırlanır.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-[#C41E22]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C41E22]/30 transition-colors">
                                <feature.icon className="h-8 w-8 text-[#C41E22]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
