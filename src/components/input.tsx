import { forwardRef } from 'react'
import Icon from './svg'

interface InputProps {
  hasError?: boolean
  icon?: any
  placeholder?: string
  type?: 'email' | 'text' | 'number'
  iconClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, icon, type, placeholder, iconClassName }: InputProps, ref) => {
    return (
      <div
        role='group'
        className={['form-group', hasError ? 'has-error' : ''].join(' ')}>
        <input
          role='textbox'
          ref={ref}
          type={type || 'text'}
          className='form-style'
          placeholder={placeholder}
        />
        {icon && <Icon name={icon} className={iconClassName} />}
      </div>
    )
  }
)

export default Input
