import { memo } from 'react'
import './style.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

function HomeLeft() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h1 className="first-line">Hi!</h1>
          <h2 className="second_line">
            I am <strong>Bright Kanyange</strong>
          </h2>
          <h3>
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Product Manager', 2000,
                'Python & Django', 2000,
                'React & Flutter', 2000,
              ]}
              wrapper="span"
              className="typical"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <br />
          <Button size="lg" className="home-left-aboutmme-btn btn-cta-primary">
            <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>
              About Me
            </Link>
          </Button>{' '}
          <Button size="lg" className="home-left-aboutmme-btn btn-cta-secondary">
            <Link to="/contact" style={{ textDecoration: 'none', color: '#FFC466' }}>
              Contact Me
            </Link>
          </Button>{' '}
          <Button size="lg" className="home-left-aboutmme-btn btn-cta-secondary">
            <a
              href="https://drive.google.com/file/d/1LW_L4V2qYvFRQnCd4Um8KY3NvSQtXb-w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#FFC466' }}
            >
              Download Resume
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default memo(HomeLeft)
