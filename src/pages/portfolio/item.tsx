import Icon from '../../components/svg'
import { IconTypes } from '../../ts/types/icon.types'

interface ItemProps {
  portfolio: {
    name: string
    demo: string
    source: string
    skills: {
      icon: IconTypes
      name: string
    }[]
  }
}

const Item = ({ portfolio }: ItemProps) => {
  return (
    portfolio && <div className='portfolio-item'>
      <h3>{portfolio.name}</h3>
      <div className='portfolio-item-skills'>
        {portfolio.skills.map((skill: any) => (
          <div
            key={skill.name}
            className='portfolio-item-skills-item'>
            <Icon
              className='portfolio-item-skills-icon'
              name={skill.icon as IconTypes}
            />
            {skill.name}
          </div>
        ))}
      </div>
      <div className='portfolio-item-skills-action'>
        <a target='_blank' href={portfolio.demo}>Demo</a>
        <a target='_blank' href={portfolio.source}>Source</a>
      </div>
    </div>
  )
}

export default Item
