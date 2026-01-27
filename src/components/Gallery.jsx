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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(img)}
                            className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md"
                        >
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
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
