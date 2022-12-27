import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Skills } from './home/skills'
import { fetchLists } from '../utils/firebase-provider'
import { Skill } from '../ts/interfaces/skill.interface'
import { HomeInfoItem } from '../ts/interfaces/info.interface'
import { Db } from '../ts/enums/db.enums'

interface HomeProps {
  items: HomeInfoItem[],
  skills: Skill[],
}

const Home = ({ items, skills }: HomeProps) => {
  return <section className='introduce-summary'>
    {
      items.map((item: HomeInfoItem) => <TypeAnimation
        key={item.text}
        sequence={[
          item.duration,
          item.text,
          item.duration,
        ]}
        wrapper={item.tag}
        speed={item.speed}
        cursor={item.cursor}
        repeat={Infinity}
      />)
    }
    <Skills skills={skills} />
  </section>
}

Home.getInitialProps = async () => {
  const items = await fetchLists(Db.HOME)
  const skills = await fetchLists(Db.SKILLS)
  return { items, skills }
}

export default Home 