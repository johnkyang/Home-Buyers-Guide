import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export default function Logo({ size = 'md', showWordmark = true }: LogoProps) {
  const dimensions = {
    sm: { icon: 32, fontSize: 'text-lg' },
    md: { icon: 40, fontSize: 'text-xl' },
    lg: { icon: 56, fontSize: 'text-2xl' },
  };

  const { icon, fontSize } = dimensions[size];

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.jpeg"
        alt="HomeReadyCA"
        width={icon}
        height={icon}
        className="object-contain"
        priority
      />
      {showWordmark && (
        <span className={`font-bold tracking-tight ${fontSize} text-[#1E3A5F]`}>
          HomeReady<span className="text-[#D4A853]">CA</span>
        </span>
      )}
    </div>
  );
}

// Icon-only version for favicons
export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="HomeReadyCA"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}
