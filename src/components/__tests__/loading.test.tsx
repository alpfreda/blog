import { render, screen } from '@testing-library/react'
import Loading from '../loading'

describe('<Loading/>', () => {
  render(<Loading />)
  const loadingElement = screen.getByRole('loading')

  it('render', () => {
    expect(loadingElement).toBeInTheDocument()
  })
})
