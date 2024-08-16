'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from '../ui/Logo';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <Section className="px-3 py-2">
        <CenteredMenu
          logo={<Logo />}
          rightMenu={
            <>
              <li>
                <LocaleSwitcher />
              </li>
              {/* <li>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li> */}
            </>
          }
        >
          <li>
            <Link href="/">{t('home')}</Link>
          </li>

          <li>
            <Link href="/product">{t('product')}</Link>
          </li>

          <li>
            <Link href="/service">{t('service')}</Link>
          </li>

          <li>
            <Link href="/contract">{t('contract')}</Link>
          </li>
        </CenteredMenu>
      </Section>
    </div>
  );
};

export { Navbar };
