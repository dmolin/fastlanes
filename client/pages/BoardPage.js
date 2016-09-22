import React from 'react'
import BoardDetail from '../containers/BoardDetail'

class BoardPage extends React.Component {
  render() {
    console.log("PARAMS", this.props.params)
    //turn the param bound value into a simple prop for the BoardDetail container
    return (
      <div className='board-detail'>
        <BoardDetail id={this.props.params.id} />
      </div>
    )
  }
}

export default BoardPage
