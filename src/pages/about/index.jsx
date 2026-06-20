import { memo } from 'react'
import './style.css'
import { Container, Row } from 'react-bootstrap'
import Footer from '../../components/footer'
import CV from '../../components/cv'
import ParticlesBackground from '../../components/particles'
import particles from '../../const/about_particle.js'

function About() {
  return (
    <>
      <title>About | Bright Kanyange</title>
      <meta
        name="description"
        content="Bright Kanyange | Software Engineer & Product Manager with a BSc in Computer Science. Experienced in Python, Django, React, and Flutter."
      />
      <link rel="canonical" href="https://brightkan.dev/about" />

      <Container className="About-header page-fade-in" fluid>
        <ParticlesBackground config={particles} id="about-particles" />
        <Row className="About-main">
          <CV />
        </Row>
        <Row className="About-footer">
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default memo(About)
