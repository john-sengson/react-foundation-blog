import React from 'react'
import { Link } from 'react-router-dom'

class Videos extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Under Construction</h1>
        <p>We appreciate your patience while we set up this page</p>
        <img src="https://john-sengson.github.io/pages/photo/construction.jfif" alt="construction" className="center" />
        <Link to='/'><h2>Home</h2></Link>
      </div>
    )
  }
}

export default Videos;