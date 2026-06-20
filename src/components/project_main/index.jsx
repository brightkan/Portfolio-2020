import { memo, useState } from 'react'
import './style.css'
import { Col, Card, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faLink } from '@fortawesome/free-solid-svg-icons'
import info from '../../const/project_info.json'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

function PM() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0, slides: [] })

  return (
    <Row className="main_row justify-content-center">
      {info.data.map(item => (
        <Col xl={4} md={6} key={item.id} className="card_col">
          <Card className="card_main">
            <div className="card_accent" style={{ borderTopColor: item.color }} />
            <Card.Body className="card_body_content">
              <h2 className="card_title">{item.name}</h2>
              <p className="card_desc">{item.description}</p>
              <div className="card_tools">
                {item.tools.split(', ').map(t => (
                  <span key={t} className="card_tool_tag">{t}</span>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="card_footer">
              <FontAwesomeIcon
                onClick={() =>
                  setLightbox({ open: true, index: 0, slides: item.image.map(src => ({ src })) })
                }
                className="icon"
                size="lg"
                icon={faImages}
                style={{ cursor: 'pointer' }}
                title="View screenshots"
              />
              {item.link !== '#' && (
                <Card.Link href={item.link} target="_blank" rel="noopener noreferrer" title="Visit site">
                  <FontAwesomeIcon className="icon" size="lg" icon={faLink} />
                </Card.Link>
              )}
            </Card.Footer>
          </Card>
        </Col>
      ))}

      <Lightbox
        open={lightbox.open}
        close={() => setLightbox(s => ({ ...s, open: false }))}
        index={lightbox.index}
        slides={lightbox.slides}
        on={{ view: ({ index }) => setLightbox(s => ({ ...s, index })) }}
      />
    </Row>
  )
}

export default memo(PM)
