import { motion } from 'framer-motion';
import shopOwnerImg from '../assets/shop-owner.jpg';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger when 20% visible
    });

    return (
        <section id="about" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div ref={ref} className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <img
                                src={shopOwnerImg}
                                alt="Babita Kirana Shop"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg">Serving since 2022</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">About Us</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Empowering Our Community with Quality Freshness
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Babita Kirana Pasal has been a cornerstone of the Baradashi-7 community for over 2 years. We believe in providing our neighbors with the freshest produce, daily essentials, and household goods at fair prices.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Why shop with us?
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {['Fresh Veg & Fruits', 'Quality Grains', 'Hygiene First', 'Community Focused'].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 font-medium text-dark">
                                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
