import React from 'react'
import ContactForm from './contact-form'
import ContactInfo from './contact-info'
import { fetchLists } from '../../utils/firebase-provider'

interface ContactProps {
  items: {
    name: string
    icon: string
    url: string
    value: string
  }[]
}

const Contact = ({ items }: ContactProps) => {
  return (
    <section className='contact'>
      <h2 className='title'>Contact</h2>
      <ContactInfo items={items} />
      <ContactForm />
    </section>
  )
}

Contact.getInitialProps = async () => {
  const items = await fetchLists('contact-info')
  return { items }
}

export default Contact
