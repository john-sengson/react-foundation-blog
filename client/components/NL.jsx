import React from 'react'
import { Link } from 'react-router-dom'

class NL extends React.Component {
  state = {}
  render() {
    return (
      <div>
     <h1>Noel Leeming Training Modules</h1>
        <Link to='/'><h2>Home</h2></Link>
      </div>
    )
  }
}

export default NL;