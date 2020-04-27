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
import ValuesHome from './ValuesHome'
import Values1 from './Values1'
import Values2 from './Values2'
import Values3 from './Values3'
import Values4 from './Values4'
import Values5 from './Values5'

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
      <Route exact path='/Values' component={ValuesHome} />
      <Route exact path='/Values1' component={Values1} />
      <Route exact path='/Values2' component={Values2} />
      <Route exact path='/Values3' component={Values3} />
      <Route exact path='/Values4' component={Values4} />
      <Route exact path='/Values5' component={Values5} />
    </div>
  )
}

export default App
