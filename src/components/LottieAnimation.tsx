'use client';

import Lottie from 'lottie-react';

const LottieAnimation: React.FC<{
  item: { v: string };
}> = ({ item }) => {
  return <Lottie className="w-3/4" animationData={item} loop={true} />;
};

export default LottieAnimation;
