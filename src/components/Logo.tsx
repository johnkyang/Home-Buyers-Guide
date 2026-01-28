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
        {/* California state silhouette - accurate outline */}
        <path
          d="M39.5 16L40.5 16.5L41 17.5L40.5 19L39 20L38.5 21.5L39 23L38 24.5L37 25L36 25.5L35.5 27L36 28L35.5 29.5L34.5 30L34 31L34.5 32.5L34 34L33 35L32.5 36.5L33 38L34 39.5L35.5 41L37 43L38.5 44.5L38 45.5L36.5 45L35 44L33 44.5L31.5 45L30 44.5L29 43L28 41L27.5 39L27 37L26.5 35L26 33L26.5 31L27 29L27.5 27L28.5 25L29.5 23L31 21L32.5 19.5L34 18L36 17L38 16L39.5 16Z"
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
      {/* California state silhouette - accurate outline */}
      <path
        d="M39.5 16L40.5 16.5L41 17.5L40.5 19L39 20L38.5 21.5L39 23L38 24.5L37 25L36 25.5L35.5 27L36 28L35.5 29.5L34.5 30L34 31L34.5 32.5L34 34L33 35L32.5 36.5L33 38L34 39.5L35.5 41L37 43L38.5 44.5L38 45.5L36.5 45L35 44L33 44.5L31.5 45L30 44.5L29 43L28 41L27.5 39L27 37L26.5 35L26 33L26.5 31L27 29L27.5 27L28.5 25L29.5 23L31 21L32.5 19.5L34 18L36 17L38 16L39.5 16Z"
        fill="#D4A853"
      />
    </svg>
  );
}
