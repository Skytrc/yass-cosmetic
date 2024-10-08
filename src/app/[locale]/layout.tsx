import '@/styles/global.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

// import { DemoBadge } from '@/components/DemoBadge';
import { AllLocales } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/logo.svg',
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   url: '/favicon-32x32.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   url: '/favicon-16x16.png',
    // },
    // {
    //   rel: 'icon',
    //   url: '/favicon.ico',
    // },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#00b0a5', // logo 的主色调
    },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AllLocales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body className="bg-background text-foreground antialiased">
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}

          {/* <DemoBadge /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
