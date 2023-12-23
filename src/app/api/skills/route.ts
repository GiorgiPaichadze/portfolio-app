import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse, NextRequest } from 'next/server';

type SkillList = {
  id: string;
};

const createSkill = async (
  category: 'frontend' | 'backend' | 'other',
  skills: string[],
  existingSkillList: SkillList[],
) => {
  const updateData = {
    [category]: {
      create: {
        skills,
      },
    },
  };

  if (existingSkillList.length === 0) {
    return await prisma.skillList.create({
      data: { ...updateData },
      include: { [category]: true },
    });
  } else {
    return await prisma.skillList.update({
      where: { id: existingSkillList[0]?.id },
      data: { ...updateData },
      include: { [category]: true },
    });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getAuthSession();

  if (session?.user) {
    try {
      const body = await req.json();
      const existingSkillList = await prisma.skillList.findMany();

      if (['frontend', 'backend', 'other'].includes(body.category)) {
        const skillData = await createSkill(body.category, body.skills, existingSkillList);
        return new NextResponse(JSON.stringify(skillData), { status: 201 });
      } else {
        return new NextResponse(JSON.stringify({ message: 'Invalid category!' }), {
          status: 500,
        });
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
    const skillsData = await prisma.skillList.findMany({
      include: {
        frontend: true,
        backend: true,
        other: true,
      },
    });
    return new NextResponse(JSON.stringify(skillsData[0]), { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
};
