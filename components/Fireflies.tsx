import React, { useEffect, useRef } from 'react';

const NUM_FIREFLIES = 18;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Fireflies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fireflies = containerRef.current?.querySelectorAll('.firefly');
    if (!fireflies) return;
    fireflies.forEach((el, i) => {
      const duration = random(8, 18);
      const delay = random(0, 10);
      const size = random(0.7, 1.4);
      const x = random(0, 100);
      const y = random(0, 100);
      (el as HTMLElement).style.setProperty('--duration', `${duration}s`);
      (el as HTMLElement).style.setProperty('--delay', `${delay}s`);
      (el as HTMLElement).style.setProperty('--size', `${size}`);
      (el as HTMLElement).style.setProperty('--x', `${x}%`);
      (el as HTMLElement).style.setProperty('--y', `${y}%`);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fireflies-container pointer-events-none absolute inset-0 z-20"
      aria-hidden="true"
    >
      {Array.from({ length: NUM_FIREFLIES }).map((_, i) => (
        <div key={i} className="firefly" />
      ))}
    </div>
  );
};

export default Fireflies; 