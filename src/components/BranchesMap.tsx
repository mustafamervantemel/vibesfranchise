import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapPin, Navigation } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const branches = [
  { id: 1, name: 'Vibes Kadıköy', lat: 40.9886, lng: 29.0278, address: 'Kadıköy Merkez' },
  { id: 2, name: 'Vibes Beşiktaş', lat: 41.0422, lng: 29.0089, address: 'Beşiktaş Merkez' },
  { id: 3, name: 'Vibes Ankara', lat: 39.9334, lng: 32.8597, address: 'Kızılay' },
  { id: 4, name: 'Vibes İzmir', lat: 38.4237, lng: 27.1428, address: 'Alsancak' },
];

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function BranchesMap() {
  const { theme } = useTheme();

  // Different map tiles for light and dark mode
  const tileUrl = theme === 'dark'
    ? 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-l from-red-400/10 to-transparent rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 clip-reveal-up">
          <div className="inline-flex items-center gap-2 gradient-border bg-[var(--bg-card)] text-[#E62429] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Navigation size={16} />
            <span>Bizi Ziyaret Edin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            <span className="gradient-text">Şubelerimiz</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Türkiye'nin dört bir yanında büyüyen Vibes Sandwich ailesi
          </p>
        </div>

        {/* Map Container */}
        <div className="gradient-border card-hover-glow bg-[var(--bg-card)] rounded-3xl overflow-hidden clip-reveal-up stagger-2">
          <MapContainer
            center={[39.5, 32.8]}
            zoom={6}
            style={{ height: '450px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={tileUrl}
            />
            {branches.map((branch) => (
              <Marker key={branch.id} position={[branch.lat, branch.lng]} icon={customIcon}>
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-bold text-gray-900 text-lg">{branch.name}</h3>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {branches.map((branch, index) => (
            <div
              key={branch.id}
              className={`card-3d gradient-border-hover bg-[var(--bg-card)] rounded-2xl p-5 cursor-pointer clip-reveal-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-3">
                <div className="icon-container bg-gradient-to-br from-[#E62429] to-[#C41E22] p-3 rounded-xl shadow-md shadow-red-500/20">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">{branch.name}</h3>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1">{branch.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 clip-reveal-up stagger-6">
          <p className="text-[var(--text-tertiary)] mb-4">
            Yakınınızda bir şube mi arıyorsunuz?
          </p>
          <div className="inline-flex items-center gap-2 text-[#E62429] font-semibold hover:underline cursor-pointer group">
            <span>Tüm şubelerimizi görüntüleyin</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
