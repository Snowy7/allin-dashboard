import { NextResponse } from 'next/server';
import { getDashboardStats, getRevenueByMonth, getBookingsByDay, getCategoryDistribution, getRecentActivity } from '@/lib/db';

export async function GET() {
  try {
    const [stats, revenue, bookings, categories, activity] = await Promise.all([
      getDashboardStats(),
      getRevenueByMonth(6),
      getBookingsByDay(7),
      getCategoryDistribution(),
      getRecentActivity(10),
    ]);

    return NextResponse.json({
      stats,
      revenue,
      bookings,
      categories,
      activity,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
