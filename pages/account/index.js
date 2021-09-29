import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';

export default function AccountPage() {
  const user = useSelector(state => state.user);
  const router = useRouter();

  useEffect(() => {
    if (user.isLoggedIn === false) {
      router.push('/');
    }
  }, [])

  return (
    <div>
      {!user.isLoggedIn ? null :
        <h1>Welcome to your account page!</h1>
      }
    </div>
  )
}
