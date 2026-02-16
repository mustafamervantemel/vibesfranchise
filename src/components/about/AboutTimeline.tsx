import React from 'react';

export default function AboutTimeline() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                <div className="text-center mb-16">
                    <span className="text-[#e5242a] font-bold uppercase tracking-widest text-sm block mb-2 font-sans">Tarihçe</span>
                    <h2 className="text-4xl font-black font-serif">Yolculuğumuz</h2>
                </div>
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 top-48 bottom-24 w-0.5 border-l-2 border-dashed border-[#e5242a]/40 md:-ml-px"></div>
                <div className="space-y-12 relative z-10">
                    {/* Item 1 */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center">
                        {/* Dot */}
                        <div className="absolute left-[1.35rem] md:left-1/2 w-4 h-4 rounded-full bg-[#e5242a] border-4 border-white md:-ml-2 mt-1 md:mt-0 shadow-lg shadow-[#e5242a]/40"></div>
                        {/* Content */}
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                            <span className="text-[#e5242a] font-bold text-lg block mb-1">2018</span>
                            <h3 className="text-xl font-bold mb-2">İlk Kıvılcım</h3>
                            <p className="text-gray-600 text-sm">Eski bir yemek karavanı aldık, kırmızıya boyadık ve şehir merkezine parkettik. Öğlene kadar sıra sokağı dönüyordu.</p>
                        </div>
                        <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                    </div>
                    {/* Item 2 */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center">
                        {/* Dot */}
                        <div className="absolute left-[1.35rem] md:left-1/2 w-4 h-4 rounded-full bg-[#e5242a] border-4 border-white md:-ml-2 mt-1 md:mt-0 shadow-lg shadow-[#e5242a]/40"></div>
                        {/* Content */}
                        <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                        <div className="md:w-1/2 md:pl-12 pl-16">
                            <span className="text-[#e5242a] font-bold text-lg block mb-1">2020</span>
                            <h3 className="text-xl font-bold mb-2">İlk Mağaza</h3>
                            <p className="text-gray-600 text-sm">Karavan yetmemeye başladı. İyi yemek ve harika müzik için bir topluluk merkezi olarak tasarlanan ilk mağazamızı açtık.</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center">
                        {/* Dot */}
                        <div className="absolute left-[1.35rem] md:left-1/2 w-4 h-4 rounded-full bg-[#e5242a] border-4 border-white md:-ml-2 mt-1 md:mt-0 shadow-lg shadow-[#e5242a]/40"></div>
                        {/* Content */}
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                            <span className="text-[#e5242a] font-bold text-lg block mb-1 font-sans">2023</span>
                            <h3 className="text-xl font-bold mb-2 font-serif">Ulusal Çapta Büyüme</h3>
                            <p className="text-gray-600 text-sm font-sans">Vibes Sandwich 5 yeni şehre yayıldı. Ailemiz büyüyor, ancak tarifimiz tamamen aynı kalıyor.</p>
                        </div>
                        <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
