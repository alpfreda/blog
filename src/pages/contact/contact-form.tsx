import { useContactForm } from './contact-hook'
import Input from '../../components/input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import Loading from '../../components/loading'

const ContactForm = () => {
  const {
    error,
    nameRef,
    mailRef,
    messageRef,
    success,
    loading,
    handleSubmit,
  } = useContactForm()

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
        {success && (
          <div className='success-message'>
           Thanks 👋 It will be a pleasure to contact you. 
          </div>
        )}
        <div className='contact-btn-wrapper'>
          <Button
            icon='check'
            loading={loading}
            disabled={loading}
            iconClassName='contact-btn-icon'>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
