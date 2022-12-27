import React from 'react'
import {
  Babel, Bootstrap, MongoDB, Css3, Git, Html5, Jest, JQuery,
  Js, Link, NodeJs, ReactIcon, Redux, Sass, SocketIO, Webpack, MaterialUI,
  SemanticUI, TestingLibrary, Microsoft, Ruler, Docker, Mqtt, CiCd, TypeScript
} from '../../components/svg/icons'
import { Skill } from '../../ts/interfaces/skill.interface'

interface SkillsProps {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  return <section className='skills'>
    {
      skills
        .sort((a, b) => a.order - b.order)
        .map((skill: Skill, index) => <div
          key={skill.name}
          className='skill-item'
          style={{ animationDelay: `${10 + index / 2}s` }}    >
          <RenderIcon name={skill.icon} /> {skill.name}
        </div>)
    }
  </section>
}

interface RenderIconProps {
  name: string
}

const RenderIcon = ({ name }: RenderIconProps) => {
  switch (name) {
    case 'js':
      return <Js />
    case 'react':
      return <ReactIcon />
    case 'redux':
      return <Redux />
    case 'jquery':
      return <JQuery />
    case 'html5':
      return <Html5 />
    case 'css3':
      return <Css3 />
    case 'sass':
      return <Sass />
    case 'redux':
      return <Redux />
    case 'bootstrap':
      return <Bootstrap />
    case 'nodejs':
      return <NodeJs />
    case 'git':
      return <Git />
    case 'jest':
      return <Jest />
    case 'babel':
      return <Babel />
    case 'mongodb':
      return <MongoDB />
    case 'socketIO':
      return <SocketIO />
    case 'webpack':
      return <Webpack />
    case 'materialUi':
      return <MaterialUI />
    case 'semanticUi':
      return <SemanticUI />
    case 'testingLibrary':
      return <TestingLibrary />
    case 'microsoft':
      return <Microsoft />
    case 'ruler':
      return <Ruler />
    case 'link':
      return <Link />
    case 'docker':
      return <Docker />
    case 'mqtt':
      return <Mqtt />
    case 'cicd':
      return <CiCd />
    case 'typescript':
      return <TypeScript />
    default:
      return null
  }
}

export { Skills }