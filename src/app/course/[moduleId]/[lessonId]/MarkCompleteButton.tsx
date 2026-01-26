'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MarkCompleteButtonProps {
  lessonId: string;
  isCompleted: boolean;
  buyerId: string;
}

export default function MarkCompleteButton({
  lessonId,
  isCompleted: initialCompleted,
}: MarkCompleteButtonProps) {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId,
          completed: !isCompleted,
        }),
      });

      if (response.ok) {
        setIsCompleted(!isCompleted);
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to update progress:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
        isCompleted
          ? 'bg-green-100 text-green-700 hover:bg-green-200'
          : 'bg-[#2AA89A] text-white hover:bg-[#248f83]'
      } disabled:opacity-50`}
    >
      {loading ? (
        <span>Updating...</span>
      ) : isCompleted ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Lesson Completed
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Mark as Complete
        </>
      )}
    </button>
  );
}
