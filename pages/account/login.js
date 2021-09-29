import React, { useEffect, useState } from 'react'
import LoginForm from '../../components/forms/login/LoginForm.component'
import Hero from '../../components/hero/Hero.component'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Loader from "react-loader-spinner";

export default function LoginPage() {
  const router = useRouter();
  const user = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.isLoggedIn) {
      router.push('/account')
    }
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(loader);

  }, [user, isLoading])
  return (
    <>
      {
        isLoading ?
          <div className="container colums is-center is-vcentered p-max">
            <div className="column has-text-centered">
              <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000} />
            </div>
          </div>
          :
          <>
            <Hero
              title="Login"
              subtitle="Enter your login details to sign into your account"
            />
            <LoginForm />
          </>

      }
    </>
  )
}
