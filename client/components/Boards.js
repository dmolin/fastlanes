import React from 'react'
import Board from '../components/Board'

const Boards = (props) => (
  <section className="boards">
    {props.boards.map((board, index) => (
        <div className="board" key={index}>
          <Board {...board} />
        </div>
      ))
    }
  </section>
);

export default Boards
