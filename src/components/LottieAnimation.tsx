'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const LottieAnimation: React.FC<{
  item: { v: string };
}> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return <>{isLoading && <Lottie className="w-3/4" animationData={item} loop={true} />}</>;
};

export default LottieAnimation;
