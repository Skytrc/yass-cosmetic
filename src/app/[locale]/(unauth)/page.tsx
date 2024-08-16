import { getTranslations } from 'next-intl/server';

import { YouTubeVideo } from '@/components/ui/Video';
import { Certification } from '@/page/home/Certification';
import { CTA } from '@/page/home/CTA';
import { FactoryIntroduction } from '@/page/home/FactoryIntroduction';
import { Hero } from '@/page/home/Hero';
import { ODMProcessComponent } from '@/page/home/ODMProcessComponent';
import { ProductShowcase } from '@/page/home/ProductShowcase';
import { Range } from '@/page/home/Range';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Certification />
      <Range />
      <FactoryIntroduction />
      <YouTubeVideo videoId="u2kTL_3Fj8Y" titleKey="factoryVideoTitle" />
      <ProductShowcase />
      <ODMProcessComponent />
      {/* <Pricing />
      <FAQ /> */}
      <CTA />
    </>
  );
}
