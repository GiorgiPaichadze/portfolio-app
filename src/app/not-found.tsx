import AppLinkButton from '@/components/AppLinkButton';
import AppIllustration from '@/components/AppIllustration';

const NotFound: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <AppLinkButton href={'/'} primary>
        Back
      </AppLinkButton>
      <div className="hidden md:flex items-center justify-center">
        <AppIllustration srcPath={'/images/not-found.svg'} />
      </div>
    </div>
  );
};

export default NotFound;
