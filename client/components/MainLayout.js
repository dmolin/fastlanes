import React from 'react';
//import Navbar from './Navbar';

const Layout = (props) => (
  <section className="layout-wrapper">
    <section className="layout-content">
      {props.children}
    </section>
  </section>
);

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

export default Layout;