import ReactMarkdown from 'react-markdown'

type props = {
  content: string
}

const Experiences = ({ content }: props) => {
  return (
    <section>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  )
}

export default Experiences
