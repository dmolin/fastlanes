import React from 'react'
import {Link} from 'react-router'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegistration = this.handleRegistration.bind(this)
  }

  handleRegistration(event) {
    this.props.signup($('[data-id=email]').val(), $('[data-id=password]').val())
  }

  render() {
    return (
      <div>
        <div className="container container--unpadded">
          <section className="section central-box cf">
            <h1 className="section-header">Register a new Fastlanes account</h1>

            <div className="pure-form pure-form-stacked form form--wide">
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="" id="email" placeholder="enter your email" data-id="email" />
              </div>

              <div className="form-field">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="" id="password" placeholder="enter your password" type="password" data-id="password"/>
              </div>

              <div className="pull-right">
                <button className="pure-button button-success button-primary" onClick={this.handleRegistration}>Register</button>
              </div>
            </div>
          </section>

          <section className="section central-box cf">
            <h1 className="section-header">Already registered?</h1>

            <div className="pure-form form-wide">
              <Link to='/login' className="pure-button button-success button-primary liquid">Login here</Link>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Register