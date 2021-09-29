import React from 'react'
import '/styles/globals.scss'
import Layout from '../components/layout/Layout.component'
import { Provider } from 'react-redux';
import { store } from '../app/store'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
