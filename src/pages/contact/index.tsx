import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveMenu } from '../../features/global'
import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'

const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveMenu('CONTACT'))
  }, [])

  return <section className='contact'>
    {/* <Breadcrumb /> */}
    <h2 className='title'>Contact</h2>
    <ContactInfo />
    <ContactForm />
  </section>
}

export { Contact }