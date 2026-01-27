import { motion } from 'framer-motion';
import { FaAward, FaTags, FaSmile, FaStore } from 'react-icons/fa';

const features = [
    {
        icon: <FaAward size={40} />,
        title: "Quality Products",
        description: "We stock only the best brands and fresh packaged goods for your family."
    },
    {
        icon: <FaTags size={40} />,
        title: "Affordable Prices",
        description: "Daily essentials at competitive market rates, saving you money every day."
    },
    {
        icon: <FaStore size={40} />,
        title: "Wide Variety",
        description: "From rice and daal to snacks and cold drinks, find everything under one roof."
    },
    {
        icon: <FaSmile size={40} />,
        title: "Excellent Service",
        description: "Friendly, helpful service with a smile. We value our community relationships."
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-20 bg-primary/5 text-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Our Promise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-[var(--color-box)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-dark">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
