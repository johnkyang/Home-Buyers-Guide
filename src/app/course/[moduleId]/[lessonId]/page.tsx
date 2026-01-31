import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { getBuyerById } from '@/lib/airtable';
import { getModuleContent, getLesson, getNextLesson, getPreviousLesson, courseContent } from '@/lib/course-content';
import LessonContent from './LessonContent';
import MarkCompleteButton from './MarkCompleteButton';

interface LessonPageProps {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

export async function generateStaticParams() {
  return courseContent.flatMap((module) =>
    module.lessons.map((lesson) => ({
      moduleId: module.id,
      lessonId: lesson.id,
    }))
  );
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { moduleId, lessonId } = await params;

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
  const lesson = getLesson(moduleId, lessonId);

  if (!module || !lesson) {
    notFound();
  }

  let completedLessons: string[] = [];
  let isCompleted = false;
  try {
    const buyer = await getBuyerById(session.user.id);
    completedLessons = buyer?.progress.completedLessons || [];
    isCompleted = completedLessons.includes(lessonId);
  } catch (error) {
    console.error('Error fetching buyer:', error);
    // Continue with empty progress rather than crashing
  }

  const nextLesson = getNextLesson(moduleId, lessonId);
  const prevLesson = getPreviousLesson(moduleId, lessonId);

  // Find current lesson index
  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 flex-wrap">
            <li>
              <Link href="/dashboard" className="text-gray-500 hover:text-[#1E3A5F]">
                Dashboard
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href={`/course/${moduleId}`} className="text-gray-500 hover:text-[#1E3A5F]">
                Module {module.number}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#1E3A5F] font-medium truncate max-w-[200px]">
              {lesson.title}
            </li>
          </ol>
        </nav>

        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="bg-[#1E3A5F]/10 text-[#1E3A5F] px-2 py-1 rounded">
              Module {module.number}
            </span>
            <span>Lesson {lessonIndex + 1} of {module.lessons.length}</span>
            {isCompleted && (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Completed
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">{lesson.title}</h1>
        </div>

        {/* Lesson Content */}
        <div className="card mb-8">
          <LessonContent content={lesson.content} />

          {lesson.worksheetPlaceholder && (
            <div className="mt-8 p-6 bg-[#D4A853]/10 rounded-lg border border-[#D4A853]/20">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="font-semibold text-[#1E3A5F]">Worksheet</h3>
              </div>
              <p className="text-gray-600 text-sm">
                A downloadable worksheet for this lesson will be available soon.
              </p>
            </div>
          )}
        </div>

        {/* Mark Complete */}
        <div className="mb-8">
          <MarkCompleteButton
            lessonId={lessonId}
            isCompleted={isCompleted}
            buyerId={session.user.id}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
          {prevLesson ? (
            <Link
              href={`/course/${prevLesson.moduleId}/${prevLesson.lessonId}`}
              className="flex items-center gap-2 text-[#1E3A5F] hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Lesson
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/course/${nextLesson.moduleId}/${nextLesson.lessonId}`}
              className="btn-primary flex items-center gap-2"
            >
              Next Lesson
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link href="/dashboard" className="btn-accent">
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
