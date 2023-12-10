import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { aboutFormSchema } from '@/validations/validations';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const aboutData = await prisma.about.findMany();
    return new NextResponse(JSON.stringify(aboutData), { status: 200 });
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
        aboutFormSchema.parse(body);
      } catch (validationError: any) {
        return new NextResponse(
          JSON.stringify({ message: 'Validation error', details: validationError.errors }),
          { status: 400 },
        );
      }

      const existingAboutData = await prisma.about.findMany();

      if (existingAboutData.length === 0) {
        const aboutData = await prisma.about.create({
          data: body,
        });

        return new NextResponse(JSON.stringify(aboutData), { status: 201 });
      } else {
        const updatedAboutData = await prisma.about.update({
          where: { id: existingAboutData[0].id },
          data: body,
        });

        return new NextResponse(JSON.stringify(updatedAboutData), { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  }
};
