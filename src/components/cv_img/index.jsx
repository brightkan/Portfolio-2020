import { memo, useState } from 'react'
import './style.css'
import cv1 from '../../assets/img/cv1.png'
import cv2 from '../../assets/img/cv2.png'
import cv3 from '../../assets/img/cv3.png'
import cv4 from '../../assets/img/cv4.png'
import cv from '../../assets/img/cv.png'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const slides = [cv1, cv2, cv3, cv4].map(src => ({ src }))

function CRI() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="roll-in-right cv_img_wrapper">
      <img
        src={cv}
        onClick={() => setOpen(true)}
        className="cv_img_mouse"
        alt="Bright Kanyange CV preview"
      />
      <span className="cv_img_label">Click to view full CV</span>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </div>
  )
}

export default memo(CRI)
