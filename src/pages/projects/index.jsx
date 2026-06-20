import { memo } from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer'
import ParticlesBackground from '../../components/particles'
import ProjectBody from '../../components/project_main'
import particles from '../../const/project_particle.js'

function ProjectsPage() {
  return (
    <>
      <title>Projects | Bright Kanyange</title>
      <meta name="description" content="Bright Kanyange | Projects - Python Developer | Django | React | Flutter" />
      <link rel="canonical" href="https://brightkan.dev/projects" />

      <Container className="About-header page-fade-in" fluid>
        <ParticlesBackground config={particles} id="project-particles" />
        <Row className="projects-main">
          <Col xs={12} className="projects-content">
            <h1 className="projects-heading">Projects</h1>
            <ProjectBody />
          </Col>
        </Row>
        <Row className="About-footer">
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default memo(ProjectsPage)
