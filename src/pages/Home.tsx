import HomeHero from '../components/home/HomeHero';
import HomePhilosophy from '../components/home/HomePhilosophy';
import HomeStats from '../components/home/HomeStats';
import HomeMenuShowcase from '../components/home/HomeMenuShowcase';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeGallery from '../components/home/HomeGallery';
import HomeSocialProof from '../components/home/HomeSocialProof';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-white relative">
            <HomeHero />
            <HomePhilosophy />
            <HomeStats />
            <HomeMenuShowcase />
            <HomeFeatures />
            <HomeGallery />
            <HomeCTA />
        </div>
    );
}
