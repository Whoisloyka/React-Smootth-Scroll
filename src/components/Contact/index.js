import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_0yx4r5q",
        "template_02lgpwi",
        form.current,
        "4TH1INOL9GKcrJ0H4"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='container mt-5 mb-5' id='contact'>
      <h2 className='mb-3'>İletişim Formu</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='mb-3'>
          <label className='form-label' htmlFor='name'>
            İsim
          </label>
          <input
            className='form-control'
            type='text'
            name='user_name'
            id='name'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            className='form-control'
            type='email'
            name='user_email'
            id='email'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='message'>
            Mesajınız
          </label>
          <textarea
            name='message'
            className='form-control'
            id='message'
            required
          />
        </div>
        <input className='btn btn-success' type='submit' value='Gönder' />
      </form>
    </div>
  )
}
export default ContactForm
