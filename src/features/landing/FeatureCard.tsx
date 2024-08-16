import Image from 'next/image';
import type { ReactNode } from 'react';

type IconProp =
  | ReactNode
  | { src: string; alt: string; width: number; height: number };

interface FeatureCardProps {
  icon: IconProp;
  title: string;
  children: ReactNode;
}

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="size-12 rounded-lg bg-[#00B0A5] p-2 [&_svg]:stroke-primary-foreground [&_svg]:stroke-2 ">
      {icon && typeof icon === 'object' && 'src' in icon ? (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="mr-2"
        />
      ) : (
        icon
      )}
    </div>

    <div className="mt-2 text-lg font-bold">{title}</div>

    <div className="my-3 w-8 border-t border-[#00B0A5]" />

    <div className="mt-2 text-muted-foreground">{children}</div>
  </div>
);

export { FeatureCard };
