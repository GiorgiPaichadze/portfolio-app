import { skillsData } from '@/assets/data/data';
import AppContainer from '@/components/AppContainer';
import LottieAnimation from '@/components/LottieAnimation';
import frontend from '@/assets/data/lottiefiles/frontend.json';
import backend from '@/assets/data/lottiefiles/backend.json';
import other from '@/assets/data/lottiefiles/other.json';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';
import AppSectionRow from '@/components/AppSectionRow';

const Skills: React.FC = () => {
  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={frontend} />
            </div>
            <div className="flex-1 flex flex-col gap-10 md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle>Frontend:</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.frontend.map((item) => (
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
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={backend} />
            </div>
            <div className="flex-1 flex flex-col gap-10  md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle>Backend:</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.backend.map((item) => (
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
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={other} />
            </div>
            <div className="flex-1 flex flex-col gap-10 md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <AppHighlightedTitle nowrap>Other skills</AppHighlightedTitle>
                <ul className="pl-6 flex flex-col gap-3">
                  {skillsData?.other.map((item) => (
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
