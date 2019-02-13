import React from 'react'
import Paper from '@material-ui/core/Paper'
import Center from './cmps/center/Center'
import style from './lottery.less'

export default class Lottery extends React.Component {
  render() {
    return (
      <Paper className={style.wrap}>
        <div className={style.col}></div>
        <div className={style.col}><Center app={this} /></div>
        <div className={style.col}></div>
      </Paper>
    )
  }
}
