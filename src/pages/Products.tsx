
import { useState } from 'react';

const categories = [
    { id: 'all', name: 'Tüm Menü' },
    { id: 'cold', name: 'Soğuk Sandviçler' },
    { id: 'hot', name: 'Sıcak Sandviçler' },
    { id: 'drinks', name: 'İçecekler' },
    { id: 'desserts', name: 'Tatlılar' },
];

const products = [
    {
        id: 1,
        name: 'The Vibe Check',
        description: 'Hindi göğsü, taze avokado, filizler, chipotle mayonez, ekşi maya ekkmek.',
        category: 'cold',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCXsJpxXTrG1VPM0NcsVmZRCw3TQXmxBDsck_okSZNQ743GUsYaJyhRmInPqjMrtnkEcxHaHOEih76-lrUaC1_hN5k4Su7LDKwazjd6yCPjb_cS81nn20Em32Fw7x0vl5BaSc2AgpFka_DWgOyX43U94IpZBsGvWYmgLBRlVZsWbztKArYkcJtMserwdv_wytJgBzyyZoOwrlftdDWSYxjBMLdRSaQVUv34qYzxakcb1wLO916lgN67zL4BO7T2uyzXlxwSF3rnQJN',
        tag: 'Soğuk Sandviç'
    },
    {
        id: 2,
        name: 'The Heater',
        description: 'Baharatlı salam, sucuk, erimiş biberli peynir, jalapeño, acı hardal.',
        category: 'hot',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDeNrFOxCVhNK7py4t0IJdudtcosVogB32TTBZErzE4sTgN5QmsHPCIGoRDgGQlcQK3HOq-KNIX1SSN0niHMyoBF5L7KipLzUijnTifuno0Mkbg0Bxm4NiZPQt9JOXNj496RGHVregfs1pkxfyCsuVQXgCRgk3p-JuvcH3N8hi0Xz7peDeuqBN9Rjc2f2iC8AF95qWUmNsGmHfHwiNdUFAkoeuL28NaN3SaxeTzhAW0EMnM_VSV11IDJ6xWpvjGTtrHMGkfTaICr03',
        tag: 'Sıcak Sandviç'
    },
    {
        id: 3,
        name: 'Classic Club',
        description: 'Füme jambon, çıtır bacon, cheddar, marul, domates, otlu mayonez.',
        category: 'cold',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNgZzfP18MtkxVsAE5m0oc7GZ4kav17-T8FKiD0ZwiuSl-ArlXPSUuxtwqFXn1ln06uGQMLU5xJlH-DHdjN-5Qdk0YFkRPhkbHvVzwW5cKsHZPJ2Unpozy6WKLTkUUNQ-LDvVIz-xsn8UR3y4v557xtluTzF0PlQy6PAe1apXKzmbUg0xlr3ZQhx04Ercw81_Ebn0EVWrE38uS6LcnSvOh4zSSqrhj2nDcz5dA6W09QK_kPEyq5BpH5gSXt2Kj_dozh8TLWoViWu8i',
        tag: 'Soğuk Sandviç'
    },
    {
        id: 4,
        name: 'Veggie Bliss',
        description: 'Közlenmiş kırmızı biber, salatalık, humus, beyaz peynir, ıspanak.',
        category: 'cold',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdUAzjjpnD8tQgDZFgc7qsE8kQnKgIztBKPbdgwnVqtM6JdqFQLlBXfqPIx9QSWdjcIZ1uwe4XSZQURtHjB979EzMC7UyXnMt4I-2J71jARVSLa9Xe0IMWb-76toOpv-2Yi2RalTXmPrZR8nE4dnH7HhLbIZuRrWdYUs2PyUaoIP26xiADtcSCIx3pzKChoCIirFC8ztNVhq6KdqDwfRHvGuhyvR9clLgViNDRK2fuYirNUC3XgNh_vxvxQmQ_HUB5e1PEe_xzjqXk',
        tag: 'Vejetaryen'
    },
    {
        id: 5,
        name: 'NYC Pastrami',
        description: 'Sıcak pastrami, isviçre peyniri, lahana turşusu, rus sosu, çavdar ekmeği.',
        category: 'hot',
        tag: 'Sıcak Sandviç',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwbB6vcId1OKQHod7eSqcw4kWOSsO0c82oITSAea0K8Jf8-tHcsv09zi1X5GXyDK-wOPciF4MrNwj_RojNWAJUSU2nY4IGy7VbFDALPGLsiQ5tJjIiTy8b0iJmLHj0Kfe1RqxsZnQk8Y-l74UCP0pYEc-IbsG85-qqrn_CKhkADnj6W3gf2n6g9x21H3leNDIQJeKfPhjYMzktZDJNHIQKfVmtQZ37Xa9kPXFaHGZzIcyY0xOjpG5GElUBG3-gF8WlW_pz1L-h94U0',
        badge: 'Çok Satan'
    },
    {
        id: 6,
        name: 'Meatball Marinara',
        description: 'İtalyan köfte, marinara sos, erimiş mozzarella, parmesan, baget ekmek.',
        category: 'hot',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMhYFamW8Mq10gHnjjEr3pCYTnVFGzNEYFokXrrhtvLoiqY6OBa2pQdLSEFXRTLt-WGzQ-fxwX7AzEWHVEZDhPZSbaX0s_BFY5ZxXQ2mZBy2MmD8eEqCAy8jc21Q_eQe4FhAniHThIaRhODnAn3Xsj8sxPqiPPquuA6y6N1E_bSI8ecgAS3J62w-AfHXRAgXJfjfWIIXeEOFv5W8kKG7Pim6oIidrZNtfNBt0vkwaqHb_ojNujPBdC78d_srl2vWsSB-zVT60tR_Yo',
        tag: 'Sıcak Sandviç'
    }
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="bg-background-light dark:bg-background-light text-[#181111] dark:text-[#181111] font-display min-h-screen flex flex-col overflow-x-hidden pt-24">
            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 lg:px-10 py-12 flex flex-col gap-10">
                {/* Header Section */}
                <header className="flex flex-col gap-4 text-center items-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                        İyi Hisset, <span className="text-primary">Harika Tat</span>
                    </h1>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                        Taze malzemeler, cesur tatlar ve her ısırıkta yüksek enerji. Favori lezzetini aşağıda bul.
                    </p>
                </header>

                {/* Filters */}
                <div className="w-full overflow-x-auto no-scrollbar pb-2">
                    <div className="flex items-center justify-start md:justify-center gap-3 min-w-max px-1">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`h-10 px-6 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-primary text-white shadow-md shadow-red-500/20 transform scale-105'
                                    : 'bg-surface-light hover:bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-surface-light rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-levitate-hover shadow-levitate border border-transparent hover:border-primary/10">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white flex items-center justify-center">
                                <img
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    src={product.image}
                                />
                                {product.badge && (
                                    <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col flex-1 gap-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-[#181111] group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                    {product.tag}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
