import AboutBackground from '@/components/AboutBackground';
import AppContainer from '@/components/AppContainer';
import AppSocials from '@/components/AppSocials';
import AppSubtitle from '@/components/AppSubtitle';
import AppTitle from '@/components/AppTitle';
import HighlightedTitle from '@/components/HighlightedTitle';

export default function About() {
  return (
    <main className="h-[calc(100vh-6rem)] relative">
      <div className="absolute -z-10 bottom-0 left-0 right-0 hidden md:block">
        <AboutBackground />
      </div>
      <AppContainer>
        <div className="h-full md:w-7/12 pt-12 md:pt-24 flex flex-col gap-4">
          <HighlightedTitle>
            Welcome to the digital realm where creativity meets functionality!
          </HighlightedTitle>
          <AppTitle>Giorgi Paichadze</AppTitle>
          <AppSubtitle>
            Frontend focused Web Developer specializing in building exceptional digital experiences.
            Join me on a journey through pixels and code as we explore the art of user interfaces
            and bring web designs to life.
          </AppSubtitle>
          <AppSocials />
        </div>
      </AppContainer>
    </main>
  );
}
