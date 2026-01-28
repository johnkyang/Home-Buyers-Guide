// Accurate California silhouette path - traced from reference logo
const CALIFORNIA_PATH = "M42 13L44 13L44.5 14L44 16L42 18L41 20L40 20.5L39 21L38 23L37 23.5L36.5 24L36 25L35.5 26.5L35 27L34 27.5L33 29L32 30L31.5 31L31 32L30.5 33.5L30 35L29.5 37L29 39L29.5 41L30 43L31 45L32.5 47L34 48.5L36 50L37 51L36 52L34 51.5L32 50.5L30 50L28 49L26.5 47.5L25.5 45.5L25 43L24.5 40L24.5 37L25 34L25.5 31L26.5 28L28 25L29.5 23L31 21L33 19L35 17L37 15.5L39 14L41 13L42 13Z";

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
  const fillColor = variant === 'light' ? '#1E3A5F' : 'white';
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
        {/* House outline - filled shape matching reference */}
        <path
          d="M32 2L0 30H8V62H24V46H40V62H56V30H64L32 2Z"
          fill={fillColor}
        />
        {/* Door cutout */}
        <path
          d="M24 46H40V62H24V46Z"
          fill="white"
        />
        {/* California state silhouette */}
        <path
          d={CALIFORNIA_PATH}
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
  const fillColor = variant === 'light' ? '#1E3A5F' : 'white';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House outline - filled shape */}
      <path
        d="M32 2L0 30H8V62H24V46H40V62H56V30H64L32 2Z"
        fill={fillColor}
      />
      {/* Door cutout */}
      <path
        d="M24 46H40V62H24V46Z"
        fill={variant === 'light' ? 'white' : '#1E3A5F'}
      />
      {/* California state silhouette */}
      <path
        d={CALIFORNIA_PATH}
        fill="#D4A853"
      />
    </svg>
  );
}
