import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Under Construction</h1>
        <p>We appreciate your patience while we set up this page</p>
        <img src="https://john-sengson.github.io/pages/photo/construction.jfif" alt="construction" className="center" />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Photos;