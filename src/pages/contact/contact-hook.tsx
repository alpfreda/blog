import { useRef, useState } from 'react'
import { usePost } from '../../utils/firebase-provider'

const useContactForm = () => {
  const [error, setError] = useState('')
  const { fetch, loading, success } = usePost('contact')
  const nameRef = useRef<HTMLInputElement>(null)
  const mailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !nameRef.current.value ||
      !mailRef.current.value ||
      !messageRef.current.value
    ) {
      return setError('Please fill all fields')
    }

    try {
      await fetch({
        name: nameRef.current.value,
        mail: mailRef.current.value,
        message: messageRef.current.value,
      })
      resetForm()
      setError(null)
    } catch (error) {
      return setError('Some unacceptable error occurred')
    }
  }

  const resetForm = () => {
    nameRef.current.value = ''
    mailRef.current.value = ''
    messageRef.current.value = ''
  }

  return {
    error,
    loading,
    success,
    nameRef,
    mailRef,
    messageRef,
    handleSubmit,
    resetForm,
  }
}

export { useContactForm }
