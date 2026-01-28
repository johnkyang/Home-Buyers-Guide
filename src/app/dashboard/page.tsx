import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { getBuyerById } from '@/lib/airtable';
import { MODULES } from '@/lib/constants';
import { getModuleLessonIds } from '@/lib/course-content';
import {
  Compass,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Umbrella,
  Search,
  ClipboardList,
  FileText,
  Home,
  PenTool,
  CheckCircle,
} from 'lucide-react';

// Icon mapping for each module
const moduleIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
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

export const metadata = {
  title: 'My Progress - HomeReadyCA',
  description: 'Track your progress through the California homebuyer course.',
};

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const buyer = await getBuyerById(session.user.id);

  if (!buyer) {
    redirect('/login');
  }

  const { progress } = buyer;
  const completedLessons = progress.completedLessons || [];

  // Calculate progress for each module
  const modulesWithProgress = MODULES.map((module) => {
    const moduleLessons = getModuleLessons(module.id);
    const completedInModule = moduleLessons.filter((lesson) =>
      completedLessons.includes(lesson)
    ).length;
    const totalInModule = moduleLessons.length;
    const percentComplete =
      totalInModule > 0 ? Math.round((completedInModule / totalInModule) * 100) : 0;

    return {
      ...module,
      completedLessons: completedInModule,
      totalLessons: totalInModule,
      percentComplete,
      isComplete: completedInModule === totalInModule && totalInModule > 0,
    };
  });

  // Overall progress
  const totalLessons = modulesWithProgress.reduce((sum, m) => sum + m.totalLessons, 0);
  const totalCompleted = completedLessons.length;
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  // Find next lesson to continue
  const nextModule = modulesWithProgress.find((m) => !m.isComplete);

  return (
    <div className="py-12 bg-[#F0F2F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E3A5F]">
            Welcome back, {session.user.fullName.split(' ')[0]}!
          </h1>
          <p className="text-slate-600 mt-2">
            Continue your California homebuying education journey.
          </p>
        </div>

        {/* Overall Progress Card */}
        <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2d4a6f] rounded-3xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
              <p className="text-slate-300">
                {totalCompleted} of {totalLessons} lessons completed
              </p>
            </div>
            <div className="flex items-center gap-6">
              {/* Progress Circle */}
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#D4A853"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallPercent / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{overallPercent}%</span>
                </div>
              </div>
              {nextModule && (
                <Link
                  href={`/course/${nextModule.id}`}
                  className="bg-[#D4A853] text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  Continue Learning
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Course Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modulesWithProgress.map((module) => {
            const Icon = moduleIconMap[module.id] || Compass;
            return (
              <Link
                key={module.id}
                href={`/course/${module.id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  {/* Icon with completion indicator */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    module.isComplete
                      ? 'bg-green-50'
                      : 'bg-[#FDFAF3]'
                  }`}>
                    {module.isComplete ? (
                      <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.5} />
                    ) : (
                      <Icon
                        className="w-8 h-8 text-[#D4AF37]"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="font-bold text-[#1E3A5F] group-hover:text-[#D4AF37] transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{module.description}</p>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>
                          {module.completedLessons}/{module.totalLessons} lessons
                        </span>
                        <span className="font-semibold">{module.percentComplete}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            module.isComplete ? 'bg-green-500' : 'bg-[#D4AF37]'
                          }`}
                          style={{ width: `${module.percentComplete}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Helper function to get lessons for a module
function getModuleLessons(moduleId: string): string[] {
  return getModuleLessonIds(moduleId);
}
