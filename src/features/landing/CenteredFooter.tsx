import { useTranslations } from 'next-intl';
import React from 'react';

const CenteredFooter = (props: {
  logo: React.ReactNode;
  name: string;
  // legalLinks: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 w-full max-w-4xl text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          {t('factory_description')}
        </p>
        <p className="text-xs text-muted-foreground">{t('factory_address')}</p>
      </div>

      {props.logo}

      <ul className="mt-6 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60">
        {props.children}
      </ul>

      <div className="mt-8 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm text-muted-foreground max-md:flex-col">
        <div>
          © Copyright {new Date().getFullYear()} {props.name}.{' '}
          {t('designed_by', { designer: 'fung' })}.
        </div>

        {/* <ul className="flex gap-x-4 font-medium [&_a:hover]:opacity-100 [&_a]:opacity-60">
          {props.legalLinks}
        </ul> */}
      </div>
    </div>
  );
};

export { CenteredFooter };
