interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showWordmark?: boolean;
}

export default function Logo({ size = 'md', variant = 'light', showWordmark = true }: LogoProps) {
  const dimensions = {
    sm: { icon: 32, fontSize: 'text-lg' },
    md: { icon: 40, fontSize: 'text-xl' },
    lg: { icon: 56, fontSize: 'text-2xl' },
  };

  const { icon, fontSize } = dimensions[size];
  const strokeColor = variant === 'light' ? '#1E3A5F' : 'white';
  const textColor = variant === 'light' ? 'text-[#1E3A5F]' : 'text-white';

  return (
    <div className="flex items-center gap-3">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House outline */}
        <path
          d="M32 4L4 28V60H24V44H40V60H60V28L32 4Z"
          stroke={strokeColor}
          strokeWidth="5"
          fill="none"
          strokeLinejoin="miter"
        />
        {/* California state silhouette */}
        <path
          d="M38 20C38.5 20 39.5 20.5 40 21.5C40.5 22.5 41 24 41 26C41 28 40.5 30 40 32C39.5 34 38.5 36 37.5 38C36.5 40 35 41.5 33.5 42.5C32 43.5 30.5 44 29 43.5C27.5 43 26.5 42 26 40.5C25.5 39 25.5 37 26 34.5C26.5 32 27.5 29 28.5 26.5C29.5 24 31 22 32.5 21C34 20 36 19.5 37 20C37.5 20 38 20 38 20Z"
          fill="#D4A853"
        />
      </svg>
      {showWordmark && (
        <span className={`font-bold tracking-tight ${fontSize} ${textColor}`}>
          HomeReady<span className="text-[#D4A853]">CA</span>
        </span>
      )}
    </div>
  );
}

// Icon-only version for favicons
export function LogoIcon({ size = 32, variant = 'light' }: { size?: number; variant?: 'light' | 'dark' }) {
  const strokeColor = variant === 'light' ? '#1E3A5F' : 'white';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4L4 28V60H24V44H40V60H60V28L32 4Z"
        stroke={strokeColor}
        strokeWidth="6"
        fill="none"
        strokeLinejoin="miter"
      />
      <path
        d="M38 20C38.5 20 39.5 20.5 40 21.5C40.5 22.5 41 24 41 26C41 28 40.5 30 40 32C39.5 34 38.5 36 37.5 38C36.5 40 35 41.5 33.5 42.5C32 43.5 30.5 44 29 43.5C27.5 43 26.5 42 26 40.5C25.5 39 25.5 37 26 34.5C26.5 32 27.5 29 28.5 26.5C29.5 24 31 22 32.5 21C34 20 36 19.5 37 20C37.5 20 38 20 38 20Z"
        fill="#D4A853"
      />
    </svg>
  );
}
