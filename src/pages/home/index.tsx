import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeAnimation } from 'react-type-animation'
import { setActiveMenu } from '../../features/global'
import { Skills } from '../resume/skills'
import { fetchLists } from '../../utils/firebase-provider'

const Home = () => {
  const [home, setHome] = useState<any>([])
  useEffect(() => {
    async function fetchMyAPI() {
      const d = await fetchLists('home')
      setHome(d)
    }
    fetchMyAPI()
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveMenu('HOME'))
  }, [])

  console.log(home)
  return <section className='introduce-summary'>
    {
      home.map((h: any) => <TypeAnimation
        key={h.text}
        sequence={[
          h.text,
          5000,
        ]}
        wrapper="div"
        speed={h.speed}
        cursor={h.cursor}
        repeat={Infinity}
      />)
    }
    {/* <TypeAnimation
      sequence={[
        '/* Hello',
        5000,
      ]}
      wrapper="div"
      speed={60}
      cursor={false}
      repeat={Infinity}
    />
    <TypeAnimation
      sequence={[
        1000,
        'Front-end developer with more than 5 years of experience leveraging JavaScript to build responsive and mobile-first applications. Skilled in developing and testing multiple web-based applications of the most up-to-date tools and frameworks. Experience in handling complex code and focusing on writing clean and robust code. Produce plans and improve designs for usability and functionality.',
        5000,
      ]}
      speed={80}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    /> */}
    <Skills />
  </section>
}

export { Home }