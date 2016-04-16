import React from 'react'

const NotFound = ({content = () => null}) => (
  <section className="notfound" >
    <p className="section section-header">this is not the page you were looking for...</p>
  </section>
)

export default NotFound