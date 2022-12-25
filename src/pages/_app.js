import '../assets/main.scss'
import { Layout } from './layout'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// import React from 'react'
import { Provider } from 'react-redux'
// import App from '../app'
import { store } from '../app/store'
// import '../assets/main.scss'

const App = ({ Component, pageProps }) => {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default App