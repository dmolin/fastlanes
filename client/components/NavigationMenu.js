import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import ActionWork from 'material-ui/svg-icons/action/work'
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste'
import SocialGroup from 'material-ui/svg-icons/social/group'

const iconStyles = {
    marginRight: 12,
};

class NavigationMenu extends React.Component {
  render() {
    return (
      <section className='navigation-menu'>
        <Menu>
          <MenuItem primaryText="Projects" leftIcon={<ActionWork style={iconStyles} />} />
          <MenuItem primaryText="Teams" leftIcon={<SocialGroup style={iconStyles} />} />
          <MenuItem primaryText="Boards" leftIcon={<ContentContentPaste style={iconStyles} />} />
        </Menu>
      </section>
    )
  }
}

export default NavigationMenu
