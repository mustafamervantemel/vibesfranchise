import { Sandwich, Users, ChefHat, Clock, ThumbsUp, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { value: 25840, suffix: '+', label: 'MUTLU MÜŞTERİ', icon: Users },
  { value: 25, suffix: '+', label: 'UZMAN ŞEF', icon: ChefHat },
  { value: 75, suffix: '+', label: 'ZENGİN MENÜ', icon: Sandwich },
  { value: 4.9, suffix: '', label: 'ZİYARETÇİ PUANLAMASI', icon: ThumbsUp },
];

const features = [
  {
    icon: Award,
    title: 'Kaliteli Ürünler',
    description: 'Taze malzemeler ve özel tariflerle hazırlanmış lezzetler',
  },
  {
    icon: Sandwich,
    title: 'Taze Lezzetler',
    description: 'Her gün taze hazırlanan eşsiz sandviçler',
  },
  {
    icon: ChefHat,
    title: 'Uzman Şefler',
    description: 'Alanında uzman şeflerimizle kaliteli hizmet',
  },
  {
    icon: Clock,
    title: '7/24 Destek',
    description: 'Açılıştan operasyona kadar her adımda yanınızdayız',
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
    <span>
      {count}{suffix}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== WHITE TOP SECTION ===== */}
      <div className="relative pt-36 sm:pt-44 lg:pt-52 pb-64 sm:pb-72 lg:pb-80 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1A1A] mb-4 tracking-tight">
            FARKLI OLAN
            <br />
            <span className="text-[#C41E22] drop-shadow-lg">LEZZET</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#666] mb-8 max-w-2xl mx-auto">
            Türkiye'nin en lezzetli franchise fırsatı ile
            <span className="font-bold text-[#C41E22]"> başarı hikayenizi </span>
            yazın.
          </p>
        </div>

        {/* Main Sandwich Image - Responsive: mobile vs desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[35%] z-30 pointer-events-none">
          <img
            src="/pc-san-2.png"
            alt="Vibes Sandwich"
            className="w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[520px] xl:w-[600px] max-w-none h-auto animate-bounce-subtle"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))'
            }}
          />
        </div>
      </div>

      {/* ===== WAVY DIVIDER - Red wave on white background ===== */}
      <div className="relative -mt-1 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-20 sm:h-28 lg:h-36"
          style={{ display: 'block' }}
        >
          <path
            d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1350,80 1440,60 L1440,120 L0,120 Z"
            fill="#C41E22"
          />
        </svg>
      </div>

      {/* ===== RED BOTTOM SECTION ===== */}
      <div className="relative bg-[#C41E22] pt-32 sm:pt-40 lg:pt-52 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          {/* Why Choose Us Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white text-[#C41E22] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              Neden Biz?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              LEZZETİN YOLCULUĞU,
              <br />
              <span className="text-white/90">FARKLI OLAN DENEYİM</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
              Yenilikçi vizyonuyla sektöre adım atan genç ve dinamik bir marka.
              Kaliteli malzemeler, özgün tarifler ve modern franchise modeliyle geleceğin lezzet markası olmaya hazırız.
            </p>
          </div>

          {/* Feature Cards - 4 columns like in the reference */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#C41E22]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-[#C41E22]" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#1A1A1A] uppercase tracking-wide">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-[#C41E22]" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-1 tracking-tight">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
