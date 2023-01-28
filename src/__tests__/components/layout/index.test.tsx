import { screen, render } from '@testing-library/react'
import { Layout } from '../../../components/layout'
jest.mock('next/router', () => require('next-router-mock'));

describe('<Layout/>', () => {
  it('render', () => {
    render(<Layout children={<div>Hello</div>} />)
    const helloElement = screen.getByText('Hello')

    expect(helloElement).toBeInTheDocument()
  })
})
