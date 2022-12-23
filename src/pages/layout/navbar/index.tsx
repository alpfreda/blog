import React from 'react'
import { Nav } from './nav'
import { Dots } from '../../../components/svg/dots'
import { Logo } from './logo'

const Navbar = () => {
  return <header className='navbar-header'>
    <Dots />
    <Logo />
    <Nav />
  </header>
}

export { Navbar }