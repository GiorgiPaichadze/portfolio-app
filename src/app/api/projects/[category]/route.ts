// @ts-nocheck

import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

const updateProjectOrder = async (model: any, dragFirst: string, dragSecond: string) => {
  const projectFirst = await prisma[model].findFirst({
    where: {
      orderId: dragFirst,
    },
  });

  const projectSecond = await prisma[model].findFirst({
    where: {
      orderId: dragSecond,
    },
  });

  if (projectFirst) {
    await prisma[model].update({
      where: {
        id: projectFirst.id,
      },
      data: {
        orderId: dragSecond,
      },
    });
  }

  if (projectSecond) {
    await prisma[model].update({
      where: {
        id: projectSecond.id,
      },
      data: {
        orderId: dragFirst,
      },
    });
  }
};

export const GET = async (req: NextRequest, { params }: { params: { category: string } }) => {
  const { category } = params;

  const searchParams = req.nextUrl.searchParams;
  const total = searchParams.has('total') ? +searchParams.get('total') : undefined;

  try {
    if (category === 'work_projects') {
      const query = total
        ? { orderBy: { orderId: 'desc' }, take: total }
        : { orderBy: { orderId: 'desc' } };
      const skillList = await prisma.workProjects.findMany(query);
      const totalCount = await prisma.workProjects.count();
      return new NextResponse(JSON.stringify({ skillList, totalCount }), { status: 200 });
    }
    if (category === 'my_projects') {
      const query = total
        ? { orderBy: { orderId: 'desc' }, take: total }
        : { orderBy: { orderId: 'desc' } };
      const skillList = await prisma.myProjects.findMany(query);
      const totalCount = await prisma.myProjects.count();
      return new NextResponse(JSON.stringify({ skillList, totalCount }), { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: { params: { category: string } }) => {
  const { category } = params;
  const body = await req.json();
  const { dragFirst, dragSecond } = body;
  const session = await getAuthSession();

  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (session?.user) {
    try {
      if (category === 'work_projects') {
        if (dragFirst && dragSecond) {
          await updateProjectOrder('workProjects', dragFirst, dragSecond);
        } else {
          await prisma.workProjects.update({
            where: { id: id as string },
            data: body,
          });
        }
      } else if (category === 'my_projects') {
        if (dragFirst && dragSecond) {
          await updateProjectOrder('myProjects', dragFirst, dragSecond);
        } else {
          await prisma.myProjects.update({
            where: { id: id as string },
            data: body,
          });
        }
      }
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

export const DELETE = async (req: NextRequest, { params }: { params: { category: string } }) => {
  const { category } = params;

  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');

  const session = await getAuthSession();

  if (session?.user) {
    if (category === 'work_projects') {
      try {
        await prisma.workProjects.delete({ where: { id: id as string } });
        return new NextResponse(JSON.stringify('Item has been deleted!'), { status: 200 });
      } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
          status: 500,
        });
      }
    }

    if (category === 'my_projects') {
      try {
        await prisma.myProjects.delete({ where: { id: id as string } });
        return new NextResponse(JSON.stringify('Item has been deleted!'), { status: 200 });
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
