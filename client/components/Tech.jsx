import React from 'react'
import './tech.css'
import { Link } from 'react-router-dom'

class Tech extends React.Component {
  state = {}
  render() {
    return (
      <div className="intro" id="introduction">
        <h1 className="techH1">Welcome to my Tech Page</h1>
        <p className="p-tech">
          In this page you will get to see some of my research about tech as part of my curriculum for EDA
        </p>
        <p className="p-tech">
          You will see topics related to web development
        </p>
        <p className="p-tech">
          All items publish below are information gathered from different websites
        </p>
        <p className="p-tech">
          This aim of this page is to show some of what I have learnt in my time with EDA
        </p>
        <h3 className="h3-tech">Click the links below for a list of my work:</h3>
        <ul className="sprints">
          <li><a href="https://john-sengson.github.io/pages/sprint1-technical.html">Sprint-1</a></li>
          <li><Link to="./Tech2">Sprint-2</Link></li>
          <li><Link to="./Tech3">Sprint-3</Link></li>
          <li><Link to="./Tech4">Sprint-4</Link></li>
        </ul>
      </div>

    );
  }
}

export default Tech;