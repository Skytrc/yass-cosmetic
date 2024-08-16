import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from '../ui/Logo';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-8">
      <CenteredFooter logo={<Logo />} name={AppConfig.name}>
        <li>
          <Link href="/product">{t('product')}</Link>
        </li>
        <li>
          <Link href="/service">{t('service')}</Link>
        </li>
        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};

export { Footer };
