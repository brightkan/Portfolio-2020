const particles = {
  particles: {
    number: { value: 80, density: { enable: true, area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    links: { enable: true, distance: 130, color: '#ffffff', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, outModes: 'out', bounce: false }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 140, links: { opacity: 1 } }, push: { quantity: 3 } }
  },
  detectRetina: true
}

export default particles
