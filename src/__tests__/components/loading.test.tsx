import { render, screen } from '@testing-library/react'
import Loading from '../../components/loading'

describe('<Loading/>', () => {
  render(<Loading />)
  const loadingElement = screen.getByRole('loading')

  it('render', () => {
    expect(loadingElement).toBeInTheDocument()
  })
})
