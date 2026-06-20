import { memo } from 'react'
import './style.css'
import { Row, Col } from 'react-bootstrap'
import SocialIcons from '../social_icons'

function ContactLeft() {
  return (
    <div>
      <Row className="Contact-text">
        <Col xl={12}>
          <h1 className="p-heading1">Get In Touch</h1>
          <p className="p-heading2">
            Thanks for stopping by. If you have any queries, ideas, or projects you'd like to
            discuss, feel free to reach out — I'm always open to a good conversation. Use the
            Contact Form <strong>OR</strong> connect via a social media link below.
          </p>
        </Col>
      </Row>
      <Row className="contact-left-footer">
        <SocialIcons />
      </Row>
    </div>
  )
}

export default memo(ContactLeft)
