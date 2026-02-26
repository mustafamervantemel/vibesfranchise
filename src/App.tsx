import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Franchise from './pages/Franchise';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Franchise />} />
            <Route path="*" element={<Franchise />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
