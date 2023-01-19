import React from 'react'
import { Nav } from './nav'
import { Logo } from './logo'

const Navbar = () => {
  return (
    <header className='navbar-header'>
      <Logo />
      <Nav />
    </header>
  )
}

export { Navbar }
