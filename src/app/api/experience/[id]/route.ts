import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  const body = await req.json();

  const session = await getAuthSession();

  if (session?.user) {
    try {
      await prisma.experience.update({
        where: { id: id as string },
        data: body,
      });
      return new NextResponse(JSON.stringify('Item has been updated!'), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  const session = await getAuthSession();

  if (session?.user) {
    try {
      await prisma.experience.delete({ where: { id: id as string } });
      return new NextResponse(JSON.stringify('Item has been deleted!'), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }
};
