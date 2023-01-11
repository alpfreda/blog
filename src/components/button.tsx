import Icon from "./svg"

interface ButtonProps {
  text?: string,
  children?: any,
  icon?: any,
  iconClassName?: string
}

const Button = ({ icon, iconClassName, text, children }: ButtonProps) => {
  return <button className='btn'>
    {icon && <Icon name={icon} className={iconClassName} />}
    {children || text}
  </button>
}

export default Button