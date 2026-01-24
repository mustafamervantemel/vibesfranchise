import { Sandwich, TrendingUp, Users, ChefHat, Clock, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { value: 25840, suffix: '+', label: 'MUTLU ZİYARETÇİ', icon: Users },
  { value: 25, suffix: '+', label: 'UZMAN ŞEF', icon: ChefHat },
  { value: 75, suffix: '+', label: 'ZENGİN MENÜ', icon: Sandwich },
  { value: 4.9, suffix: '', label: 'ZİYARETÇİ PUANLAMASI', icon: ThumbsUp },
];

const features = [
  {
    icon: Sandwich,
    title: 'Kaliteli Ürünler',
    description: 'Taze malzemeler ve özel tariflerle hazırlanmış lezzetler',
  },
  {
    icon: TrendingUp,
    title: 'Yüksek Karlılık',
    description: 'Kanıtlanmış iş modeli ve güçlü marka bilinirliği',
  },
  {
    icon: Users,
    title: 'Tam Destek',
    description: 'çılıştan operasyona kadar her adımda yanınızdayız',
  },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="">
      {count}{suffix}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Floating Decorative Shapes */}
      <div className="floating-shape shape-1 top-20 left-10" />
      <div className="floating-shape shape-2 top-40 right-20" />
      <div className="floating-shape shape-3 bottom-40 left-1/4" />
      <div className="floating-shape shape-2 bottom-20 right-1/3" />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #E62429 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-400/10 to-red-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 gradient-border bg-[var(--bg-card)] text-[#E62429] px-4 py-2 rounded-full text-sm font-medium mb-6 clip-reveal">
            <ChefHat size={18} />
            <span>Türkiye'nin En Lezzetli Franchise Fırsatı</span>
          </div>

          <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 clip-reveal-up stagger-1 pt-2">
            <span className="text-[#E62429] text-4xl sm:text-5xl lg:text-6xl leading-relaxed py-2" style={{ fontFamily: "'Pacifico', cursive" }}>Vibes</span>
            <span>Ailesine</span>
            <span className="relative">
              <span className="gradient-text-animated">Katılın!</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#E62429" strokeWidth="3" strokeLinecap="round" className="clip-reveal stagger-4" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] mb-10 max-w-3xl mx-auto clip-reveal-up stagger-2">
            Karlı bir iş fırsatı sizi bekliyor. Türkiye'nin en dinamik sandwich franchise'ı ile
            <span className="text-[#E62429] font-semibold"> başarı hikayenizi </span>
            yazın.
          </p>

          {/* Animated Sandwich Image */}
          <div className="relative inline-block mb-12 clip-reveal-center stagger-3">
            <img
              src="/yenivibe.png"
              alt="Vibes Sandwich"
              className="w-84 sm:w-80 lg:w-96 h-auto animate-bounce-subtle drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#C41E22] rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden clip-reveal-up stagger-4 shadow-xl">
          {/* Center Vertical Separator */}
          <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 hidden md:flex flex-col items-center justify-center">
            <div className="h-full border-l-2 border-dotted border-white/40"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 transform"></div>
          </div>

          {/* Mobile Separator (Horizontal) */}
          {/* Keeping it simple for mobile, standard grid gap */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-[#C41E22]" size={40} strokeWidth={1.5} />
                </div>
                <div className="font-black text-3xl sm:text-4xl text-black mb-1 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-black font-bold uppercase tracking-wide text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-3d gradient-border-hover bg-[var(--bg-card)] rounded-3xl p-8 clip-reveal-up stagger-${index + 5}`}
            >
              <div className="icon-container bg-gradient-to-br from-[#E62429] to-[#C41E22] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--text-primary)]">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Badges */}
        <div className="flex flex-wrap justify-center gap-4 clip-reveal-up stagger-6">
          <div className="flex items-center gap-2 gradient-border bg-[var(--bg-card)] px-4 py-2 rounded-full">
            <Clock className="text-[#E62429]" size={20} />
            <span className="text-sm font-medium text-[var(--text-secondary)]">Hızlı Kurulum</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
}
