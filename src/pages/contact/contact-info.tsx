import Icon from '../../components/svg'
import { ContactInfoInterface } from '../../ts/interfaces/contact-info-interface'

interface Props {
  items: ContactInfoInterface[]
}

const ContactInfo = ({ items }: Props) => {
  return (
    <section>
      {items.map((info: ContactInfoInterface) => (
        <div key={info.name} className='contact-item'>
          <Icon name={info.icon} className='contact-icon' /> {info.name}:
          <a href={info.url} target='_blank' className='contact-item-link'>
            {info.value}
          </a>
        </div>
      ))}
    </section>
  )
}

export default ContactInfo
