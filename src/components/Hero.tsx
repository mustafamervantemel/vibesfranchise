import { Sandwich, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#FFF5F5] to-[#FFE5E5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Vibes Sandwich Ailesine <span className="text-[#E62429]">Katılın!</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Karlı bir iş fırsatı sizi bekliyor. Türkiye'nin en dinamik sandwich franchise'ı ile başarı hikayenizi yazın.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#E62429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sandwich className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Kaliteli Ürünler</h3>
            <p className="text-gray-600">Taze malzemeler ve özel tariflerle hazırlanmış lezzetler</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#E62429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Yüksek Karlılık</h3>
            <p className="text-gray-600">Kanıtlanmış iş modeli ve güçlü marka bilinirliği</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-[#E62429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Tam Destek</h3>
            <p className="text-gray-600">Açılıştan operasyona kadar her adımda yanınızdayız</p>
          </div>
        </div>
      </div>
    </section>
  );
}
