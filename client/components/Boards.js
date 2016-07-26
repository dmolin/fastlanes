import React from 'react'

const Boards = (props) => (
  <section className="boards">
    {props.boards.map((board, index) => (
        <div className="board" key={index}>
          <p>{board.name}</p>
          <p>{board.description}</p>
        </div>
      ))
    }
  </section>
)

export default Boards
