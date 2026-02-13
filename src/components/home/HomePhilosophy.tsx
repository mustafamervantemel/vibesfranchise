import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import anasandImg from '../../media/anasand.jpeg';

export default function HomePhilosophy() {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    const philosophyItems = [
        {
            title: 'Özel Ekşi Mayalı Ekmek',
            description: 'Kendi fırınımızda, geleneksel yöntemlerle hazırlanan, dışı çıtır içi yumuşacık ekşi mayalı ekmeklerimiz.',
        },
        {
            title: 'Taze ve Doğal Malzemeler',
            description: 'Her sabah yerel üreticilerden temin edilen en taze sebzeler ve kaliteli şarküteri ürünleri.',
        },
        {
            title: 'İmza Soslarımız',
            description: 'Şeflerimizin özel reçeteleriyle hazırlanan, sandviçlerimize karakter katan ev yapımı soslar.',
        }
    ];

    return (
        <section id="philosophy" className="relative pt-16 pb-32 px-6 md:px-12 bg-[#FFF8F0] overflow-hidden">

            {/* Section header */}
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight text-[#1A1A1A]">
                    Bizi Farklı Kılan
                    <br />
                    <span className="font-accent italic text-[#C41E22]">Ne?</span>
                </h2>
                <p className="text-gray-500 font-light text-lg md:text-xl max-w-2xl mx-auto mt-6 font-sans">
                    Taze malzemeler, özenli el işçiliği ve tutku ile hazırlanan her sandviç, damaklarda unutulmaz bir iz bırakır.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className="md:col-span-7 relative z-10">
                    <div className="space-y-6 text-lg md:text-xl font-light text-[#1A1A1A]/80 max-w-xl font-sans">
                        <p>Bizim için sandviç sadece bir yemek değil, bir sanat eseri. En taze malzemeler, özel soslar ve yılların ustalığıyla hazırlanan her tarif, damaklarda unutulmaz bir iz bırakmak için tasarlandı.</p>
                    </div>

                    {/* Interactive Ingredient List */}
                    <div className="mt-12 space-y-4 font-serif">
                        {philosophyItems.map((item, i) => (
                            <div
                                key={i}
                                className="group relative border-b border-[#C41E22]/15 py-4 cursor-pointer"
                                onClick={() => toggleItem(i)}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C41E22] text-white text-sm font-bold font-sans">{i + 1}</span>
                                        <span className="text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#C41E22]">{item.title}</span>
                                    </div>
                                    {openItem === i ? (
                                        <MinusCircle className="text-[#C41E22] transition-transform duration-300 flex-shrink-0" />
                                    ) : (
                                        <PlusCircle className="group-hover:rotate-90 transition-transform duration-300 text-[#1A1A1A] group-hover:text-[#C41E22] flex-shrink-0" />
                                    )}
                                </div>

                                {/* Dropdown Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === i ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="font-sans text-gray-600 font-light text-lg pl-12">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual */}
                <div className="md:col-span-5 h-full relative flex justify-center">
                    <div className="relative w-full aspect-[4/5] max-w-md">
                        <div className="absolute inset-0 bg-[#C41E22] rounded-2xl rotate-3 opacity-20 blur-sm"></div>
                        <img
                            src={anasandImg}
                            loading="lazy"
                            className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                            alt="Vibes Sandwich el yapımı gourmet sandviç felsefesi"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
