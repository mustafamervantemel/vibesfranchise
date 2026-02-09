import { useRef } from 'react';
import Hero from '../components/Hero';
import ApplicationForm from '../components/ApplicationForm';

export default function Franchise() {
    const applicationRef = useRef<HTMLDivElement>(null);

    // We can keep the ref for potential scrolling if needed, but for now just rendering the components
    return (
        <>
            <Hero />
            <div ref={applicationRef} id="application-form">
                <ApplicationForm />
            </div>
        </>
    );
}
