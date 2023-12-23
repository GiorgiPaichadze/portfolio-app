import AppContainer from '@/components/AppContainer';
import AppSocials from '@/components/AppSocials';
import AppSubtitle from '@/components/AppSubtitle';
import AppTitle from '@/components/AppTitle';
import mountains from '@/assets/data/lottiefiles/mountains.json';
import LottieAnimationBackground from '@/components/LottieAnimationBackground';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';
import { http } from '@/services/http';
import AppLinkButton from '@/components/AppLinkButton';

const getData = async () => {
  try {
    const data = await http('/api/about', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const About: React.FC = async () => {
  const aboutData = await getData();

  if (!aboutData) return null;

  return (
    <main className="h-[calc(100vh-6rem)] relative">
      <div className="absolute -z-10 bottom-0 left-0 right-0 hidden md:block">
        <LottieAnimationBackground item={mountains} />
      </div>
      <AppContainer>
        <section className="h-full md:w-7/12 pt-12 md:pt-24 flex flex-col gap-5">
          <AppHighlightedTitle>{aboutData.highlightedTitle}</AppHighlightedTitle>
          <AppTitle>{aboutData.title}</AppTitle>
          <AppSubtitle>{aboutData.subtitle}</AppSubtitle>

          <div className="flex gap-2">
            <AppLinkButton rel="noopener noreferrer" target="_blank" href={aboutData.cv} primary>
              <span>View CV</span>
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
            </AppLinkButton>
          </div>
          <AppSocials socials={aboutData} />
        </section>
      </AppContainer>
    </main>
  );
};

export default About;
