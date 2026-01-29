import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        // Construct WhatsApp link
        const whatsappMessage = `Hello! 👋\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
        const whatsappLink = `https://wa.me/9779807926965?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappLink, '_blank');

        alert("Opening WhatsApp to send your message...");
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Get In Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Visit Us Today</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-light p-8 rounded-2xl shadow-sm">
                            <h4 className="text-xl font-bold text-dark mb-6">Contact Information</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary text-white p-3 rounded-full">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark">Address</p>
                                        <p className="text-gray-600">Baradashi-7, Jhapa, Nepal</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary text-white p-3 rounded-full">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark">Phone</p>
                                        <a href="tel:9807926965" className="text-gray-600 hover:text-primary">9807926965</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary text-white p-3 rounded-full">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dark">Social Media</p>
                                        <div className="flex gap-4 mt-1">
                                            <a
                                                href="https://wa.me/9779807926965"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-green-500 flex items-center gap-1"
                                            >
                                                <FaWhatsapp /> WhatsApp
                                            </a>
                                            <span className="text-gray-300">|</span>
                                            <a
                                                href="https://www.facebook.com/share/18QRrcu47p/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-blue-600 flex items-center gap-1"
                                            >
                                                <FaFacebook /> Facebook
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Google Map - Baradashi 7 area */}
                        <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-md">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.647559132573!2d87.9620!3d26.5000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b15b3a4a085b%3A0x88c4b12c58971f15!2sBaradashi%2C%20Nepal!5e0!3m2!1sen!2snp!4v1716888000000!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <h4 className="text-2xl font-bold text-dark mb-6">Send us a Message</h4>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input name="phone" type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Your Number" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Inquiry about products..." required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-green-800 transition transform hover:scale-[1.02] shadow-lg">
                                Send Message
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                This will open WhatsApp to send the message.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
