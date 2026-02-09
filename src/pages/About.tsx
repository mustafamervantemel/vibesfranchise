import { Leaf, Wheat, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="flex flex-col w-full font-sans bg-white text-black">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3xYBUSqvErHXrsxeV2D-2soTqklf-gYgBJ8dhBfH74SjiNhhYx4F6QJrLH3tg5a8wJGMaUkglS2fKQbfsPTg8rF3nTDaa14SU_QY6ykYFmQKTqKB9JkUCE015HdPOExPzr2gdVach5WAoo3vp-DtQUmHsD-6BbvFU_UEgiS3msKexzWTm467gjyCYjWbeqo1Uy5ejGje2rWaqX334SCgc70NKodVNc9b13-sPjycxupu_hT1sdjV1kxQ8t8qk351fiKWZvUcRKU6q')" }}
                >
                </div>
                {/* Red Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#e5242a]/80 to-black/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 z-10 bg-black/20"></div> {/* Extra dim for text legibility */}

                {/* Hero Content */}
                <div className="relative z-20 container mx-auto px-6 text-center">
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 drop-shadow-md">
                        İyi Hisset,<br />Her Isırıkta
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                        Biz sadece bir sandviç dükkanı değiliz; biz bir hareketiz. Öğle yemeğinizi günün en güzel anı yapan ekiple tanışın.
                    </p>
                </div>
            </section>

            {/* Zig-Zag Story Section */}
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

            {/* Values Section with Icons */}
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Vibes Farkı</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Müdavimlerimizin neden vazgeçemediğinin sırrı.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-50 border border-transparent hover:border-[#e5242a]/20 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                            <div className="w-20 h-20 rounded-full bg-[#e5242a]/10 flex items-center justify-center text-[#e5242a] mb-6">
                                <Leaf size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Taze Malzemeler</h3>
                            <p className="text-gray-600 leading-relaxed">Mümkün olduğunca yerel üreticilerden temin edilen ürünler. Taze değilse, mutfağımıza giremez.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-50 border border-transparent hover:border-[#e5242a]/20 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                            <div className="w-20 h-20 rounded-full bg-[#e5242a]/10 flex items-center justify-center text-[#e5242a] mb-6">
                                <Wheat size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">El Yapımı Ekmek</h3>
                            <p className="text-gray-600 leading-relaxed">Dışı çıtır, içi yumuşacık. İmza ekşi mayalı ekmeğimiz her sabah 04:00'te taze pişirilir.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-50 border border-transparent hover:border-[#e5242a]/20 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                            <div className="w-20 h-20 rounded-full bg-[#e5242a]/10 flex items-center justify-center text-[#e5242a] mb-6">
                                <Rocket size={40} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Hızlı Teslimat</h3>
                            <p className="text-gray-600 leading-relaxed">Açlık beklemez. Siparişinizin sıcak, taze ve vibe kaybolmadan önce ulaşmasını sağlıyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white text-black overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative">
                    <div className="text-center mb-16">
                        <span className="text-[#e5242a] font-bold uppercase tracking-widest text-sm block mb-2">Tarihçe</span>
                        <h2 className="text-4xl font-black">Yolculuğumuz</h2>
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
                                <span className="text-[#e5242a] font-bold text-lg block mb-1">2023</span>
                                <h3 className="text-xl font-bold mb-2">Ulusal Çapta Büyüme</h3>
                                <p className="text-gray-600 text-sm">Vibes Sandwich 5 yeni şehre yayıldı. Ailemiz büyüyor, ancak tarifimiz tamamen aynı kalıyor.</p>
                            </div>
                            <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="bg-[#e5242a] rounded-2xl overflow-hidden relative shadow-2xl shadow-red-900/20">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
                            <div className="max-w-xl text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Acıktın mı?</h2>
                                <p className="text-white/90 text-lg">Harekete katıl ve herkesin konuştuğu lezzeti tat.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link to="/products" className="inline-flex items-center justify-center bg-white text-[#e5242a] hover:bg-gray-100 text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
                                    Sipariş Ver
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
