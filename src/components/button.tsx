import Icon from './svg'

interface ButtonProps {
  text?: string
  children?: any
  icon?: any
  iconClassName?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({ icon, iconClassName, text, children }: ButtonProps) => {
  return (
    <button className='btn' role='button'>
      {icon && <Icon name={icon} className={iconClassName} />}
      {children || text}
    </button>
  )
}

export default Button
