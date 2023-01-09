export interface IconProps {
  name?: 'email' | 'user' | 'message' | 'github' | 'linkedin' | 'twitter' | 'check' | 'js'
  | 'react' | 'redux' | 'jquery' | 'html5' | 'sass' | 'css3' | 'link' |
  'docker' | 'mqtt' | 'bootstrap' | 'node-js' | 'git' | 'jest' | 'babel' |
  'mongodb' | 'socket' | 'webpack' | 'material-ui' | 'semantic-ui' | 'testing-library'
  | 'microsoft' | 'ruler' | 'ci-cd' | 'typescript' | 'dots'
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  const SpecificStory = require(`./${name}`).default
  return <SpecificStory className={className} />
}

export default Icon