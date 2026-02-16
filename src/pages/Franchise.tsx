import { useRef } from 'react';
import FranchiseHero from '../components/franchise/FranchiseHero';
import ApplicationForm from '../components/franchise/ApplicationForm';

export default function Franchise() {
    const applicationRef = useRef<HTMLDivElement>(null);

    // We can keep the ref for potential scrolling if needed, but for now just rendering the components
    return (
        <>
            <FranchiseHero />
            <div ref={applicationRef} id="application-form">
                <ApplicationForm />
            </div>
        </>
    );
}
