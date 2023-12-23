import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { experienceFormSchema } from '@/validations/validations';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();

      try {
        experienceFormSchema.parse(body);
      } catch (validationError: any) {
        return new NextResponse(
          JSON.stringify({ message: 'Validation error', details: validationError.errors }),
          { status: 400 },
        );
      }

      const experienceData = await prisma.experience.create({
        data: body,
      });

      return new NextResponse(JSON.stringify(experienceData), { status: 201 });
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), {
        status: 500,
      });
    }
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const experienceData = await prisma.experience.findMany();
    return new NextResponse(JSON.stringify(experienceData), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
