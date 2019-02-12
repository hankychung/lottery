import React from 'react'
import {hot} from 'react-hot-loader/root'
import layout from './main.less'
import Paper from '@material-ui/core/Paper'
import Center from './cmp/center/Center'


class App extends React.Component {
  bingo() {
    alert('bingo')
  }
  render() {
    return (
      <Paper className={layout.wrap}>
        <div className={layout.col}></div>
        <div className={layout.col}><Center app={this} /></div>
        <div className={layout.col}></div>
      </Paper>
    )
  }
}




export default hot(App)
