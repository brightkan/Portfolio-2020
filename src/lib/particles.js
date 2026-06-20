import { loadSlim } from '@tsparticles/slim'

export async function initParticlesEngine(engine) {
  await loadSlim(engine)
}
