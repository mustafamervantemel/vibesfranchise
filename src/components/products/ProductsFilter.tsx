import React from 'react';

type Category = {
    id: string;
    name: string;
};

interface ProductsFilterProps {
    categories: Category[];
    activeCategory: string;
    setActiveCategory: (id: string) => void;
}

export default function ProductsFilter({ categories, activeCategory, setActiveCategory }: ProductsFilterProps) {
    return (
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
            <div className="flex items-center justify-start md:justify-center gap-3 min-w-max px-1">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`h-10 px-6 rounded-full text-sm font-bold transition-all duration-300 font-sans ${activeCategory === cat.id
                            ? 'bg-primary text-white shadow-md shadow-red-500/20 transform scale-105'
                            : 'bg-surface-light hover:bg-gray-200 text-gray-700'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
