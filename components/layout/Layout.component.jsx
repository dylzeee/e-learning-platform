import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer.component'
import Navbar from '../navbar/Navbar.component'
import { useSelector, useDispatch } from 'react-redux'
import { userSignIn } from '../../features/user/userSlice';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import router, { useRouter } from 'next/router'

export default function Layout({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const dispatch = useDispatch()

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatch(userSignIn())
        });


      } else {
        setCurrentUser(null);
      }
      return () => {
        unsubscribeFromAuth();
      }
    })
  }, [])

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
