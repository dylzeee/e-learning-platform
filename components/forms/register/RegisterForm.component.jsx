import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';
import { useRouter } from 'next/router'
import { errorAlert } from '../../../utils/Alerts';
import { useSelector, useDispatch } from 'react-redux';
import { userSignIn } from '../../../features/user/userSlice'

export default function RegisterForm() {
  const user = useSelector(state => state.user)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordNoMatch, setPasswordNoMatch] = useState(false);
  const [passNotGood, setPassNotGood] = useState(false);
  const [nameError, setNameError] = useState(false)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.match(/[A-Z]/) || !password.match(/[0-9]/) || password.length < 7) {
      errorAlert('Password must be minimum 7 characters and contain a combination that includes capital letters and numbers');
      setPassNotGood(true)
      return;
    }
    if (password !== confirmPassword) {
      errorAlert("Passwords don't match, please try again!");
      setPasswordNoMatch(true);
      return;
    }
    if (displayName.length < 5) {
      errorAlert("Display name must be at least 5 characters")
      setNameError(true);
      return
    };
    if (!agreeToTerms) {
      errorAlert("You must agree to the terms and conditions.")
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })

      setFirstName('');
      setLastName('');
      setPassword('');
      setConfirmPassword('');
      setDisplayName('');
      setEmail('');
      setUserType('');
      setPasswordNoMatch(false);
      setPassNotGood(false);
      setNameError(false);
      setAgreeToTerms(false);

      router.push('/');

    } catch (error) {

      errorAlert(error);

    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label mb-small">First Name</label>
          <div className="control">
            <input onChange={(e) => setFirstName(e.target.value)} className="input" type="text" placeholder="First name" required />
          </div>
          <label className="label mt-small">Last Name</label>
          <div className="control">
            <input onChange={(e) => setLastName(e.target.value)} className="input" type="text" placeholder="Last name" required />
          </div>
        </div>

        <div className="field">
          <label className="label">Display Name</label>
          <div className="control">
            <input
              onChange={(e) => { setDisplayName(e.target.value); setNameError(false) }} className="input" type="text" placeholder="Enter a display name" value={displayName} required />
          </div>
          {nameError && <p class="help is-danger">Display name is invalid</p>}
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input onChange={(e) => { setPassword(e.target.value); setPassNotGood(false) }}
              className={`input ${passNotGood ? 'is-danger' : null}`}
              type="password" placeholder="password" value={password} required />
          </div>
          {passNotGood && <p class="help is-danger">Invalid password</p>}
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input onChange={(e) => { setConfirmPassword(e.target.value); setPasswordNoMatch(false) }} className={`input ${passwordNoMatch ? 'is-danger' : null}`} type="password" placeholder="password" value={confirmPassword} required />
          </div>
          {passwordNoMatch && <p class="help is-danger">Password's don't match</p>}
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="Email input" value={email} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Register as</label>
          <div className="control">
            <div className="select">
              <select onChange={(e) => setUserType(e.target.value)} required>
                <option>Teacher</option>
                <option default>Student</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox"
                onChange={(e) => setAgreeToTerms(e.target.value)} />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button is-primary is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

