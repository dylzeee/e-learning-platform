import React, { Component } from 'react'
import Link from 'next/link'
import { auth } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import { userSignOut } from '../../features/user/userSlice';


export default function Navbar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(userSignOut({}))
    auth.signOut()
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href='/'>
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" datatarget="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href='/'>
            <a className="navbar-item">
              Home
            </a>
          </Link>

          <a className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                user.isLoggedIn ?
                  null :
                  <Link href='/account/register'>
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                  </Link>
              }
              {
                user.isLoggedIn ?
                  <div onClick={handleSignout}>
                    <a className="button is-light">
                      Logout
                    </a>
                  </div>
                  :
                  <Link href='/account/login'>
                    <a className="button is-light">
                      Log in
                    </a>
                  </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
