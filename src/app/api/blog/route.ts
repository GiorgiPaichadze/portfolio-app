import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { postFormSchema } from '@/validations/validations';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const postsData = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(postsData), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();

      try {
        postFormSchema.parse(body);
      } catch (validationError: any) {
        return new NextResponse(
          JSON.stringify({ message: 'Validation error', details: validationError.errors }),
          { status: 400 },
        );
      }

      const postData = await prisma.post.create({
        data: { slug: body.title, ...body },
      });

      return new NextResponse(JSON.stringify(postData), { status: 201 });
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  }
};
