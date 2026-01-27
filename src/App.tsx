import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  const applicationRef = useRef<HTMLDivElement>(null);

  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onApplyClick={scrollToApplication} />
      <Hero />
      <div ref={applicationRef}>
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
