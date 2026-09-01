"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  opacity: number;
};

const COUNT = 22;

export default function DustParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Randomized client-only, deliberately: matching server/client output
    // exactly would require picking these values before we know the client
    // is real, so they're generated after mount instead.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: COUNT }, (_, id) => ({
        id,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        duration: 7 + Math.random() * 11,
        delay: -Math.random() * 15,
        driftX: (Math.random() - 0.5) * 80,
        opacity: 0.25 + Math.random() * 0.4,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="dust-particle"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--dust-o": p.opacity,
              "--dust-x": `${p.driftX}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
