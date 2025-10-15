import { NextRequest, NextResponse } from 'next/server';
import { getProviderVerificationById, updateVerificationStatus } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const verification = await getProviderVerificationById(id);
    return NextResponse.json(verification);
  } catch (error) {
    console.error('Error fetching verification:', error);
    return NextResponse.json(
      { error: 'Failed to fetch verification' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, adminId, adminNotes } = body;

    if (!status || !adminId) {
      return NextResponse.json(
        { error: 'Status and adminId are required' },
        { status: 400 }
      );
    }

    if (status !== 'approved' && status !== 'rejected') {
      return NextResponse.json(
        { error: 'Status must be either approved or rejected' },
        { status: 400 }
      );
    }

    const result = await updateVerificationStatus(id, status, adminId, adminNotes);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating verification:', error);
    return NextResponse.json(
      { error: 'Failed to update verification' },
      { status: 500 }
    );
  }
}
