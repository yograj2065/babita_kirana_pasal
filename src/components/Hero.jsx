import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                >
                    Your Trusted Local <br className="hidden md:block" />
                    <span className="text-secondary">Kirana Shop</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl mb-10 font-light text-gray-200"
                >
                    Baradashi-7, Jhapa • Quality Daily Essentials • Affordable Prices
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link
                        to="products"
                        smooth={true}
                        offset={-70}
                        className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105 cursor-pointer shadow-lg"
                    >
                        See Our Items
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-70}
                        className="px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 cursor-pointer shadow-lg"
                    >
                        Visit Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
