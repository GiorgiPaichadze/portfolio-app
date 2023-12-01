'use client';

import Lottie from 'lottie-react';

const SkillAnimation = ({ item }) => {
  return <Lottie className="w-3/4" animationData={item} loop={true} />;
};

export default SkillAnimation;
