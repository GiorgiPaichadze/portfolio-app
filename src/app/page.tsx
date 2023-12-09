import Link from 'next/link';
import AppContainer from '@/components/AppContainer';
import AppSocials from '@/components/AppSocials';
import AppSubtitle from '@/components/AppSubtitle';
import AppTitle from '@/components/AppTitle';
import mountains from '@/assets/data/lottiefiles/mountains.json';
import { aboutData } from '@/assets/data/data';
import LottieAnimationBackground from '@/components/LottieAnimationBackground';
import AppHighlightedTitle from '@/components/AppHighlightedTitle';

const About: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] relative">
      <div className="absolute -z-10 bottom-0 left-0 right-0 hidden md:block">
        <LottieAnimationBackground item={mountains} />
      </div>
      <AppContainer>
        <div className="h-full md:w-7/12 pt-12 md:pt-24 flex flex-col gap-5">
          <AppHighlightedTitle>{aboutData.highlightedTitle}</AppHighlightedTitle>
          <AppTitle>{aboutData.title}</AppTitle>
          <AppSubtitle>{aboutData.subtitle}</AppSubtitle>
          <div className="flex gap-2">
            <Link
              href={aboutData.cv}
              target="_blank"
              className="px-4 py-2 bg-blue-950 text-teal-300 text-sm rounded-lg flex gap-2 items-center justify-center hover:text-teal-400 transition-colors">
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
            </Link>
            <Link
              href={aboutData.contactSlug}
              className="px-4 py-2 bg-blue-950 text-teal-300 text-sm rounded-lg flex gap-2 items-center justify-center hover:text-teal-400 transition-colors">
              <span>Contact me</span>
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
            </Link>
          </div>
          <AppSocials />
        </div>
      </AppContainer>
    </div>
  );
};

export default About;
