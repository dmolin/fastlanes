import React from 'react'

class BoardDetail extends React.Component {
  render() {
    const {name, description, ...p} = this.props.board

    return (
      <div className='board-detail'>
        <p>{name}</p>
      </div>
    )
  }
}

export default BoardDetail
