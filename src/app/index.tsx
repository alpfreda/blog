import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { Navbar } from '../pages/layout/navbar'
import { Home } from '../pages/home'
import { Contact } from '../pages/contact'
import { Blog } from '../pages/blog'
import { Resume } from '../pages/resume'

const App = () => {
  return <section className='app-content'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='resume' element={<Resume />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  </section>
}

export default App