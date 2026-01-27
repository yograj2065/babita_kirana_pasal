import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.png';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Gallery</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Inside Our Shop</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(img)}
                            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 bg-white"
                        >
                            {/* Main Image */}
                            <motion.img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-white/90 text-primary p-4 rounded-full shadow-xl"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white hover:text-secondary"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FaTimes size={30} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
