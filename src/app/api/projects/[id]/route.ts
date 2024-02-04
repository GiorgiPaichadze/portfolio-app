import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  const body = await req.json();

  const { dragFirst, dragSecond } = body;

  const session = await getAuthSession();

  if (session?.user) {
    if (dragFirst && dragSecond) {
      try {
        const projectFirst = await prisma.projects.findFirst({
          where: {
            orderId: dragFirst,
          },
        });

        const projectSecond = await prisma.projects.findFirst({
          where: {
            orderId: dragSecond,
          },
        });

        if (projectFirst) {
          await prisma.projects.update({
            where: {
              id: projectFirst.id,
            },
            data: {
              orderId: dragSecond,
            },
          });
        }

        if (projectSecond) {
          await prisma.projects.update({
            where: {
              id: projectSecond.id,
            },
            data: {
              orderId: dragFirst,
            },
          });
        }
        return new NextResponse(JSON.stringify('Item has been updated!'), { status: 200 });
      } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
          status: 500,
        });
      }
    } else {
      try {
        await prisma.projects.update({
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
      await prisma.projects.delete({ where: { id: id as string } });
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
