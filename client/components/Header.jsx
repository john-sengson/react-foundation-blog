import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="home-nav" id="home-navi">
        <Link to='/'>
          Home
        </Link>
        <a href="blog/bloghome.html">Blog</a>
        <a href="pages/tech.html">Tech</a>
        <a href="pages/values.html">Values</a>
        <a href="pages/videos.html">Videos</a>
        <Link to='/Photos'>Photos</Link>
        <a href="pages/bulma.html">Framework</a>

      </div>
    );
  }
}

export default Header;