import React from 'react'
import {hot} from 'react-hot-loader/root'
import Lottery from './pages/lottery/Lottery'
import './main.less'

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

class App extends React.Component {
  bingo() {
    alert('bingo')
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/a" component={Lottery} />
        </div>
      </BrowserRouter>      
    )
  }
}




export default hot(App)
