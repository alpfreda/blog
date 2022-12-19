import React from 'react'
import { Check, Email, Message, User } from '../../components/svg/icons'

const ContactForm = () => {
  return <div className='contact-form'>
    <div className='form-group'>
      <input type='text' className='form-style' placeholder='Full name' />
      <User className='input-icon' />
    </div>
    <div className='form-group'>
      <input type='email' className='form-style' placeholder='Email address' />
      <Email className='input-icon' />
    </div>
    <div className='form-group'>
      <textarea className='form-style' rows={5} placeholder='Message' />
      <Message className='input-icon' />
    </div>
    <div className='contact-btn-wrapper'>
      <button className='btn'><Check className='contact-btn-icon' /> Send Message</button>
    </div>
  </div>
}

export { ContactForm }