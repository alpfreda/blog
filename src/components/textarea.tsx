import { forwardRef } from 'react'
import Icon from "./svg"

interface TextAreaProps {
  hasError?: boolean,
  icon?: any,
  placeholder?: string,
  iconClassName?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ hasError, icon, placeholder, iconClassName }: TextAreaProps, ref) => {
  return <div className={['form-group', hasError ? 'has-error' : ''].join(' ')}>
    <textarea
      ref={ref}
      rows={5}
      className='form-style'
      placeholder={placeholder} />
    {icon && <Icon name={icon} className={iconClassName} />}
  </div>
})

export default TextArea