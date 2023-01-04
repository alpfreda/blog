import React, { useEffect, useState } from 'react'
import { Email, Github, Linkedin, Twitter } from '../../components/svg/icons'

interface ContactInfoProps {
  items: {
    name: string,
    icon: string,
    url: string,
    value: string
  }[]
}

const ContactInfo = ({ items }: ContactInfoProps) => {
  return <section>
    {
      items.map((info: any) => <div
        key={info.name}
        className='contact-item'>
        <RenderIcon name={info.icon} />{info.name}:
        <a
          href={info.url}
          target='_blank'
          className='ml-1'>{info.value}</a>
      </div>)
    }
  </section>
}

interface RenderIconProps {
  name: string
}

const RenderIcon = ({ name }: RenderIconProps) => {
  switch (name) {
    case 'email':
      return <Email className='contact-icon' />
    case 'github':
      return <Github className='contact-icon' />
    case 'linkedin':
      return <Linkedin className='contact-icon' />
    case 'twitter':
      return <Twitter className='contact-icon' />
    default:
      return null
  }
}

export { ContactInfo }