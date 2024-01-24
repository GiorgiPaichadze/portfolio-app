import AppContainer from '@/components/AppContainer';
import AppSocials from '@/components/AppSocials';
import AppSubtitle from '@/components/AppSubtitle';
import AppTitle from '@/components/AppTitle';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';
import { http } from '@/services/http';
import AppLinkButton from '@/components/AppLinkButton';
import AppIllustration from '@/components/AppIllustration';

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
    <main className="h-[calc(100vh-6rem)]">
      <AppContainer>
        <div className="flex items-center justify-between h-full gap-6">
          <div className="max-w-xl flex flex-col gap-6 md:gap-6">
            <AppHighlightedTitle>{aboutData.highlightedTitle}</AppHighlightedTitle>
            <AppTitle>{aboutData.title}</AppTitle>
            <AppSubtitle>{aboutData.subtitle}</AppSubtitle>
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
            <AppSocials socials={aboutData} />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <AppIllustration srcPath={'/images/retro-computer.svg'} />
          </div>
        </div>
      </AppContainer>
    </main>
  );
};

export default About;
