import React from 'react'
import { Email, Github, Linkedin, Twitter } from '../../components/svg/icons'

const ContactInfo = () => {
  return <section>
    <div className='contact-item'>
      <Email className='contact-icon' /> Email:
      <a href='mailto:alpfreda@gmail.com' className='ml-1'>Alpfreda@gmail.com</a>
    </div>
    <div className='contact-item'>
      <Github className='contact-icon' /> Github:
      <a href='https://github.com/alpfreda' className='ml-1' target={'_blank'}>github.com/alpfreda</a>
    </div>
    <div className='contact-item'>
      <Linkedin className='contact-icon' /> Linkedin:
      <a href='https://linkedin.com/in/alpfreda' className='ml-1' target={'_blank'}>linkedin.com/in/alpfreda</a>
    </div>
    <div className='contact-item'>
      <Twitter className='contact-icon' /> Twitter:
      <a href='https://twitter.com/alpfreda' className='ml-1' target={'_blank'}>twitter.com/alpfreda</a>
    </div>
  </section>
}

export { ContactInfo }