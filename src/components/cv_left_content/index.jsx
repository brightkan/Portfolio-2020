import { memo, useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import cv1 from '../../assets/img/cv1.png'
import cv2 from '../../assets/img/cv2.png'
import cv3 from '../../assets/img/cv3.png'
import cv4 from '../../assets/img/cv4.png'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Modal, Button } from 'react-bootstrap'
import Projects from '../projects'
import { Link } from 'react-router-dom'

const cvSlides = [cv1, cv2, cv3, cv4].map(src => ({ src }))

const ColoredLine = ({ color }) => (
  <hr style={{ color, backgroundColor: color, height: 1 }} />
)

function CLC() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="clc_main slide-in-left">
      <div className="clc_container">
        <h1 className="clc_header fade-in-down">About</h1>
        <ColoredLine color="#FFC466" />

        <p className="clc_bio fade-in-down">
          I'm a Software Engineer and Product Manager based in Rwanda, with a BSc in Computer
          Science. I specialise in building scalable web applications and mobile solutions —
          Python &amp; Django on the backend, React on the web, and Flutter for mobile.
        </p>

        <div className="clc_skills fade-in-down">
          <h5 className="clc_skills_heading">Core Skills</h5>
          <div className="clc_skills_grid">
            <span>Python</span><span>Django</span><span>REST APIs</span>
            <span>React</span><span>JavaScript</span><span>Flutter</span>
            <span>Dart</span><span>Git</span><span>Linux</span>
          </div>
        </div>

        <ColoredLine color="rgba(255,196,102,0.3)" />

        <div className="AboutBtnContainer fade-in-down">
          <Link to="/projects" className="left">
            <FontAwesomeIcon icon={faHdd} className="left_icon" />
            <span className="action_card_title">Projects & Experiences</span>
            <span className="action_card_desc">View my work →</span>
          </Link>
          <div className="right" role="button" tabIndex={0} onClick={() => setShowModal(true)} onKeyDown={e => e.key === 'Enter' && setShowModal(true)}>
            <FontAwesomeIcon icon={faGithubSquare} className="right_icon" />
            <span className="action_card_title">Git Projects</span>
            <span className="action_card_desc">Browse repositories →</span>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={cvSlides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />

      <Modal show={showModal} size="xl" onHide={() => setShowModal(false)} centered>
        <Modal.Header className="modalHeader" closeButton>
          <Projects />
        </Modal.Header>
        <Button onClick={() => setShowModal(false)} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
          Close
        </Button>
      </Modal>
    </div>
  )
}

export default memo(CLC)
