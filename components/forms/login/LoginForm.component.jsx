import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signInWithGoogle } from '../../../firebase/firebase.utils'
import { errorAlert } from '../../../utils/Alerts';
import { auth } from '../../../firebase/firebase.utils';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { userSignIn } from '../../../features/user/userSlice'

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    await router.push('/account');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setLoading(false);

      dispatch(userSignIn({
        email,
        displayName
      }));

      router.push('/account')

    } catch (error) {

      if (error.message.includes('user-not-found')) {
        errorAlert("No user was found with that email address. Please fix the error & try again.")
        setEmail('');
        setUserError(true);
      } else if (error.message.includes('wrong-password')) {
        errorAlert("Incorrect password. Please fix the error & try again.")
        setPassword('');
        setPassError(true);
      } else {
        errorAlert(" There has been an error, please try again.")
        setEmail('');
        setPassword('');
      }

      setLoading(false);
    }
  }

  return (
    <section className='section columns is-centered'>
      <div style={{ maxWidth: '450px' }} className="container mx-max box px-medium px-small-mobile is-centered-mobile">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                onChange={(e) => { setEmail(e.target.value); setUserError(false) }}
                className={`input ${userError ? 'is-danger' : null}`}
                type="email" placeholder="example@email.com" />
            </div>
            {userError && <p className="help is-danger">This email is invalid</p>}
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                onChange={e => { setPassword(e.target.value); setPassError(false) }}
                className={`input ${passError ? 'is-danger' : null}`}
                type="password" placeholder="Enter your password" />
            </div>
            {passError && <p className="help is-danger">Password is invalid</p>}
          </div>
          <div className="buttons is-flex is-flex-direction-row my-medium is-justify-content-space-evenly">
            <button
              className={`button is-primary is-light is-outlined ${loading ? 'is-loading' : null}`}
              style={{ width: '40%' }}
              disabled={!email || !password || loading ? true : false}
            >
              Log in
            </button>
            <button
              type="button"
              className='button has-background-google has-text-white'
              onClick={handleGoogleSignIn} style={{ width: '50%' }}>
              <span className="icon">
                <FcGoogle />
              </span>
              <span>Sign-in with Google</span>
            </button>

          </div>
        </form>
      </div>
    </section>
  )
}

