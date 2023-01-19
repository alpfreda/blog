import { TypeAnimation } from 'react-type-animation'
import { InfoItem } from '../../ts/interfaces/info.interface'

interface SummaryProps {
  items: InfoItem[]
}

const Summary = ({ items }: SummaryProps) => {
  return (
    <>
      {items.map((item: InfoItem) => (
        <TypeAnimation
          key={item.text}
          sequence={[item.duration, item.text, item.duration]}
          wrapper={item.tag}
          speed={item.speed}
          cursor={item.cursor}
          repeat={Infinity}
        />
      ))}
    </>
  )
}

export default Summary
