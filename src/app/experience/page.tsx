import AppContainer from '@/components/AppContainer';
import ExperienceCard from '@/components/ExperienceCard';
import experience from '@/assets/data/experience.json';
import LottieAnimation from '@/components/LottieAnimation';

const Experience = () => {
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={experience} />
            </div>
            <div className="flex-1 flex flex-col gap-1 pl-6 md:pl-0">
              <ExperienceCard />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default Experience;
