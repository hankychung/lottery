import React from 'react'
import {hot} from 'react-hot-loader/root'
import style from './main.less'
import Cmp1 from './pages/cmp1'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={style.a}>HOME</div>
        <Cmp1 />
      </div>      
    )
  }
}

export default hot(App)
