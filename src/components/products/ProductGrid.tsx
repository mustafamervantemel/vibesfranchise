import React from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    tag: string;
    badge?: string;
};

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
                <div key={product.id} className="group relative flex flex-col bg-surface-light rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-levitate-hover shadow-levitate border border-transparent hover:border-primary/10">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white flex items-center justify-center">
                        <img
                            alt={product.name}
                            loading="lazy"
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
    );
}
