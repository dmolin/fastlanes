import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <section className="navbar-wrapper">
        <div className="navbar container pure-g">
          <div className="navbar-brand pure-u-1 pure-u-md-1-4">
            <a href="/" className="navbar-brand-logo">
              <h1 className="structural">Codingshack ltd</h1>
            </a>
          </div>
          <nav className="navbar-items navigation pure-u-1 pure-u-md-3-4">
            <ul className="pure-menu-horizontal">
              {this.props.currentUser ? <li className="navigation-item pure-menu-item"><a onClick={this.logout.bind(this)} href="#" >Logout</a></li> : ''}
            </ul>
          </nav>
        </div>
      </section>
    );
  }

  logout(e) {
    e.preventDefault();
    this.props.logout()
    return false;
  }
}

export default Navbar;