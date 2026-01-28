import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Service', to: 'why-choose-us' },
        { name: 'Products', to: 'products' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-1' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center text-white">
                {/* Logo */}
                <div className="flex items-center cursor-pointer group">
                    <Link to="home" smooth={true} className="flex items-center gap-2">
                        <img src={logo} alt="Babita Kirana Pasal" className={`transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-14 w-14'} object-contain`} />
                        <div className="flex flex-col">
                            <h1 className={`font-bold tracking-wider font-display transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>Babita Kirana Pasal</h1>
                            {!scrolled && <span className="text-[10px] font-light text-accent ml-1 opacity-80 uppercase tracking-widest">Baradashi-7, Jhapa</span>}
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer font-medium hover:text-secondary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/9779807926965"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors text-white font-semibold"
                    >
                        <FaPhoneAlt size={14} /> <span>Call Now</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl md:hidden flex flex-col p-6 z-50"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold text-primary">Menu</span>
                            <button onClick={() => setIsOpen(false)} className="text-dark">
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-dark hover:text-primary transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/9779807926965"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg mt-4 hover:bg-green-800 transition-colors"
                            >
                                <FaPhoneAlt size={16} /> <span>Call Now</span>
                            </a>
                        </nav>
                        <div className="mt-auto text-sm text-gray-500 text-center">
                            <p className="flex items-center justify-center gap-1">
                                <FaMapMarkerAlt /> Baradashi-7, Jhapa
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
