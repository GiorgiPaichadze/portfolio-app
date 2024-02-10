import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { projectsFormSchema } from '@/validations/validations';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();

      try {
        projectsFormSchema.parse(body);
      } catch (validationError: any) {
        return new NextResponse(
          JSON.stringify({ message: 'Validation error', details: validationError.errors }),
          { status: 400 },
        );
      }

      if (body.category === 'work_projects') {
        const latestProject = await prisma.workProjects.findFirst({
          orderBy: { orderId: 'desc' },
        });

        const nextOrderId = latestProject ? latestProject.orderId + 1 : 1;

        const projectsData = await prisma.workProjects.create({
          data: {
            ...body,
            orderId: nextOrderId,
          },
        });

        return new NextResponse(JSON.stringify(projectsData), { status: 201 });
      }

      if (body.category === 'my_projects') {
        const latestProject = await prisma.myProjects.findFirst({
          orderBy: { orderId: 'desc' },
        });

        const nextOrderId = latestProject ? latestProject.orderId + 1 : 1;

        const projectsData = await prisma.myProjects.create({
          data: {
            ...body,
            orderId: nextOrderId,
          },
        });

        return new NextResponse(JSON.stringify(projectsData), { status: 201 });
      }
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
    const [workProjects, myProjects] = await Promise.all([
      prisma.workProjects.findMany({ orderBy: { orderId: 'asc' } }),
      prisma.myProjects.findMany({ orderBy: { orderId: 'asc' } }),
    ]);

    const projectsData = {
      workProjects,
      myProjects,
    };

    return new NextResponse(JSON.stringify(projectsData), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
