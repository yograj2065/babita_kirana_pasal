import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Preloader = () => {
    const [show, setShow] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true); // Start fading out
            setTimeout(() => setShow(false), 800); // Remove from DOM after fade animation
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-1000 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-center">
                <div className="relative mb-4">
                    <img
                        src={logo}
                        alt="Babita Kirana Pasal Logo"
                        className="w-48 h-48 md:w-64 md:h-64 object-contain animate-logo-appear"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl font-display text-primary-gold animate-text-slide-up">
                        Babita Kirana Pasal
                    </h1>
                    <div className="w-16 h-1 mt-2 bg-primary-green rounded-full animate-width-grow"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
