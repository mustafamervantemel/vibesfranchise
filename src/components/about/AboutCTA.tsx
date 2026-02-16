import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
    return (
        <section className="py-20 bg-white text-black">
            <div className="container mx-auto px-6">
                <div className="bg-[#e5242a] rounded-2xl overflow-hidden relative shadow-2xl shadow-red-900/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-serif">Acıktın mı?</h2>
                            <p className="text-white/90 text-lg font-sans">Harekete katıl ve herkesin konuştuğu lezzeti tat.</p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link to="/products" className="inline-flex items-center justify-center bg-white text-[#e5242a] hover:bg-gray-100 text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl font-sans">
                                Sipariş Ver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
