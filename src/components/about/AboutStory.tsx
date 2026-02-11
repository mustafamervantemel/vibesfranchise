import React from 'react';

export default function AboutStory() {
    return (
        <section className="py-20 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Row 1: Image Left, Text Right */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-[#e5242a]/0 group-hover:bg-[#e5242a]/10 transition-colors duration-500 z-10"></div>
                            <img
                                alt="Taze malzemelerle hazırlanmış lezzetli sandviç yakın çekim"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCd728jwsro6XXcXIsLVRxo9G8YUtBDorTkCR-PrLyGHgWkWJEQxBDftbMLQrB4pF8YxqXx_LnxbSyN0WgH8lRAfhH3brPTJpIGRYniyPiOFzg45D-g1jsJC-yarEjxkVTfBrW2Bi2kUBWnD_0Ej2LRe4h45aBUhFY5lkTwlv_Mc_Q_bIfc31TpRf8Wlk9bCl-ZHIpJxE53udOM1jwDeK22LXhsr_glpI8BbXXbI2PAJX82aH8uIbis3U5RwVsRORkKd7Tz7uzVYiC"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-[#e5242a] font-bold tracking-wider uppercase text-sm">2018'den Beri</span>
                        <h2 className="text-4xl font-bold leading-tight text-black">Başlangıç Hikayemiz</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Her şey, sadece karın doyuran değil, ruha da iyi gelen bir sandviç yeme arzusuyla başladı. Sıradan, fabrikasyon öğle yemeklerinden sıkılan kurucularımız, bir ızgara ve bir hayalle küçük bir yemek karavanında yola çıktılar.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Hedef basitti: Kötü bir günü tersine çevirebilecek bir enerjiyle sunulan, yüksek kaliteli ve dürüst yemekler. Buna "Vibes" adını verdik çünkü tam olarak sunduğumuz şey buydu.
                        </p>
                    </div>
                </div>

                {/* Row 2: Text Left, Image Right */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-[#e5242a] font-bold tracking-wider uppercase text-sm">Felsefemiz</span>
                        <h2 className="text-4xl font-bold leading-tight text-black">Misyonumuz</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Hızlı yemeğin yine de gerçek yemek olması gerektiğine inanıyoruz. Bu, telaffuz edebildiğiniz malzemeler, güneş doğmadan pişirilen ekmekler ve fabrikada değil mutfaklarımızda sıfırdan yapılan soslar demektir.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ancak yemekten öte, misyonumuz bağ kurmak. Her sandviç, bir gülümseme, bir kahkaha ve samimi bir insan bağı kurmak için bir fırsattır.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-[#e5242a]/0 group-hover:bg-[#e5242a]/10 transition-colors duration-500 z-10"></div>
                            <img
                                alt="Şef profesyonel mutfakta sandviçe yeşillik eklerken"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzs1YT8EoefeAl1d07U8BxoCChreSgaG-hDE1BROqzuMKPdEaEs4-JBQufYRkZViZgmYpP-2skpmkO4fnGELP6E2FhDgR6XYJ6azwAdODvBAj7Elvs2xFYZDKaZBgIS1McnDFRHW38WlherWpsoNv-ccDO5tepiH-Sx9ZcQ_YpVg5mmT5Lxc6HyOOC_9RFXNJ-TmRC9M7QDTLXspi4FhlEM4ZXNIo54ZXWxKSE7uKP0nSk6T3WM0sxOl_nUZeU6M9zB4CNsW6R1ZR"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
