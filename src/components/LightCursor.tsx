'use client';

import React, { useEffect, useState, CSSProperties } from 'react';

const LightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const lightStyles: CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    pointerEvents: 'none',
    transition: 'background 300ms',
    background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return <div style={lightStyles} />;
};

export default LightCursor;
