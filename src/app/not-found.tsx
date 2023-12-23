import notFound from '@/assets/data/lottiefiles/not-found.json';
import LottieAnimationBackground from '@/components/LottieAnimationBackground';
import AppLinkButton from '@/components/AppLinkButton';

const NotFound: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <AppLinkButton href={'/'} primary>
        Back
      </AppLinkButton>
      <div className="w-[600px] h-[500px] hidden md:block">
        <LottieAnimationBackground item={notFound} />
      </div>
    </div>
  );
};

export default NotFound;
