import React, { useMemo } from 'react'
import { Skill } from '../../ts/interfaces/skill.interface'
import Icon from '../../components/svg'

interface SkillsProps {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  const decoratedSkills = useMemo(() => {
    return skills.sort((a, b) => a.order - b.order)
  }, [skills])

  return (
    <section className='skills'>
      {decoratedSkills.map((skill: Skill, index) => (
        <div
          key={skill.name}
          className='skill-item'
          style={{ animationDelay: `${10 + index / 2}s` }}>
          <Icon name={skill.icon} /> {skill.name}
        </div>
      ))}
    </section>
  )
}

export default Skills
