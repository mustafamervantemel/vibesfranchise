import { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function AppContent() {
  const applicationRef = useRef<HTMLDivElement>(null);

  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Header onApplyClick={scrollToApplication} />
      <Hero />
      <div ref={applicationRef}>
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
