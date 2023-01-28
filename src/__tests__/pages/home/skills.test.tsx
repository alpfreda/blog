import { render, screen } from '@testing-library/react'
import { Skill } from '../../../ts/interfaces/skill.interface'
import Skills from '../../../pages/home/skills'

describe('<Skills/>', () => {
  it('render', () => {
    render(<Skills skills={[]} />)
    const skillsElement = screen.getByRole('list')

    expect(skillsElement).toBeInTheDocument()
  })

  it('should render two skills', () => {
    const skills: Skill[] = [
      { name: 'Javascript', icon: 'js', order: 1 },
      { name: 'Typescript', icon: 'typescript', order: 2 },
    ]
    render(<Skills skills={skills} />)
    const skillItemElements = screen.getAllByRole('listitem')

    expect(skillItemElements).toHaveLength(skills.length)
  })

  it('should render name correctly', () => {
    const skills: Skill[] = [{ name: 'Javascript', icon: 'js', order: 1 }]
    render(<Skills skills={skills} />)
    const skillsElement = screen.getByRole('list')

    expect(skillsElement).toHaveTextContent('Javascript')
  })
})
