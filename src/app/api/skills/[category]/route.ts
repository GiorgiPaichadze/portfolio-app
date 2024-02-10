import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { category: string } }) => {
  const { category } = params;

  try {
    if (category === 'frontend') {
      const skillList = await prisma.skillItemFrontend.findMany({});
      return new NextResponse(JSON.stringify(skillList), { status: 200 });
    }
    if (category === 'backend') {
      const skillList = await prisma.skillItemBackend.findMany({});
      return new NextResponse(JSON.stringify(skillList), { status: 200 });
    }

    if (category === 'other') {
      const skillList = await prisma.skillItemOther.findMany({});
      return new NextResponse(JSON.stringify(skillList), { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: { params: { category: string } }) => {
  const { category } = params;

  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');

  const body = await req.json();

  const session = await getAuthSession();

  if (session?.user) {
    try {
      if (category === 'frontend') {
        const updatedSkillList = await prisma.skillItemFrontend.update({
          where: { id: id as string },
          data: body,
        });
        return new NextResponse(JSON.stringify(updatedSkillList), { status: 200 });
      }
      if (category === 'backend') {
        const updatedSkillList = await prisma.skillItemBackend.update({
          where: { id: id as string },
          data: body,
        });
        return new NextResponse(JSON.stringify(updatedSkillList), { status: 200 });
      }

      if (category === 'other') {
        const updatedSkillList = await prisma.skillItemOther.update({
          where: { id: id as string },
          data: body,
        });
        return new NextResponse(JSON.stringify(updatedSkillList), { status: 200 });
      }
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
    try {
      let deleteResponse;

      if (category === 'frontend') {
        deleteResponse = await prisma.skillItemFrontend.delete({ where: { id: id as string } });
      } else if (category === 'backend') {
        deleteResponse = await prisma.skillItemBackend.delete({ where: { id: id as string } });
      } else if (category === 'other') {
        deleteResponse = await prisma.skillItemOther.delete({ where: { id: id as string } });
      } else {
        return new NextResponse(JSON.stringify({ message: 'Invalid category!' }), { status: 400 });
      }

      return new NextResponse(JSON.stringify('Product has been deleted!'), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  }
};
