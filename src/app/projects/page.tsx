import AppContainer from '@/components/AppContainer';
import Image from 'next/image';
import Link from 'next/link';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { ProjectsItem } from '@/types/types';
import AppIllustration from '@/components/AppIllustration';

const getData = async () => {
  try {
    const data = await http('/api/projects', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Projects: React.FC = async () => {
  const projectsData: ProjectsItem[] | [] = await getData();

  if (!projectsData) return null;

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/projects.svg'} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                {projectsData.map((item) => (
                  <Link
                    href={item.url}
                    target="_black"
                    key={item.id}
                    className="flex gap-6 p-5 rounded-md hover:bg-slate-800/50
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-shadow">
                    <div className="flex items-center justify-center min-w-[48px] h-12  bg-white p-2 rounded-md">
                      <Image src={item?.image} alt="" width={24} height={24} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-lg text-teal-300">{item.title}</h4>
                      <div className="text-sm">{item.desc}</div>
                      <ul className="flex gap-2 flex-wrap">
                        {item.stack.split(',').map((item, index) => (
                          <li
                            key={index}
                            className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Projects;
