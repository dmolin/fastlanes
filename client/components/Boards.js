import React from 'react'
import Navbar from '../containers/Navbar'

const Boards = ({content = () => null}) => (
  <section className="boards">
    <Navbar />
    Boards
  </section>
)

export default Boards