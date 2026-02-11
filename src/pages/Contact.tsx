import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 bg-white pointer-events-none opacity-60"></div>

            {/* Main Content Split Layout */}
            <div className="relative z-10 flex-grow flex items-center justify-center py-10 px-4 md:px-10 mt-16">
                <div className="w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-black/5">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}
