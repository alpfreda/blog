import { useState, useEffect } from 'react'
import '../assets/main.scss'
import { Layout } from './layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import Router from "next/router"
import { Loading } from '../components/loading'
// import Head from "next/head"
// import Router from "next/router"

// Router.onRouteChangeStart = url => {
//   NProgress.start()
// }

// Router.onRouteChangeComplete = () => NProgress.done()

// Router.onRouteChangeError = () => NProgress.done()

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      console.log("start")
      setLoading(true)
    }
    const end = () => {
      console.log("finished")
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return <Provider store={store}>
    <Layout>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </Layout>
  </Provider>
}

export default App