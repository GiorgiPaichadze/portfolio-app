import { skillsData } from '@/assets/data/data';
import AppContainer from '@/components/AppContainer';
import HighlightedTitle from '@/components/HighlightedTitle';
import LottieAnimation from '@/components/LottieAnimation';
import frontend from '@/assets/data/frontend.json';
import backend from '@/assets/data/backend.json';
import other from '@/assets/data/other.json';

const Skills = () => {
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={frontend} />
            </div>
            <div className="flex-1 flex flex-col gap-10 md:items-center md:justify-center pl-6 md:pl-0">
              <div className="flex flex-col gap-4">
                <HighlightedTitle>Frontend:</HighlightedTitle>
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
                <HighlightedTitle>Backend:</HighlightedTitle>
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
                <HighlightedTitle nowrap>Other skills</HighlightedTitle>
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
    </div>
  );
};

export default Skills;
