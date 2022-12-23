import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { selectActiveMenu } from '../../../features/global'

const Nav = () => {
  const activeMenu = useSelector(selectActiveMenu)

  return <nav className='navbar-header-nav'>
    <ul>
      <li><Link className={`navbar-item ${activeMenu === 'HOME' ? 'active' : ''}`} href='/'>Home</Link></li>
      <li><Link className={`navbar-item ${activeMenu === 'BLOG' ? 'active' : ''}`} href='blog'>Blog</Link></li>
      <li><Link className={`navbar-item ${activeMenu === 'RESUME' ? 'active' : ''}`} href='resume'>Resume</Link></li>
      <li><Link className={`navbar-item ${activeMenu === 'CONTACT' ? 'active' : ''}`} href='contact'>Contact</Link></li>
    </ul>
  </nav>
}

export { Nav }