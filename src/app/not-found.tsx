import LottieBackground from '@/components/AboutBackground';
import notFound from '@/assets/data/not-found.json';

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="w-[600px] h-[500px] hidden md:block">
        <LottieBackground item={notFound} />
      </div>
    </div>
  );
};

export default NotFound;
