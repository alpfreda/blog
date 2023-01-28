import { render, screen } from '@testing-library/react'
import Input from '../../components/input'

describe('<Input/>', () => {
  it('render', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')

    expect(inputElement).toBeInTheDocument()
  })

  it('should render with an icon',()=>{
    render(<Input icon='jest' />)
    const inputElement = screen.getByRole('icon')

    expect(inputElement).toBeInTheDocument()
  })

  it('should render with has-error class', () => {
    render(<Input hasError />)
    const inputElement = screen.getByRole('group')

    expect(inputElement).toHaveClass('has-error')
  })
})
