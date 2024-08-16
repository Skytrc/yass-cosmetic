import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { products } from '@/config/products';

export const ProductShowcase: React.FC = () => {
  const t = useTranslations('ProductShowcase');

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#00B0A5]">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={product.imageUrl}
                alt={t(`products.${product.id}.name`)}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-center text-xl font-semibold text-white">
                  {t(`products.${product.id}.name`)}
                </h3>
                <p className="mt-2 text-sm text-white">
                  {t(`products.${product.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
