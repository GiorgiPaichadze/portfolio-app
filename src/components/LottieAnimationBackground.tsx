'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const LottieAnimationBackground: React.FC<{
  item: { v: string };
}> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return <>{isLoading && <Lottie animationData={item} loop={true} />}</>;
};

export default LottieAnimationBackground;
