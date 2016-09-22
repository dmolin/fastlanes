import React from 'react'
import {browserHistory} from 'react-router'

class Board extends React.Component {
  constructor(...args) {
    super(...args)
    this.onBoardSelection = this.onBoardSelection.bind(this)
  }

  onBoardSelection() {
    browserHistory.push(`/board/${this.props._id}`)
    return false
  }

  render() {
    console.log("PROPS", this.props);
    const {name, description} = this.props

    return (
      <div onClick={this.onBoardSelection}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default Board
