interface HeaderProps {
  onApplyClick: () => void;
}

export default function Header({ onApplyClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-[#E62429]" style={{ fontFamily: 'cursive' }}>
            Vibes
          </div>
          <div className="text-xl font-bold text-white bg-[#E62429] px-2 py-1 rounded">
            SANDWICH
          </div>
        </div>
        <button
          onClick={onApplyClick}
          className="bg-[#E62429] hover:bg-[#C41E22] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Franchise Başvuru
        </button>
      </div>
    </header>
  );
}
