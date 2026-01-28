import {
  Compass,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Sparkles,
  Search,
  ClipboardList,
  FileText,
  Home,
  PenTool,
  Umbrella,
  Key,
} from 'lucide-react';

// Icon mapping for each module
const moduleIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'start-here': Compass,
  'budget-buying-power': BarChart3,
  'mortgage-basics': ShieldCheck,
  'documents-underwriting': FolderOpen,
  'down-payment-assistance': Umbrella,
  'home-search-offers': Search,
  'escrow-process': ClipboardList,
  'inspections-negotiation': Home,
  'insurance': FileText,
  'closing-first-30-days': PenTool,
};

// Alternative icons for variety
const moduleIconsAlt: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'start-here': Sparkles,
  'budget-buying-power': Key,
  'mortgage-basics': ShieldCheck,
  'documents-underwriting': FolderOpen,
  'down-payment-assistance': Sparkles,
  'home-search-offers': Search,
  'escrow-process': ClipboardList,
  'inspections-negotiation': Home,
  'insurance': FileText,
  'closing-first-30-days': Key,
};

interface ModuleIconProps {
  moduleId: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'alt';
  className?: string;
}

export default function ModuleIcon({
  moduleId,
  size = 'md',
  variant = 'default',
  className = ''
}: ModuleIconProps) {
  const icons = variant === 'alt' ? moduleIconsAlt : moduleIcons;
  const Icon = icons[moduleId] || Compass;

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <Icon
      className={`${sizeClasses[size]} ${className}`}
      strokeWidth={1.5}
    />
  );
}

// Export individual icons for direct use
export {
  Compass,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Sparkles,
  Search,
  ClipboardList,
  FileText,
  Home,
  PenTool,
  Umbrella,
  Key,
};
