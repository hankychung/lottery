import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import style from './center.less'
import staff from './staff'

export default class Center extends React.Component {
  constructor(args) {
    super(args)
    this.state = {
      staff,
      clickable: false
    }
  }
  start() {
    this.setState(state => {
      state.clickable = true
      return state
    })
    let count = 182
    let timer = setInterval(() => {
      if (!count) {
        clearInterval(timer)
        let lastCnt = 5
        let lastCount = setInterval(() => {
          if (!lastCnt) {
            clearInterval(lastCount)
            this.props.app.bingo()
            this.setState(state => {
              state.clickable = false
              return state
            })
            return
          }
          this.setState(state => {
            let del = state.staff.shift()
            state.staff.push(del)
            return state
          })
          lastCnt --
        }, 500);
      }
      this.setState(state => {
        let del = state.staff.shift()
        state.staff.push(del)
        return state
      })
      count --
    }, 10)   
  }
  render () {
    return (
      <div className={style.center}>
        <div className="title">STAFF</div>
        <div className={style.ctn}>
          {this.state.staff.map(item => <Paper key={item} className={style.item}>{item[1]}</Paper>)}
        </div>
        <div className={style.chosen}></div>
        <Button disabled={this.state.clickable} className={style.btn} color="primary" variant="contained" onClick={this.start.bind(this)}>START</Button>
      </div>
    )
  }
}