import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TypeAnimation } from 'react-type-animation'
import { setActiveMenu } from '../../features/global'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveMenu('HOME'))
  }, [])

  return <section className='introduce-summary'>
    <TypeAnimation
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
        'Front-end developer with more than 5 years of experience leveraging JavaScript to build responsive and mobile-first applications. Skilled in developing and testing multiple web-based applications incorporating a range of technologies. Mentored more than 6 developers to learn front-end development. Developing perfect pixel applications has been important to me through the years. I am ready to apply my passion for coding to a talented engineering team to develop high-quality solutions.', 
        5000,
      ]}
      speed={70}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  </section>
}

export { Home }