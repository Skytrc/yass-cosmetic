import { useTranslations } from 'next-intl';
import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  titleKey: string;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  titleKey,
}) => {
  const t = useTranslations('YouTubeVideo');

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#00B0A5]">
          {t(titleKey)}
        </h2>
        <div
          className="relative mx-auto w-full max-w-5xl"
          style={{ maxHeight: '70vh' }}
        >
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute left-0 top-0 size-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={t(titleKey)}
            />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          {t('videoAccessibilityNotice')}{' '}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {t('watchOnYouTube')}
          </a>
        </p>
      </div>
    </section>
  );
};
