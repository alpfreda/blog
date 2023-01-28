import { render, screen } from '@testing-library/react'
import Button from '../../components/button'

describe('<Button/>', () => {
  it('render', () => {
    const text = 'Test Button'
    render(<Button text={text} />)
    const buttonElement = screen.getByText(text)

    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    render(<Button icon='jest' />)
    const buttonElement = screen.getByRole('icon')

    expect(buttonElement).toBeInTheDocument()
  })
})
