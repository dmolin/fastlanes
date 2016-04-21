import React from 'react'
import Navbar from './Navbar'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(event) {
    this.props.login($('[data-id=email]').val(), $('[data-id=password]').val())
  }

  render() {
    const {login, route} = this.props
    const path = route.path ? route.path.substr(1) : 'none'

    return (
      <div>
        <Navbar />
        <div className={`main-container route-` + path}>
          <div className="container container--unpadded">
            <div className="section login-box">
              <h1 className="section-header">Login into your Fastlanes account</h1>

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
                  <button className="pure-button button-success button-primary" onClick={this.handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login