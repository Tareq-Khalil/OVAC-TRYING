import React, { useState, useEffect } from "react";
import HeadWord from "./ui/HeadWord";
import Underline from "./ui/Underline";
import { motion, AnimatePresence } from "framer-motion";
import DB from "../assets/images/Db.json";

const GalleryHero = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loadedItems, setLoadedItems] = useState(new Set());

  // Process gallery data and check for valid items
  useEffect(() => {
    const processGalleryData = () => {
      const items = DB.images.gallery.map((item, index) => ({
        id: index + 1,
        src: item.src,
        alt: item.alt,
        name: item.name,
        isVideo: item.src.toLowerCase().endsWith('.mp4'),
        originalSrc: item.src
      }));
      setGalleryItems(items);
    };

    processGalleryData();
  }, []);

  // Handle successful loading
  const handleLoad = (id) => {
    setLoadedItems(prev => new Set([...prev, id]));
  };

  // Handle loading errors
  const handleError = (id, isVideo) => {
    console.log(`Failed to load ${isVideo ? 'video' : 'image'}: ${galleryItems.find(item => item.id === id)?.src}`);
    
    // Update the item with a placeholder
    setGalleryItems(prev => 
      prev.map(item => 
        item.id === id 
          ? {
              ...item, 
              src: `https://placehold.co/400x300/333/fff?text=${isVideo ? 'Video+Not+Found' : 'Image+Not+Found'}`,
              isVideo: false, // Convert videos to images if they fail
              hasError: true
            }
          : item
      )
    );
  };

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="flex justify-center flex-col items-center mb-12">
        <HeadWord HeadWord="Our Gallery" />
        <Underline />
      </div>
      <p className="mx-auto mt-4 mb-12 max-w-2xl text-gray-400">
        A collection of our finest work. Click on any image or video to view it in full screen.
      </p>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-800"
            onClick={() => openModal(item)}
            layoutId={`card-${item.id}`}
            whileHover={{ y: -5 }}
          >
            {item.isVideo && !item.hasError ? (
              <video
                src={item.src}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                muted
                loop
                playsInline
                onLoadedData={() => handleLoad(item.id)}
                onError={() => handleError(item.id, true)}
                onCanPlay={(e) => {
                  // Try to play the video on hover
                  e.target.play().catch(() => {
                    // If autoplay fails, that's okay
                  });
                }}
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                onLoad={() => handleLoad(item.id)}
                onError={() => handleError(item.id, false)}
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-center">
                <p className="font-bold text-white drop-shadow-lg">
                  {item.isVideo && !item.hasError ? '▶️ Play Video' : '🖼️ View Image'}
                </p>
                {item.hasError && (
                  <p className="text-xs text-red-300 mt-1">Failed to load</p>
                )}
              </div>
            </div>

            {/* Loading indicator */}
            {!loadedItems.has(item.id) && !item.hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            )}

            {/* Video indicator */}
            {item.isVideo && !item.hasError && (
              <div className="absolute top-2 right-2 bg-black/50 rounded px-2 py-1">
                <span className="text-white text-xs">🎬 VIDEO</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-full max-h-full">
              {selectedImage.isVideo && !selectedImage.hasError ? (
                <motion.video
                  layoutId={`card-${selectedImage.id}`}
                  src={selectedImage.originalSrc || selectedImage.src}
                  className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  controls
                  autoPlay
                  loop
                  onError={() => {
                    console.log(`Modal video failed to load: ${selectedImage.src}`);
                  }}
                />
              ) : (
                <motion.img
                  layoutId={`card-${selectedImage.id}`}
                  src={selectedImage.originalSrc || selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  onError={() => {
                    console.log(`Modal image failed to load: ${selectedImage.src}`);
                  }}
                />
              )}
              
              {/* Close button */}
              <motion.button
                className="absolute -top-12 right-0 text-4xl text-white hover:text-red-400 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={closeModal}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                ×
              </motion.button>

              {/* Media info */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-lg font-semibold">{selectedImage.name}</p>
                <p className="text-gray-300 text-sm">
                  {selectedImage.isVideo && !selectedImage.hasError ? 'Video' : 'Image'} {selectedImage.id} of {galleryItems.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery stats */}
      <div className="mt-8 text-gray-400 text-sm">
        <p>
          Showing {galleryItems.length} items • 
          {' '}{galleryItems.filter(item => item.isVideo && !item.hasError).length} videos • 
          {' '}{galleryItems.filter(item => !item.isVideo || item.hasError).length} images
        </p>
      </div>
    </div>
  );
};

export default GalleryHero;