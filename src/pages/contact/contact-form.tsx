import React, { useEffect, useRef, useState } from 'react'
import { Check, Email, Message, User } from '../../components/svg/icons'
import { postData } from '../../utils/firebase-provider'

const ContactForm = () => {
  const [error, setError] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const mailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nameRef.current.value || !mailRef.current.value || !messageRef.current.value) {
      return setError('Please fill all fields')
    }

    try {
      await postData('contact', {
        name: nameRef.current.value,
        mail: mailRef.current.value,
        message: messageRef.current.value
      })
      resetForm()
      setError(null)
    } catch (error) {
      return setError('Some unacceptable error occurred')
    }
  }

  const resetForm = () => {
    nameRef.current.value = ''
    mailRef.current.value = ''
    messageRef.current.value = ''
  }

  return <div className='contact-form'>
    <form onSubmit={handleSubmit}>
      <div className={['form-group', error && !nameRef.current.value ? 'has-error' : ''].join(' ')}>
        <input
          ref={nameRef}
          type='text'
          className='form-style'
          placeholder='Full name' />
        <User className='input-icon' />
      </div>
      <div className={['form-group', error && !mailRef.current.value ? 'has-error' : ''].join(' ')}>
        <input
          ref={mailRef}
          type='email'
          className='form-style'
          placeholder='Email address' />
        <Email className='input-icon' />
      </div>
      <div className={['form-group', error && !messageRef.current.value ? 'has-error' : ''].join(' ')}>
        <textarea
          ref={messageRef}
          className='form-style'
          rows={5}
          placeholder='Message' />
        <Message className='input-icon' />
      </div>
      {
        error && <div className='error-message'>{error}</div>
      }
      <div className='contact-btn-wrapper'>
        <button className='btn'><Check className='contact-btn-icon' /> Send Message</button>
      </div>
    </form>
  </div>
}

export { ContactForm }