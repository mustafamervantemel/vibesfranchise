import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
    return (
        <div className="flex flex-col w-full font-sans bg-white text-black">
            <AboutHero />
            <AboutStory />
            <AboutValues />
            <AboutTimeline />
            <AboutCTA />
        </div>
    );
}
