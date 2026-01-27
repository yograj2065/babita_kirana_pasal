import { FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary text-white pt-10 pb-6 relative">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 font-display">Babita Kirana Pasal</h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">
                        Your trusted local grocery shop in Baradashi-7, Jhapa. Providing fresh groceries, daily essentials, and quality products for over 2 years.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/share/18QRrcu47p/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="https://wa.me/9779807926965"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"
                        >
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="home" smooth={true} className="cursor-pointer hover:text-secondary transition-colors">Home</Link></li>
                        <li><Link to="why-choose-us" smooth={true} className="cursor-pointer hover:text-secondary transition-colors">Why Choose Us</Link></li>
                        <li><Link to="products" smooth={true} className="cursor-pointer hover:text-secondary transition-colors">Products</Link></li>
                        <li><Link to="about" smooth={true} className="cursor-pointer hover:text-secondary transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm">
                            <FaMapMarkerAlt className="text-secondary" />
                            <span>Baradashi-7, Jhapa, Nepal</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm">
                            <FaPhoneAlt className="text-secondary" />
                            <a href="tel:9807926965" className="hover:text-secondary">9807926965</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright & Scroll Top */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-300 relative">
                <p>&copy; {new Date().getFullYear()} Babita Kirana Pasal. All rights reserved.</p>

                <button
                    onClick={scrollToTop}
                    className="absolute right-4 top-[-20px] md:top-4 bg-secondary p-3 rounded-full shadow-lg hover:bg-white hover:text-primary transition-all"
                >
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
