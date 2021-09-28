import React, { Component } from 'react'
import { signInWithGoogle } from '../../../firebase/firebase.utils'

export default class LoginForm extends Component {
  render() {
    return (
      <section className='section is-flex is-flex-direction-column'>
        <div style={{ width: '420px' }} className="container mx-max box px-medium is-align-self-center">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="example@email.com" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="email" placeholder="Enter your password" />
            </div>
          </div>
          <div className="buttons is-flex is-flex-direction-row my-medium is-justify-content-space-evenly">
            <button className='button is-info is-light is-outlined' style={{ width: '40%' }}>Log in</button>
            <button className='button is-link' onClick={signInWithGoogle} style={{ width: '50%' }}>Sign In With Google</button>
          </div>
        </div>
      </section>
    )
  }
}

