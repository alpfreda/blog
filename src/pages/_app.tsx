import { useState, useEffect } from 'react'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { Layout } from '../components/layout'
import { store } from '../app/store'
import Loading from '../components/loading'
import '../assets/main.scss'

interface Props {
  Component: any
  pageProps: any
}

const App = ({ Component, pageProps }: Props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        {loading ? (
          <Loading className='fixed-loading' />
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </Provider>
  )
}

export default App
