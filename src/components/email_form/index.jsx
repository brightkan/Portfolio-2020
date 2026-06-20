import { memo, useActionState, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import './style.css'
import emailjs from '@emailjs/browser'
import { Form, FormGroup, Modal, Image } from 'react-bootstrap'
import BarLoader from 'react-spinners/BarLoader'

async function sendEmail(_prevState, formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  try {
    await emailjs.send(
      'gmail',
      'template_m95oddd',
      { from_name: email, to_name: 'brightkanyange@outlook.com', subject, message_html: message },
      'user_ozBQ3OczNXETl6Qoz3oYm'
    )
    return { success: true, name, error: null }
  } catch {
    return { success: false, name: null, error: 'Failed to send message. Please try again.' }
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button className="btn contact-submit-btn btn-lg" type="submit" disabled={pending}>
      {pending ? 'Sending…' : 'Send Message'}
      <BarLoader width="60px" color="#000" loading={pending} style={{ marginLeft: 8 }} />
    </button>
  )
}

function EmailForm() {
  const [state, submitAction] = useActionState(sendEmail, { success: false, name: null, error: null })
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (state.success) setShowModal(true)
  }, [state.success])

  return (
    <>
      <Form action={submitAction} className="Contact-form">
        <p className="contact-form-header">Contact Form</p>
        <FormGroup className="contact_input">
          <Form.Control type="text" name="name" className="contact_input_text" placeholder="Your Name" required />
        </FormGroup>
        <FormGroup className="contact_input">
          <Form.Control type="email" name="email" className="contact_input_text" placeholder="Email Address" required />
        </FormGroup>
        <FormGroup className="contact_input">
          <Form.Control type="text" name="subject" className="contact_input_text" placeholder="Subject" required />
        </FormGroup>
        <FormGroup className="contact_input">
          <Form.Control as="textarea" rows={6} name="message" placeholder="Your message" className="contact_input_text" required />
        </FormGroup>
        <SubmitButton />
        {state.error && <p className="text-danger mt-2">{state.error}</p>}
      </Form>

      <Modal size="md" aria-labelledby="success-modal" show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="contact_success_modal_body">
          <Image
            className="contact_success_modal_img"
            src="https://icon-library.net/images/success-icon/success-icon-5.jpg"
            alt="Success"
          />
          <h5>
            Thank you <strong>{state.name}</strong>!! 😇
          </h5>
          <h6>Your message was successfully recorded</h6>
          <br />
          <button onClick={() => setShowModal(false)} className="contact-email-text-btn btn btn-outline-light btn-lg">
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default memo(EmailForm)
