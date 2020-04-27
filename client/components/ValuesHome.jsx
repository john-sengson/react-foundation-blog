import React from 'react';
import './values.css'
import { Link } from 'react-router-dom'


class ValuesHome extends React.Component {
  render() {
    return (
      <div className="v-intro">


        <h2 className="v-h2">Welcome to the Values Homepage!</h2>

        <p className="p-values">
          Over the course of the next 15 weeks I will be updating this page with some cool reading about values.
        </p>
        <p className="p-values">
          From real experiences, my expectations, my strength and limitations will all be publish here.
        </p>
        <p className="p-values">
          You will get to see my way of thinking and my progress in my way of finding my own true identity.
        </p>
        <p className="p-values">
          Too long of an intro, lets get cracking shall we?
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className="h3-values">Click the links below for a list of my work:</h3>
        <br />
        <br />
        <br />
        <ul className="sprints">
          <li><Link to="/Values1">Sprint-1</Link></li>
          <li><Link to="/Values2">Sprint-2</Link></li>
          <li><Link to="/Values3">Sprint-3</Link></li>
          <li><Link to="/Values4">Sprint-4</Link></li>
          <li><Link to="/Values5">Sprint-5</Link></li>
        </ul>

      </div>

    );
  }
}

export default ValuesHome;