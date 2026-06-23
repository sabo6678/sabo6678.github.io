import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true },
          },
          color: {
            value: ['#00f0ff', '#b347ea', '#ff2d95'],
          },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#00f0ff',
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none' as const,
            random: true,
            straight: false,
            outModes: { default: 'bounce' as const },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.3,
                color: '#b347ea',
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
