'use client';

import Lottie from 'lottie-react';

type LottieAnimationProps = {
  item: any;
};

const LottieAnimation = ({ item }: LottieAnimationProps) => {
  return <Lottie className="w-3/4" animationData={item} loop={true} />;
};

export default LottieAnimation;
