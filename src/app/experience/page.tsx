import AppContainer from '@/components/AppContainer';
import AppExperienceCard from '@/components/AppExperienceCard';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { ExperienceItem } from '@/types/types';
import AppIllustration from '@/components/AppIllustration';

const getData = async () => {
  try {
    const data = await http('/api/experience', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Experience: React.FC = async () => {
  const experienceData: ExperienceItem[] | [] = await getData();

  if (!experienceData) return null;

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:flex justify-center">
              <AppIllustration srcPath={'/images/experience.svg'} />
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
