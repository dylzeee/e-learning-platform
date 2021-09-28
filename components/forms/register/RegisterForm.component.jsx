import React, { Component } from 'react'
import styles from './RegisterForm.module.scss'

export default class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      userType: 'student'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label mb-small">First Name</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, firstName: e.target.value }))} className="input" type="text" placeholder="First name" />
            </div>
            <label className="label mt-small">Last Name</label>
            <div className="control">
              <input onChange={(e) => this.setState(state => ({ ...state, lastName: e.target.value }))} className="input" type="text" placeholder="Last name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={(e) => this.setState(state => ({ ...state, username: e.target.value }))} className="input is-success" type="text" placeholder="Text input" value={this.state.username} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={(e) => (this.setState(state => ({ ...state, email: e.target.value })))} className="input is-danger" type="email" placeholder="Email input" value={this.state.email} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Register as</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState(state => ({ ...state, userType: e.target.value }))}>
                  <option>Teacher</option>
                  <option default>Student</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
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
