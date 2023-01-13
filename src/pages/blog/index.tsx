import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveMenu } from '../../features/global'
import Link from 'next/link'

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveMenu('BLOG'))
  }, [])

  return <section className='blog'>
    <h2 className='title'>Blog</h2>

    <div className='blog-item'>
      <Link href='#'>Authors who are not eligible to receive charge waivers or discounts may choose the first option of payment for the article processing charge</Link>
      <div className='blog-time'><em>July, 2022</em></div>
    </div>
    <div className='blog-item'>
      <Link href='#'>Fake Interview: The New Activity of Charming Kitten</Link>
      <div className='blog-time'><em>July, 2022</em></div>
    </div>
  </section>
}

export default Blog