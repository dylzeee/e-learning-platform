import React, { Component } from 'react'
import Link from 'next/link'
import { auth } from '../../firebase/firebase.utils';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar" role="navigation" ariaLabel="main navigation">
        <div className="navbar-brand">
          <Link href='/'>
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>
          </Link>

          <a role="button" className="navbar-burger" ariaLabel="menu" ariaExpanded="false" dataTarget="navbarBasicExample">
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
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
                  this.props.user
                    ? null
                    : <Link href='/account/register'>
                      <a className="button is-info">
                        <strong>Sign up</strong>
                      </a>
                    </Link>
                }
                {
                  this.props.user
                    ? <div onClick={() => auth.signOut()}>
                      <a className="button is-light">
                        Logout
                      </a>
                    </div>
                    : <Link href='/account/login'>
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
}
