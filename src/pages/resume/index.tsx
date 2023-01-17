import React from 'react'
import { Experiences } from './experiences'

type props = {
  content: string
}

const Resume = ({ content }: props) => {
  return (
    <section className='resume-content'>
      <h2 className='title'>Resume</h2>
      <Experiences content={content} />
    </section>
  )
}

Resume.getInitialProps = async () => {
  const content = await require('./info.md')
  return { content: content.default }
}

export default Resume
