import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

const Range = () => {
  const t = useTranslations('ProductsRange');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={{
              src: '/products_range/deodorant.svg',
              alt: 'deodorant',
              width: 32,
              height: 32,
            }}
            title={t('Deodorant & Antiperspirant')}
          >
            {t('Deodorant & Antiperspirant_description')}
          </FeatureCard>

          <FeatureCard
            icon={{
              src: '/products_range/skin-care.svg',
              alt: 'skin-care',
              width: 32,
              height: 32,
            }}
            title={t('Skin Care')}
          >
            {t('Skin Care_description')}
          </FeatureCard>

          <FeatureCard
            icon={{
              src: '/products_range/functional.svg',
              alt: 'functional',
              width: 32,
              height: 32,
            }}
            title={t('Functional Cosmetic')}
          >
            {t('Functional Cosmetic_description')}
          </FeatureCard>

          <FeatureCard
            icon={{
              src: '/products_range/sun-care.svg',
              alt: 'sun-care',
              width: 32,
              height: 32,
            }}
            title={t('Sun Care')}
          >
            {t('Sun Care_description')}
          </FeatureCard>

          <FeatureCard
            icon={{
              src: '/products_range/body-care.svg',
              alt: 'body-care',
              width: 32,
              height: 32,
            }}
            title={t('Body Care')}
          >
            {t('Body Care_description')}
          </FeatureCard>

          <FeatureCard
            icon={{
              src: '/products_range/mask.svg',
              alt: 'mask',
              width: 32,
              height: 32,
            }}
            title={t('Mask')}
          >
            {t('Mask_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};

export { Range };
