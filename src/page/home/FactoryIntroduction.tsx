import { Droplets, Factory, Recycle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { ImageCarousel } from '../../features/factory/ImageCarousel';

export const FactoryIntroduction: React.FC = () => {
  const t = useTranslations('FactoryIntroduction');
  const images = [
    '/factory/factory1.jpg',
    '/factory/factory2.png',
    '/factory/factory3.png',
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#00B0A5] md:text-4xl">
          {t('title')}
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { key: 'squareMeters', icon: Factory },
            { key: 'gmpClass', icon: Droplets },
            { key: 'waterFiltration', icon: Recycle },
          ].map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center rounded-lg bg-gray-100 p-4 text-center shadow-md"
            >
              <item.icon className="mb-2 size-8 text-teal-500 md:size-10" />
              <div className="mb-1 text-2xl font-bold text-teal-500 md:text-3xl">
                {t(`${item.key}Number`)}
              </div>
              <div className="text-sm text-gray-700 md:text-base">
                {t(item.key)}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between text-gray-700">
            <div className="mb-auto">
              <p className="mb-2 text-sm md:text-base">
                <span className="font-semibold text-teal-600">
                  {t('modernTechnology')}
                </span>{' '}
                {t('paragraph1')}
              </p>
            </div>
            <div className="mt-4 md:mt-8">
              <p className="mb-2 text-sm md:text-base">
                <span className="font-semibold text-teal-600">
                  {t('ourCommitment')}
                </span>{' '}
                {t('paragraph2')}
              </p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center space-x-2 text-teal-700">
                  <Recycle className="size-5" />
                  <span className="text-sm md:text-base">
                    {t('naturalIngredients')}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-teal-700">
                  <Recycle className="size-5" />
                  <span className="text-sm md:text-base">
                    {t('recyclablePackaging')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};
