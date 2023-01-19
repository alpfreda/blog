import React from 'react'
import { Navbar } from './navbar'

interface childrenProps {
  children: JSX.Element
}

const Layout = ({ children }: childrenProps) => {
  return <section className='app-content'>
    <Navbar />
    {children}
  </section>
}

export { Layout }