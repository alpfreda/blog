import React from 'react'
import ContactForm from './contact-form'
import ContactInfo from './contact-info'
import { ContactInfoInterface } from '../../ts/interfaces/contact-info-interface'
import { fetchLists } from '../../utils/firebase-provider'

interface Props {
  items: ContactInfoInterface[]
}

const Contact = ({ items }: Props) => {
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
