import React from 'react'
import Paper from '@material-ui/core/Paper'
import Center from './cmps/center/Center'
import Prize from './cmps/prizeList/Prize'
import style from './lottery.less'

export default class Lottery extends React.Component {
  constructor(args) {
    super(args)
    // 抽奖滚动时间
    this.duration = 6000
  }
  render() {
    return (
      <Paper className={style.wrap}>
        <div className={style.col}></div>
        <div className={style.col}><Center ref="center" duration={this.duration} /></div>
        <div className={style.col}><Prize parent={this} /></div>
      </Paper>
    )
  }
  componentDidMount() {
    console.log(this.refs.center)
  }
}
