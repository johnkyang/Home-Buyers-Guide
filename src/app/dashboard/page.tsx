import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { getBuyerById } from '@/lib/airtable';
import { MODULES } from '@/lib/constants';
import { getModuleLessonIds } from '@/lib/course-content';

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
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E3A5F]">
            Welcome back, {session.user.fullName.split(' ')[0]}!
          </h1>
          <p className="text-gray-600 mt-2">
            Continue your California homebuying education journey.
          </p>
        </div>

        {/* Overall Progress Card */}
        <div className="card mb-8 bg-gradient-to-r from-[#1E3A5F] to-[#2d4a6f] text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
              <p className="text-gray-200">
                {totalCompleted} of {totalLessons} lessons completed
              </p>
            </div>
            <div className="flex items-center gap-4">
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
                  className="btn-secondary"
                >
                  Continue Learning
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Course Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulesWithProgress.map((module) => (
            <Link
              key={module.id}
              href={`/course/${module.id}`}
              className="card hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    module.isComplete
                      ? 'bg-green-100 text-green-600'
                      : 'bg-[#1E3A5F]/10 text-[#1E3A5F]'
                  }`}
                >
                  {module.isComplete ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-bold">{module.number}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1E3A5F] group-hover:text-[#2AA89A] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{module.description}</p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>
                        {module.completedLessons}/{module.totalLessons} lessons
                      </span>
                      <span>{module.percentComplete}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          module.isComplete ? 'bg-green-500' : 'bg-[#2AA89A]'
                        }`}
                        style={{ width: `${module.percentComplete}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper function to get lessons for a module
function getModuleLessons(moduleId: string): string[] {
  return getModuleLessonIds(moduleId);
}
