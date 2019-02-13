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
    //this.refs.ctn.style.transform = `translateY(-4400px)`  // 44的倍数 100items/5s
    let random = Math.random().toString().substr(2, 2),
    arr = [0, 1, 2, 3],
    hundred = Math.floor(arr.length * Math.random()),
    total = parseInt(hundred + random)
    // 考虑count超出总名单的问题
    if (Math.ceil(total / this.state.staff.length) > 1) {
      let count = total
      let arr = [...this.state.staff],
      res = [...this.state.staff]
      console.log(arr)
      console.log(count)
      while(count) {
        res.concat(arr)
        count --
      }
      console.log('res', res)
      this.setState(state => {
        
        state.staff = state.staff.concat(arr)
        console.log('innerState', state)
        return state
      })
      console.log('print', this.state)
    }
    // 一个item占高44px 100Items/5s
    this.refs.ctn.style.transform = `translateY(-${44 * total}px)`  
    console.log(total)      
    setTimeout(() => {
      alert(this.state.staff[total + 7])
    }, 5000); 
  }
  render () {
    return (
      <div className={style.center}>
        <div className="title">STAFF</div>
        <div className={style.wrap}>
          <div className={style.ctn} ref="ctn">
            {this.state.staff.map((item, idx) => <Paper key={idx} className={style.item}>{item[1]}</Paper>)}
          </div>
        </div>        
        <div className={style.chosen}></div>
        <Button disabled={this.state.clickable} className={style.btn} color="primary" variant="contained" onClick={this.start.bind(this)}>START</Button>
      </div>
    )
  }
}