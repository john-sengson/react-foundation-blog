import React from 'react'
import { Route } from 'react-router-dom'


// Components:
import Header from './Header'
import Home from './Home'
import Photos from './Photos'

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/Photos' component={Photos} />

    </div>
  )
}

export default App
