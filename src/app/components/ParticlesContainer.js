import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import styles from "./particles.module.scss";

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    // you can initialize the tsParticles instance (main)
  }, []);

  const particlesLoaded = useCallback(async (container) => {console.log(container)}, []);
  return (
    <Particles
      className={styles.particles}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
                quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ff00ff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
