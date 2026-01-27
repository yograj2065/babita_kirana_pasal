import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Shop Essentials</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">Daily Grocery Items</h3>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full border transition-all ${activeCategory === "All"
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all ${activeCategory === cat
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                className="bg-[var(--color-box)] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-gray-200">
                                        {product.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-dark mb-1">{product.name}</h4>
                                    <p className="text-xs text-gray-500 mb-3 bg-gray-100 inline-block px-2 py-1 rounded">{product.category}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        No products found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
