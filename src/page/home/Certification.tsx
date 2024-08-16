import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';
import { Section } from '@/features/landing/Section';

const Certification = () => (
  <Section>
    <LogoCloud text="Certification">
      <Image src="/certificates/9001.png" alt="Clerk" width="128" height="40" />

      <Image
        src="/certificates/halal.png"
        alt="Turso"
        width="128"
        height="128"
      />

      <Image
        src="/certificates/gmpc.png"
        alt="Crowdin"
        width="128"
        height="128"
      />

      <Image
        src="/certificates/22716.png"
        alt="Sentry"
        width="128"
        height="128"
      />

      <Image
        src="/certificates/vegan.png"
        alt="Nextjs SaaS Boilerplate"
        width="128"
        height="128"
      />
    </LogoCloud>
  </Section>
);

export { Certification };
