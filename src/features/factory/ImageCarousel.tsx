// ImageCarousel.tsx

'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Factory image ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out',
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};
