'use client';

import AppContainer from '@/components/AppContainer';
import Image from 'next/image';
import Link from 'next/link';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { ProjectsItem } from '@/types/types';
import AppIllustration from '@/components/AppIllustration';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';
import AppButton from '@/components/AppButton';
import { useEffect, useState } from 'react';
import AppLoader from '@/components/AppLoader';

interface Projects {
  skillList: ProjectsItem[];
  totalCount?: number;
}

const Projects: React.FC = () => {
  const [workProjectsToShow, setWorkProjectsToShow] = useState(2);
  const [myProjectsToShow, setMyProjectsToShow] = useState(2);

  const [workProjects, setWorkProjects] = useState<Projects>();
  const [myProjects, setMyProjects] = useState<Projects>();

  const handleWorkProjects = async (total: number) => {
    try {
      const data = await http(`/api/projects/work_projects?total=${total}`, 'GET');
      setWorkProjects(data);
    } catch (error) {
      console.warn('Error fetching data:', error);
    }
  };

  const handleMyProjects = async (total: number) => {
    try {
      const data = await http(`/api/projects/my_projects?total=${total}`, 'GET');
      setMyProjects(data);
    } catch (error) {
      console.warn('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleWorkProjects(workProjectsToShow);
  }, [workProjectsToShow]);

  useEffect(() => {
    handleMyProjects(myProjectsToShow);
  }, [myProjectsToShow]);

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/projects.svg'} />
            </div>
            <div className="flex-1 gap-6 flex flex-col">
              <div className="gap-6 flex flex-col">
                <AppHighlightedTitle>Work Projects</AppHighlightedTitle>
                {!workProjects?.skillList ? (
                  <div>
                    {[...Array(2)].map((_, i) => (
                      <AppLoader key={i} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {workProjects?.skillList.map((item) => (
                      <Link
                        href={item.url}
                        target="_black"
                        key={item.id}
                        className="flex gap-6 p-4 rounded-md hover:bg-slate-800/50
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-shadow">
                        <div className="flex items-center justify-center min-w-[48px] h-12  bg-white p-2 rounded-md">
                          <Image src={item?.image} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-lg text-teal-300">{item.title}</h4>
                          <div className="text-sm">{item.desc}</div>
                          {item.stack && (
                            <ul className="flex gap-2 flex-wrap">
                              {item.stack.split(',').map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </Link>
                    ))}
                    <div className="flex justify-center">
                      {workProjectsToShow < (workProjects?.totalCount ?? 0) && (
                        <AppButton
                          primary
                          styles="w-fit"
                          onClick={() => setWorkProjectsToShow((prev) => prev + 2)}>
                          More
                        </AppButton>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="gap-6 flex flex-col">
                <AppHighlightedTitle>My Projects</AppHighlightedTitle>
                {!myProjects?.skillList ? (
                  <div>
                    {[...Array(2)].map((_, i) => (
                      <AppLoader key={i} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {myProjects?.skillList.map((item) => (
                      <Link
                        href={item.url}
                        target="_black"
                        key={item.id}
                        className="flex gap-6 p-4 rounded-md hover:bg-slate-800/50
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-shadow">
                        <div className="flex items-center justify-center min-w-[48px] h-12  bg-white p-2 rounded-md">
                          <Image src={item?.image} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-3">
                          <h4 className="text-lg text-teal-300">{item.title}</h4>
                          <div className="text-sm">{item.desc}</div>
                          {item.stack && (
                            <ul className="flex gap-2 flex-wrap">
                              {item.stack.split(',').map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </Link>
                    ))}
                    <div className="flex justify-center">
                      {myProjectsToShow < (myProjects?.totalCount ?? 0) && (
                        <AppButton
                          primary
                          styles="w-fit"
                          onClick={() => setMyProjectsToShow((prev) => prev + 2)}>
                          More
                        </AppButton>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Projects;
