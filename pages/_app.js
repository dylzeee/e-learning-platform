import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import '/styles/globals.scss'
import Layout from '../components/layout/Layout.component'
import { auth } from '../firebase/firebase.utils';


export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      return () => {
        unsubscribeFromAuth();
      }
    })
  }, [currentUser])


  return (
    <Layout user={currentUser}>
      <Component {...pageProps} />
    </Layout>
  )
}
