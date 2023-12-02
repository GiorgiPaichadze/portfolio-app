import AppContainer from '@/components/AppContainer';
import LottieAnimation from '@/components/LottieAnimation';
import projects from '@/assets/data/projects.json';
import Image from 'next/image';
import { projectsData } from '@/assets/data/data';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={projects} />
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
                    <div>
                      <Image
                        src={item.image}
                        alt=""
                        width={120}
                        height={120}
                        className="rounded-md min-w-[120px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-lg text-teal-300">{item.title}</h4>
                      <div className="text-sm">{item.desc}</div>
                      <ul className="flex gap-2 flex-wrap">
                        {item.stack.map((item) => (
                          <li
                            key={item.id}
                            className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                            {item.title}
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
    </div>
  );
};

export default Projects;
