import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="home-nav" id="home-navi">
        ~~<Link to='/'>Home</Link>~~
        <Link to='/Blog'>Blog</Link>~~
        <Link to='/Tech'>Tech</Link>~~
        <Link to='/Values'>Values</Link>~~
        <Link to='Videos'>Videos</Link>~~
        <Link to='/Photos'>Photos</Link>~~
        <a href="pages/bulma.html">Framework</a>~~
        <Link to='/NL'>NL</Link>~~

      </div>
    );
  }
}

export default Header;