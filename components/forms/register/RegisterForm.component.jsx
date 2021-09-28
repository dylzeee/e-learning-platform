import React, { Component } from 'react'
import styles from './RegisterForm.module.scss'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { withRouter } from 'next/router'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      displayName: '',
      email: '',
      userType: '',
      agreeToTerms: ''
    }

  }

  errorAlert = (message) => {
    const MySwal = withReactContent(Swal);
    (
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
      }))
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const router = this.props.router;
    const { firstName, lastName, displayName, password, confirmPassword, email, userType, agreeToTerms } = this.state;

    if (!password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
      this.errorAlert('Password must contain at least one capital letter and one number');
      return;
    }
    if (password !== confirmPassword) {
      this.errorAlert("Passwords don't match, please try again!");
      return;
    }
    if (displayName.length < 5) {
      this.errorAlert("Display name must be at least 5 characters")
      return
    };
    if (!agreeToTerms) {
      this.errorAlert("You must agree to the terms and conditions.")
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })

      this.setState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        email: '',
        userType: '',
        agreeToTerms: ''
      })

      router.push('/');

    } catch (error) {

      this.errorAlert(error);

    }
  }
  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label mb-small">First Name</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, firstName: e.target.value }))} className="input" type="text" placeholder="First name" required />
            </div>
            <label className="label mt-small">Last Name</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, lastName: e.target.value }))} className="input" type="text" placeholder="Last name" required />
            </div>
          </div>

          <div className="field">
            <label className="label">Display Name</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, displayName: e.target.value }))} className="input" type="text" placeholder="Enter a display name" value={this.state.displayName} required />
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, password: e.target.value }))} className="input " type="password" placeholder="password" value={this.state.password} required />
            </div>
          </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, confirmPassword: e.target.value }))} className="input " type="password" placeholder="password" value={this.state.confirmPassword} required />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input onChange={(e) => (this.setState(state => ({ ...state, email: e.target.value })))} className="input" type="email" placeholder="Email input" value={this.state.email} required />
            </div>
          </div>

          <div className="field">
            <label className="label">Register as</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState(state => ({ ...state, userType: e.target.value }))} required>
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
                  onChange={(e) => this.setState(state => ({ state, agreeToTerms: e.target.value }))} />
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
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
