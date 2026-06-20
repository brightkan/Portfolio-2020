import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ParticlesProvider } from '@tsparticles/react'
import { initParticlesEngine } from './lib/particles'
import PuffLoader from 'react-spinners/PuffLoader'
import SiteNav from './components/navbar'

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const Projects = lazy(() => import('./pages/projects'))

function PageLoader() {
  return (
    <div className="Loading-header">
      <PuffLoader size="40vw" color="#fff" />
    </div>
  )
}

export default function Router() {
  return (
    <ParticlesProvider init={initParticlesEngine}>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SiteNav />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Navigate to="/projects" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ParticlesProvider>
  )
}
