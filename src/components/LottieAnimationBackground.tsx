'use client';

import Lottie from 'lottie-react';

const LottieAnimationBackground: React.FC<{
  item: { v: string };
}> = ({ item }) => {
  return <Lottie animationData={item} loop={true} />;
};

export default LottieAnimationBackground;
