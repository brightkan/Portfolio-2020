import { memo } from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col xl={12}>
          Copyright &copy; 2018-{new Date().getFullYear()}{' '}
          <strong>Bright Kanyange</strong>
        </Col>
      </Row>
    </Container>
  )
}

export default memo(Footer)
