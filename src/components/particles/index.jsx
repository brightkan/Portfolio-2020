import { memo } from 'react'
import { Particles, useParticlesProvider } from '@tsparticles/react'

function ParticlesBackground({ config, id }) {
  const { loaded } = useParticlesProvider()
  if (!loaded) return null
  return <Particles id={id} className="particle" options={config} />
}

export default memo(ParticlesBackground)
