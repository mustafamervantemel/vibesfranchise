import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapPin } from 'lucide-react';

const branches = [
  { id: 1, name: 'Vibes Kadıköy', lat: 40.9886, lng: 29.0278 },
  { id: 2, name: 'Vibes Beşiktaş', lat: 41.0422, lng: 29.0089 },
  { id: 3, name: 'Vibes Ankara', lat: 39.9334, lng: 32.8597 },
  { id: 4, name: 'Vibes İzmir', lat: 38.4237, lng: 27.1428 },
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
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-[#E62429] mr-2" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Şubelerimiz
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Türkiye'nin dört bir yanında büyüyen Vibes Sandwich ailesi
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <MapContainer
            center={[39.5, 32.8]}
            zoom={6}
            style={{ height: '500px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {branches.map((branch) => (
              <Marker key={branch.id} position={[branch.lat, branch.lng]} icon={customIcon}>
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-bold text-gray-900">{branch.name}</h3>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-center">
                <MapPin className="text-[#E62429] mr-2" size={20} />
                <h3 className="font-semibold text-gray-900">{branch.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
