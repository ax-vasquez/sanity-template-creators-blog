import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )


}

export default MyApp
