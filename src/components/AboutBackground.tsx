'use client';

import Lottie from 'lottie-react';
import mountains from '@/assets/data/mountains.json';

const AboutBackground = () => {
  return <Lottie animationData={mountains} loop={true} />;
};

export default AboutBackground;
