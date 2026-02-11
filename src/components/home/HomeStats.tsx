import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-5xl md:text-7xl font-black font-serif text-vibes-red">
            {count}{suffix}
        </div>
    );
}

const stats = [
    { value: 13, suffix: '+', label: 'Çeşit Sandviç', description: 'Birbirinden farklı imza lezzet' },
    { value: 30, suffix: 'cm', label: 'Dev Boyut', description: 'Her sandviçte doyurucu porsiyon' },
    { value: 100, suffix: '%', label: 'Taze Malzeme', description: 'Günlük tedarik edilen malzemeler' },
];

export default function HomeStats() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-vibes-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-accent italic text-vibes-red mb-2">Rakamlarla</p>
                    <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-vibes-black">Vibes Farkı</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <h3 className="text-lg md:text-xl font-bold text-vibes-black mt-3 mb-1 font-sans">{stat.label}</h3>
                            <p className="text-sm text-gray-400 font-sans">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
