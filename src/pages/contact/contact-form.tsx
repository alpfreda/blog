import { useContactForm } from './contact-hook'
import Input from '../../components/input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'

const ContactForm = () => {
  const { error, nameRef, mailRef, messageRef, handleSubmit } = useContactForm()

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <Input
          ref={nameRef}
          type='text'
          hasError={error && !nameRef.current.value}
          icon='user'
          placeholder='Full Name'
          iconClassName='input-icon'
        />
        <Input
          ref={mailRef}
          type='email'
          hasError={error && !mailRef.current.value}
          icon='email'
          placeholder='Email address'
          iconClassName='input-icon'
        />
        <TextArea
          ref={messageRef}
          hasError={error && !messageRef.current.value}
          icon='message'
          placeholder='Message'
          iconClassName='input-icon'
        />
        {error && <div className='error-message'>{error}</div>}
        <div className='contact-btn-wrapper'>
          <Button icon='check' iconClassName='contact-btn-icon'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
