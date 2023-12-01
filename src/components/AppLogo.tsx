'use client';

import Lottie from 'lottie-react';
import skill from '@/assets/data/skill.json';

const AppLogo = () => {
  return <Lottie animationData={skill} loop={true} />;
};

export default AppLogo;
