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

  // useEffect(() => {
  //   const skills = [
  //     { order: 4, icon: 'redux', name: 'Redux' },
  //     { order: 5, icon: 'jquery', name: 'JQuery' },
  //     { order: 6, icon: 'html5', name: 'HTML5' },
  //     { order: 7, icon: 'css3', name: 'CSS3' },
  //     { order: 8, icon: 'sass', name: 'Sass' },
  //     { order: 9, icon: 'redux', name: 'Redux-toolkit' },
  //     { order: 10, icon: 'bootstrap', name: 'Bootstrap' },
  //     { order: 11, icon: 'nodejs', name: 'NodeJS' },
  //     { order: 12, icon: 'git', name: 'Git' },
  //     { order: 13, icon: 'jest', name: 'Jest' },
  //     { order: 14, icon: 'babel', name: 'Babel' },
  //     { order: 15, icon: 'mongodb', name: 'MongoDB' },
  //     { order: 16, icon: 'socketio', name: 'Socket.IO' },
  //     { order: 17, icon: 'webpack', name: 'Webpack' },
  //     { order: 18, icon: 'materialui', name: 'Material UI' },
  //     { order: 19, icon: 'semanticui', name: 'Semantic UI' },
  //     { order: 20, icon: 'testinglibrary', name: 'Testing Library' },
  //     { order: 21, icon: 'microsoft', name: '.NET core' },
  //     { order: 22, icon: 'ruler', name: 'Perfect Pixel' },
  //     { order: 23, icon: 'link', name: 'Restful API' },
  //     { order: 24, icon: 'docker', name: 'Docker' },
  //     { order: 25, icon: 'mqtt', name: 'MQTT' },
  //     { order: 26, icon: 'cicd', name: 'CI/CD' },
  //   ]
  //   skills.forEach(async ()  => {
  //     await postData('skills', {
  //       name: nameRef.current.value,
  //       mail: mailRef.current.value,
  //       message: messageRef.current.value
  //     })
  //   })

  // }, [])

  // const skills = [
  //   { icon:s />, name: 'JavaScript' },
  //   { icon:s />, name: 'ES6' },
  //   { icon: n />, name: 'React' },
  //   { icon: x />, name: 'Redux' },
  //   { icon: y />, name: 'JQuery' },
  //   { icon: 5 />, name: 'HTML5' },
  //   { icon: 3 />, name: 'CSS3' },
  //   { icon: s />, name: 'Sass' },
  //   { icon: x />, name: 'Redux-toolkit' },
  //   { icon: p />, name: 'Bootstrap' },
  //   { icon: s />, name: 'NodeJS' },
  //   { icon: t />, name: 'Git' },
  //   { icon: t />, name: 'Jest' },
  //   { icon: l />, name: 'Babel' },
  //   { icon: B />, name: 'MongoDB' },
  //   { icon: O />, name: 'Socket.IO' },
  //   { icon: k />, name: 'Webpack' },
  //   { icon: I />, name: 'Material UI' },
  //   { icon: I />, name: 'Semantic UI' },
  //   { icon: y />, name: 'Testing Library' },
  //   { icon: t />, name: '.NET core' },
  //   { icon: r />, name: 'Perfect Pixel' },
  //   { icon: k />, name: 'Restful API' },
  //   { icon: r />, name: 'Docker' },
  //   { icon: t />, name: 'MQTT' },
  //   { icon: d />, name: 'CI/CD' },
  // ]

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