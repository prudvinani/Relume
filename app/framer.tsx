'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const images = {
  first: [
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1682687220063-4742bd7c7ae3?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=500&auto=format&fit=crop&q=60',
  ],
  third: [
    'https://images.unsplash.com/photo-1682687221038-404670f09439?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?w=500&auto=format&fit=crop&q=60',
  ],
};

export default function HoverGallery() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex justify-between items-stretch gap-8 min-h-[600px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* First section - Images that move right */}
      <motion.div
        className="flex-1 grid grid-cols-3 gap-4"
        animate={isHovered ? { x: 20 } : { x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {images.first.map((src, index) => (
          <div
            key={index}
            className="relative h-full overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Middle section - Information */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-center flex flex-col justify-center mx-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Interactive Gallery
        </h2>
        <p className="text-lg text-gray-600">
          Hover over this section to see the dynamic movement of images. The left
          section slides right while the right section slides left, creating an
          engaging visual experience.
        </p>
      </div>

      {/* Third section - Images that move left */}
      <motion.div
        className="flex-1 grid grid-cols-3 gap-4"
        animate={isHovered ? { x: -20 } : { x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {images.third.map((src, index) => (
          <div
            key={index}
            className="relative h-full overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 4}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}