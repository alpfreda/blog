import React from 'react'
import { TypeScript } from "../../components/svg/typescript"
import { CiCd } from "../../components/svg/ci-cd"
import { Mqtt } from "../../components/svg/mqtt"
import { Docker } from "../../components/svg/cocker"
import { Link } from "../../components/svg/link"
import { Ruler } from "../../components/svg/ruler"
import { Microsoft } from "../../components/svg/microsoft"
import { TestingLibrary } from "../../components/svg/testing-library"
import { SemanticUI } from "../../components/svg/semantic-ui"
import { MaterialUI } from "../../components/svg/material-ui"
import { Webpack } from "../../components/svg/webpack"
import { SocketIO } from "../../components/svg/socket-io"
import { MongoDB } from "../../components/svg/mongodb"
import { Babel } from "../../components/svg/babel"
import { Jest } from "../../components/svg/jest"
import { Git } from "../../components/svg/git"
import { NodeJs } from "../../components/svg/nodejs"
import { Bootstrap } from "../../components/svg/bootstrap"
import { Sass } from "../../components/svg/sass"
import { Css3 } from "../../components/svg/css3"
import { JQuery } from "../../components/svg/jquery"
import { Html5 } from "../../components/svg/html5"
import { Redux } from "../../components/svg/redux"
import { ReactIcon } from "../../components/svg/react-icon"
import { Js } from "../../components/svg/js"
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