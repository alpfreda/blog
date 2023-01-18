import Loading from './loading'
import Icon from './svg'

interface ButtonProps {
  text?: string
  children?: any
  loading?: boolean
  disabled?: boolean
  icon?: any
  iconClassName?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({
  icon,
  iconClassName,
  text,
  loading,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button disabled={disabled} className='btn' role='button'>
      {icon && !loading && <Icon name={icon} className={iconClassName} />}
      {loading && <Loading className='btn-loading' />}
      {children || text}
    </button>
  )
}

export default Button
