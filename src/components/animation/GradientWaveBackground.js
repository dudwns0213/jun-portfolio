'use client';

import { useEffect, useRef } from 'react';

const GradientWaveBackground = ({ children }) => {
  const containerRef = useRef(null);
  let animationFrameId = null;
  let time = 0;

  const colorPalettes = [
    { primary: '100, 200, 255', secondary: '200, 160, 255' },
    { primary: '255, 150, 150', secondary: '255, 200, 100' },
    { primary: '150, 255, 180', secondary: '100, 200, 255' },
    { primary: '255, 180, 100', secondary: '220, 120, 220' },
    { primary: '180, 180, 255', secondary: '255, 180, 255' },
  ];

  useEffect(() => {
    const updateGradient = () => {
      if (!containerRef.current) return;

      time += 0.005;

      const x1 = Math.sin(time) * 0.5 + 0.5;
      const y1 = Math.cos(time * 0.7) * 0.5 + 0.5;
      const x2 = Math.cos(time * 0.3) * 0.5 + 0.5;
      const y2 = Math.sin(time * 0.5) * 0.5 + 0.5;

      const paletteIndex = Math.floor(time * 0.1) % colorPalettes.length;
      const nextPaletteIndex = (paletteIndex + 1) % colorPalettes.length;
      const progress = (time * 0.1) % 1;

      const currentPalette = colorPalettes[paletteIndex];
      const nextPalette = colorPalettes[nextPaletteIndex];

      const interpolateColor = (start, end, progress) => {
        return start
          .split(', ')
          .map((s, i) => {
            const startVal = parseInt(s);
            const endVal = parseInt(end.split(', ')[i]);
            return Math.round(startVal + (endVal - startVal) * progress);
          })
          .join(', ');
      };

      const primaryColor = interpolateColor(
        currentPalette.primary,
        nextPalette.primary,
        progress,
      );
      const secondaryColor = interpolateColor(
        currentPalette.secondary,
        nextPalette.secondary,
        progress,
      );

      containerRef.current.style.background = `
        radial-gradient(
          circle at ${x1 * 100}% ${y1 * 100}%,
          rgba(${primaryColor}, ${0.7 + Math.sin(time) * 0.2}),
          rgba(${secondaryColor}, ${0.6 + Math.cos(time * 0.5) * 0.2})
        ),
        radial-gradient(
          circle at ${x2 * 100}% ${y2 * 100}%,
          rgba(${secondaryColor}, ${0.5}),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(
          ${Math.sin(time * 0.2) * 90}deg,
          rgba(${primaryColor}, 0.8) 0%,
          rgba(${secondaryColor}, 0.8) 100%
        )
      `;

      animationFrameId = requestAnimationFrame(updateGradient);
    };

    animationFrameId = requestAnimationFrame(updateGradient);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden transition-colors duration-300"
    >
      {children}
    </div>
  );
};

export default GradientWaveBackground;
