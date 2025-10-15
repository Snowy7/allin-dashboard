import { NextRequest, NextResponse } from 'next/server';
import { getProviderVerifications } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status') || undefined;

    const verifications = await getProviderVerifications(status);

    return NextResponse.json(verifications);
  } catch (error) {
    console.error('Error fetching verifications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch verifications' },
      { status: 500 }
    );
  }
}
