import { memo } from 'react'
import './style.css'
import Foad from '../../assets/img/brightkan.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
import SocialIcons from '../social_icons'

function HomeRight() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <Image src={Foad} className="home-right-main-img" alt="Bright Kanyange" />
        </Col>
        <Row className="home-right-footer">
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  )
}

export default memo(HomeRight)
