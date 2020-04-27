import React from 'react'
import { Route } from 'react-router-dom'


// Components:
import Header from './Header'
import Home from './Home'
import Photos from './Photos'
import Tech from './Tech'
import Videos from './Videos'
import Tech1 from './Tech1'
import Tech2 from './Tech2'
import Tech3 from './Tech3'
import Tech4 from './Tech4'

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/Photos' component={Photos} />
      <Route exact path='/Videos' component={Videos} />
      <Route exact path='/Tech' component={Tech} />
      <Route exact path='/Tech1' component={Tech1} />
      <Route exact path='/Tech2' component={Tech2} />
      <Route exact path='/Tech3' component={Tech3} />
      <Route exact path='/Tech4' component={Tech4} />
    </div>
  )
}

export default App
