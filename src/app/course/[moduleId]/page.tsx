import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { getBuyerById } from '@/lib/airtable';
import { getModuleContent, courseContent } from '@/lib/course-content';

interface ModulePageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export async function generateStaticParams() {
  return courseContent.map((module) => ({
    moduleId: module.id,
  }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = await params;

  let session;
  try {
    session = await getSession();
  } catch (error) {
    console.error('Session error:', error);
    redirect('/login');
  }

  if (!session) {
    redirect('/login');
  }

  const module = getModuleContent(moduleId);
  if (!module) {
    notFound();
  }

  let completedLessons: string[] = [];
  try {
    const buyer = await getBuyerById(session.user.id);
    completedLessons = buyer?.progress.completedLessons || [];
  } catch (error) {
    console.error('Error fetching buyer:', error);
    // Continue with empty progress rather than crashing
  }

  // Find next incomplete lesson
  const nextIncompleteLesson = module.lessons.find(
    (lesson) => !completedLessons.includes(lesson.id)
  );

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/dashboard" className="text-gray-500 hover:text-[#1E3A5F]">
                Dashboard
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/course" className="text-gray-500 hover:text-[#1E3A5F]">
                Course
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#1E3A5F] font-medium">Module {module.number}</li>
          </ol>
        </nav>

        {/* Module Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{module.number}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#1E3A5F]">{module.title}</h1>
              <p className="text-gray-600">{module.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Module Progress</span>
              <span className="font-medium text-[#1E3A5F]">
                {module.lessons.filter((l) => completedLessons.includes(l.id)).length}/
                {module.lessons.length} lessons
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#2AA89A] h-3 rounded-full transition-all"
                style={{
                  width: `${
                    (module.lessons.filter((l) => completedLessons.includes(l.id)).length /
                      module.lessons.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {module.lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isNext = nextIncompleteLesson?.id === lesson.id;

            return (
              <Link
                key={lesson.id}
                href={`/course/${moduleId}/${lesson.id}`}
                className={`card flex items-center gap-4 hover:shadow-lg transition-all ${
                  isNext ? 'ring-2 ring-[#2AA89A]' : ''
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? 'bg-green-100 text-green-600'
                      : isNext
                      ? 'bg-[#2AA89A] text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#1E3A5F]">{lesson.title}</h3>
                  {isNext && (
                    <span className="text-xs text-[#2AA89A] font-medium">Up Next</span>
                  )}
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {module.number > 0 && (
            <Link
              href={`/course/${courseContent[module.number - 1]?.id}`}
              className="text-[#1E3A5F] hover:underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Module
            </Link>
          )}
          <div className="flex-1" />
          {module.number < courseContent.length - 1 && (
            <Link
              href={`/course/${courseContent[module.number + 1]?.id}`}
              className="text-[#1E3A5F] hover:underline flex items-center gap-2"
            >
              Next Module
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
