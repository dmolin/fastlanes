import React from 'react'
import {Link} from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login($('[data-id=email]').val(), $('[data-id=password]').val())
  }

  render() {
    return (
      <div>
        <div className="container container--unpadded">
          <section className="section central-box cf">
            <h1 className="section-header">Login into your Fastlanes account</h1>

            <form className="pure-form pure-form-stacked form form--wide">
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="" id="email" placeholder="enter your email" data-id="email" />
              </div>

              <div className="form-field">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="" id="password" placeholder="enter your password" type="password" data-id="password"/>
              </div>

              <div className="pull-right">
                <button type="submit" className="pure-button button-success button-primary" onClick={this.handleLogin}>Login</button>
              </div>
            </form>
          </section>

          <section className="section central-box cf">
            <h1 className="section-header">Not yet registered?</h1>

            <div className="pure-form form-wide">
              <Link to='/register' className="pure-button button-success button-primary liquid">Signpup here</Link>
            </div>
          </section>

        </div>
      </div>
    )
  }
}

export default Login