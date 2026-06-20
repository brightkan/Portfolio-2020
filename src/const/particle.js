const particles = {
  particles: {
    number: {
      value: 130,
      density: { enable: true, area: 800 }
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      outModes: 'out',
      bounce: true
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 150, links: { opacity: 1 } },
      push: { quantity: 4 }
    }
  },
  detectRetina: true
}

export default particles
