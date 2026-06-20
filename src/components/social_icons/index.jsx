import { memo } from 'react'
import './style.css'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const links = [
  { href: 'https://www.facebook.com/smirkanrock/', icon: faFacebook, cls: 'fb', label: 'Facebook' },
  { href: 'https://github.com/brightkan',          icon: faGithub,   cls: 'git',     label: 'GitHub' },
  { href: 'https://twitter.com/brightkan2',        icon: faTwitter,  cls: 'twitter', label: 'Twitter' },
  { href: 'https://www.instagram.com/brightkanyange/?hl=en', icon: faInstagram, cls: 'insta', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/brightkan/', icon: faLinkedin, cls: 'linkedin', label: 'LinkedIn' },
]

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      {links.map(({ href, icon, cls, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          &nbsp;&nbsp;
          <FontAwesomeIcon className={cls} icon={icon} />
        </a>
      ))}
    </Col>
  )
}

export default memo(SocialIcons)
