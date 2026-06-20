import { memo } from 'react'
import './style.css'
import HomeLeft from '../../components/home_left'
import HomeRight from '../../components/home_right'
import Footer from '../../components/footer'
import { Container, Row, Col } from 'react-bootstrap'
import ParticlesBackground from '../../components/particles'
import particles from '../../const/particle.js'

function Home() {
  return (
    <>
      <title>Home | Bright Kanyange</title>
      <meta name="description" content="Bright Kanyange | Home - Python Developer | Django | React | Flutter" />
      <link rel="canonical" href="https://brightkan.dev/home" />

      <div className="page-fade-in">
        <ParticlesBackground config={particles} id="home-particles" />
        <Container className="App-header" fluid>
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>
          <Row className="App-footer">
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default memo(Home)
