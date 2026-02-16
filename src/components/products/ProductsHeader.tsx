import React from 'react';

export default function ProductsHeader() {
    return (
        <header className="flex flex-col gap-4 text-center items-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-serif italic">
                İyi Hisset, <span className="text-primary">Harika Tat</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed font-sans">
                Taze malzemeler, cesur tatlar ve her ısırıkta yüksek enerji. Favori lezzetini aşağıda bul.
            </p>
        </header>
    );
}
