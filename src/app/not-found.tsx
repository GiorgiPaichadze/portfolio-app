import notFound from '@/assets/data/lottiefiles/not-found.json';
import Link from 'next/link';
import LottieAnimationBackground from '@/components/LottieAnimationBackground';

const NotFound: React.FC = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <Link href={'/'}>Back</Link>
      <div className="w-[600px] h-[500px] hidden md:block">
        <LottieAnimationBackground item={notFound} />
      </div>
    </div>
  );
};

export default NotFound;
