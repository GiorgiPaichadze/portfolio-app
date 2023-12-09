import AppContainer from '@/components/AppContainer';
import experience from '@/assets/data/lottiefiles/experience.json';
import LottieAnimation from '@/components/LottieAnimation';
import { experienceData } from '@/assets/data/data';
import AppExperienceCard from '@/components/AppExperienceCard';
import AppSectionRow from '@/components/AppSectionRow';

const Experience: React.FC = () => {
  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={experience} />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              {experienceData.map((item) => (
                <AppExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Experience;
