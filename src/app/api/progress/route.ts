import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getBuyerById, updateBuyerProgress } from '@/lib/airtable';

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { lessonId, completed } = body;

    if (!lessonId || typeof completed !== 'boolean') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Get current buyer progress
    const buyer = await getBuyerById(session.user.id);

    if (!buyer) {
      return NextResponse.json(
        { success: false, error: 'Buyer not found' },
        { status: 404 }
      );
    }

    // Update progress
    const currentProgress = buyer.progress;
    let completedLessons = [...(currentProgress.completedLessons || [])];

    if (completed && !completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
    } else if (!completed && completedLessons.includes(lessonId)) {
      completedLessons = completedLessons.filter((id) => id !== lessonId);
    }

    const updatedProgress = {
      completedLessons,
      lastLessonId: lessonId,
      lastAccessedAt: new Date().toISOString(),
    };

    await updateBuyerProgress(session.user.id, updatedProgress);

    return NextResponse.json({
      success: true,
      data: updatedProgress,
    });
  } catch (error) {
    console.error('Progress update error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update progress' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const buyer = await getBuyerById(session.user.id);

    if (!buyer) {
      return NextResponse.json(
        { success: false, error: 'Buyer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: buyer.progress,
    });
  } catch (error) {
    console.error('Progress fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch progress' },
      { status: 500 }
    );
  }
}
