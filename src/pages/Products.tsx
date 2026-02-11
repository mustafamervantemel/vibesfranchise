import { useState } from 'react';
import ProductsHeader from '../components/products/ProductsHeader';
import ProductsFilter from '../components/products/ProductsFilter';
import ProductGrid from '../components/products/ProductGrid';
import { products, categories } from '../data/products';

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="bg-background-light dark:bg-background-light text-[#181111] dark:text-[#181111] font-display min-h-screen flex flex-col overflow-x-hidden pt-24">
            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 lg:px-10 py-12 flex flex-col gap-10">
                <ProductsHeader />

                {/* Filters */}
                <ProductsFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                {/* Product Grid */}
                <ProductGrid products={filteredProducts} />
            </main>
        </div>
    );
}
