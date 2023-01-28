import { IconTypes } from "../../ts/types/icon.types"

export interface IconProps {
  name?: IconTypes
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  const SpecificStory = require(`./${name}`).default
  return <SpecificStory role='icon' className={className} />
}

export default Icon