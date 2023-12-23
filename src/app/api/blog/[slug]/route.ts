import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { postFormSchema } from '@/validations/validations';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  try {
    const postData = await prisma.post.findFirst({ where: { slug: slug as string } });
    return new NextResponse(JSON.stringify(postData), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  const session = await getAuthSession();

  if (session?.user) {
    const body = await req.json();

    try {
      try {
        postFormSchema.parse(body);
      } catch (validationError: any) {
        return new NextResponse(
          JSON.stringify({ message: 'Validation error', details: validationError.errors }),
          { status: 400 },
        );
      }

      await prisma.post.updateMany({ where: { slug: slug as string }, data: body });
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

export const DELETE = async (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;

  const session = await getAuthSession();

  if (session?.user) {
    try {
      await prisma.post.deleteMany({ where: { slug: slug as string } });
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
