import React from 'react'
import { fetchLists } from '../utils/firebase-provider'
import { Skill } from '../ts/interfaces/skill.interface'
import { InfoItem } from '../ts/interfaces/info.interface'
import { Db } from '../ts/enums/db.enums'
import Skills from './home/skills'
import Summary from './home/summary'

interface Props {
  items: InfoItem[]
  skills: Skill[]
}

const Home = ({ items, skills }: Props) => {
  return (
    <section className='introduce-summary'>
      <Summary items={items} />
      <Skills skills={skills} />
    </section>
  )
}

Home.getInitialProps = async () => {
  const items = await fetchLists(Db.HOME)
  const skills = await fetchLists(Db.SKILLS)
  return { items, skills }
}

export default Home
