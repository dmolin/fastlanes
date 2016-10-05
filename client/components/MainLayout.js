import React from 'react'
import Navbar from '../containers/Navbar'
import NavigationMenu from './NavigationMenu'

const Layout = (props) => {
  const {route} = props
  const path = props.location.pathname.replace('/', '-', 'g')
  
  return (
    <div className={`main-wrapper route` + path}>
      <Navbar />
      <div className="main-container">
        <NavigationMenu />
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
