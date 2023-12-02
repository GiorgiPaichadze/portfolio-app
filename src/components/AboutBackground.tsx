'use client';

import Lottie from 'lottie-react';

type LottieAnimationProps = {
  item: any;
};

const LottieBackground = ({ item }: LottieAnimationProps) => {
  return <Lottie animationData={item} loop={true} />;
};

export default LottieBackground;
