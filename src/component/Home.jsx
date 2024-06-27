import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    const images = [
        'https://www.apple.com/v/macbook-air/s/images/specs/13-inch/mba_13_specs_hero__f16wpgipyuem_large.jpg',
        'https://www.apple.com/v/macbook-air/s/images/specs/13-inch/mba_13_specs_hero__f16wpgipyuem_large.jpg',
        'https://www.apple.com/v/macbook-air/s/images/specs/13-inch/mba_13_specs_hero__f16wpgipyuem_large.jpg',
        'https://www.apple.com/v/macbook-air/s/images/specs/13-inch/mba_13_specs_hero__f16wpgipyuem_large.jpg',
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to EKomm
            </motion.h1>

            <motion.p
                className="text-lg text-gray-700 mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Discover the best products at unbeatable prices.
            </motion.p>

            {/* full size images
            <div className="relative h-screen overflow-hidden ">
                Image Carousel
                <div className="absolute inset-0 flex items-center justify-center bg-slate-500">
                    <img
                        src={images[0]}
                        alt="Carousel Image"
                        className="object-cover h-full w-full"
                    />
                </div>

                Navigation Buttons
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
                    >
                        Prev
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center">
                    <button
                        onClick={handleNext}
                        className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
                    >
                        Next
                    </button>
                </div>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={img} alt={`Product ${index + 1}`} className="w-full h-60 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Product {index + 1}</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;
