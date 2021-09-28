import React, { Component } from 'react'
import LoginForm from '../../components/forms/login/LoginForm.component'
import Hero from '../../components/hero/Hero.component'

export default class login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Hero
          title="Login"
          subtitle="Enter your login details to sign into your account"
        />
        <LoginForm />
      </>
    )
  }
}
