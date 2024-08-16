import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
    <Image
      src="/logo.svg"
      alt={`${AppConfig.name} logo`}
      width={64} // 调整为合适的尺寸
      height={48} // 保持原始宽高比
      className="mr-2"
    />
    {AppConfig.name}
  </div>
);

export { Logo };
