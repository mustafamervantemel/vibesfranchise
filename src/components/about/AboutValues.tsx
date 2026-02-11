import React from 'react';
import { Leaf, Wheat, Rocket } from 'lucide-react';

export default function AboutValues() {
    return (
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
    );
}
