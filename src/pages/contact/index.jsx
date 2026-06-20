import { memo } from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer'
import ContactLeft from '../../components/contact_left'
import EmailForm from '../../components/email_form'
import ParticlesBackground from '../../components/particles'
import particles from '../../const/contact_particle.js'

function Contact() {
  return (
    <>
      <title>Contact | Bright Kanyange</title>
      <meta name="description" content="Bright Kanyange | Contact - Python Developer | Software Engineer" />
      <link rel="canonical" href="https://brightkan.dev/contact" />

      <div className="page-fade-in">
        <ParticlesBackground config={particles} id="contact-particles" />
        <Container className="Contact-header" fluid>
          <Row className="Contact-main">
            <Col xl={6} className="Contact-left">
              <ContactLeft />
            </Col>
            <Col xl={6} className="Contact-right">
              <EmailForm />
            </Col>
          </Row>
          <Row className="Contact-footer">
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default memo(Contact)
