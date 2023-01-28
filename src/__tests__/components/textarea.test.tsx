import { screen, render } from '@testing-library/react'
import TextArea from '../../components/textarea'

describe('<Textarea/>', () => {
  it('render', () => {
    render(<TextArea />)
    const textareaElement = screen.getByRole('textbox')

    expect(textareaElement).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    render(<TextArea icon='jest' />)
    const textareaElement = screen.getByRole('icon')

    expect(textareaElement).toBeInTheDocument()
  })

  it('should render with has-error class', () => {
    render(<TextArea hasError />)
    const textareaElement = screen.getByRole('group')

    expect(textareaElement).toHaveClass('has-error')
  })
})
