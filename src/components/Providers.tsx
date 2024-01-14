'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="6px"
        color="#E2E8F0"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
