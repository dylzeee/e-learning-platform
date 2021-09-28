import React, { Component } from 'react'
import RegisterForm from '../../components/forms/register/RegisterForm.component'
import Hero from '../../components/hero/Hero.component'

export default class RegisterPage extends Component {

  render() {
    return (
      <>
        <Hero
          title="Register"
          subtitle="Fill out the form to register to the best E-Learning platform in the world"
        />
        <section className='section pb-max'>
          <div className='container box mx-max p-large'>
            <RegisterForm />
          </div>
        </section>
      </>
    )
  }
}
