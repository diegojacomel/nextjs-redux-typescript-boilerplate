// React
import React from 'react'

// Redux
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

// Next
import { AppProps } from 'next/app'

// Global styles
import { ThemeProvider } from '@emotion/react'
import { primaryTheme } from '../styles/theme'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ThemeProvider theme={primaryTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
