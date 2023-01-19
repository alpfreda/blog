import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MENUS = [
  { path: '/', name: 'Home' },
  { path: '/blog', name: 'Blog' },
  { path: '/resume', name: 'Resume' },
  { path: '/contact', name: 'Contact' },
]
const Nav = () => {
  const router = useRouter()
  const path = router.asPath.split('?')[0]

  return (
    <nav className='navbar-header-nav'>
      <ul>
        {MENUS.map((menu) => (
          <li key={menu.name}>
            <Link
              className={`navbar-item ${path === menu.path ? 'active' : ''}`}
              href={menu.path}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Nav }
