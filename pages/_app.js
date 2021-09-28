import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import '/styles/globals.scss'
import Layout from '../components/layout/Layout.component'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import router, { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
        router.push('/');

      } else {
        setCurrentUser(null);
      }
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
