const particles = {
  particles: {
    number: { value: 70, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.35, random: true },
    size: { value: 2.5, random: true },
    links: { enable: true, distance: 130, color: '#ffffff', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, outModes: 'out', bounce: false }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 130, links: { opacity: 0.8 } }, push: { quantity: 2 } }
  },
  detectRetina: true
}

export default particles
