import React from 'react'
import Navbar from '../containers/Navbar'

const Layout = (props) => {
  const {route} = props
  const path = props.location.pathname.replace('/', '-', 'g')
  
  return (
    <div className={`main-wrapper route` + path}>
      <Navbar />
      <div className="main-container">
        {props.children}
      </div>
    </div>
  )
};

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

export default Layout;