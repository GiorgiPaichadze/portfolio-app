import AppContainer from '@/components/AppContainer';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import AppIllustration from '@/components/AppIllustration';

const getData = async () => {
  try {
    const data = await http('/api/skills', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Skills: React.FC = async () => {
  const skillsData = await getData();

  if (!skillsData) return null;

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex justify-center">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/frontend.svg'} />
            </div>
            <div className="flex-1 flex flex-col gap-10 md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle>Frontend:</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.frontend.map((item: any) => (
                    <li
                      className="relative before:content-[''] before:w-4 before:h-[2px] before:bg-teal-300 before:absolute before:-left-8 before:top-2/4"
                      key={item.id}>
                      {item.skills}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/backend.svg'} />
            </div>
            <div className="flex-1 flex flex-col gap-10  md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle>Backend:</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.backend.map((item: any) => (
                    <li
                      className="relative before:content-[''] before:w-4 before:h-[2px] before:bg-teal-300 before:absolute before:-left-8 before:top-2/4"
                      key={item.id}>
                      {item.skills}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/other-skills.svg'} />
            </div>
            <div className="flex-1 flex flex-col gap-10 md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle nowrap>Other skills</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.other.map((item: any) => (
                    <li
                      className="relative before:content-[''] before:w-4 before:h-[2px] before:bg-teal-300 before:absolute before:-left-8 before:top-2/4"
                      key={item.id}>
                      {item.skills}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Skills;
