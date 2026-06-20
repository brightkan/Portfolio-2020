import { memo, useState, useEffect, useCallback } from 'react'
import './style.css'
import { Col, Row, Card, Button, Image } from 'react-bootstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import GitLogo from '../../assets/img/git.svg'

function PCD() {
  const [repos, setRepos] = useState([])
  const [toast, setToast] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/brightkan/repos?per_page=100&sort=updated')
      .then(r => r.json())
      .then(data => Array.isArray(data) && setRepos(data))
      .catch(() => {})
  }, [])

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }, [])

  return (
    <>
      {toast && (
        <div className="copy-toast" role="alert">
          {toast}
        </div>
      )}
      <Row>
        {repos.map(item => (
          <Col xl={6} key={item.id}>
            <Card className="pro_card">
              <Row>
                <Col xl={12} className="project_img_container">
                  <Image className="project_card_left_img" src={GitLogo} alt="GitHub" />
                </Col>
                <Col xl={12}>
                  <Card.Title className="repoName">Name: {item.name}</Card.Title>
                  <Card.Subtitle className="repoInfo">
                    Location: {item.full_name} <br />
                    Created: {new Date(item.created_at).toLocaleDateString()} <br />
                    Updated: {new Date(item.updated_at).toLocaleDateString()}
                  </Card.Subtitle>
                  <Card.Body className="project_card_main">
                    <CopyToClipboard text={item.ssh_url} onCopy={() => showToast('SSH URL copied 🤩')}>
                      <Button variant="outline-light" size="lg" className="modal-exit-btn about_modal">SSH</Button>
                    </CopyToClipboard>
                    <CopyToClipboard text={item.clone_url} onCopy={() => showToast('HTTPS URL copied 👍')}>
                      <Button variant="outline-light" size="lg" className="modal-exit-btn about_modal">HTTPS</Button>
                    </CopyToClipboard>
                    <Button
                      as="a"
                      href={item.svn_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-light"
                      size="lg"
                      className="modal-exit-btn about_modal"
                    >
                      VIEW
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default memo(PCD)
