import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RegisterForm from '../../components/forms/register/RegisterForm.component'
import Hero from '../../components/hero/Hero.component'
import Link from 'next/link'
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux'

export default function RegisterPage() {
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
              title="Register"
              subtitle="Fill out the form to register to the best E-Learning platform in the world."
            />
            <section className='section pb-max columns is-centered'>
              <div className='container box mx-max p-large is-max-desktop px-small-mobile is-centered-mobile is-relative'>
                <div className='p-small is-absolute' style={{ right: '40px', top: '20px' }}>
                  <p className='has-text-primary is-size-6'>
                    Already registered?
                    <Link href='/account/login'>Login</Link>
                  </p>
                </div>
                <RegisterForm />
              </div>
            </section>
          </>
      }
    </>
  )
}
