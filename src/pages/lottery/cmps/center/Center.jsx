import React from 'react'
import Paper from '@material-ui/core/Paper'
import style from './center.less'
import staff from './staff'

// 每个抽奖item高度(单位px)
const ITEM_HEIGHT = 44
// 选中框所在位置
const CHOSEN_POS = 7
export default class Center extends React.Component {
  constructor(args) {
    super(args)
    this.state = {
      staff,
      animation: {}
    }
  }
  async start() {
    this.setState({animation: {transition: 'none'}})
    this.refs.ctn.style.transform = `translateY(0px)` 
    // 生成个位数和十位数
    let random = Math.random().toString().substr(2, 2),
    // 控制百位数
    hundred = [2, 3, 4],
    pos = Math.round((hundred.length-1) * Math.random()),
    // 向上滚动的个数
    count = parseInt(hundred[pos] + random)
    console.log(count)
    // 向上滚动的个数超出总名单数的情况
    let time = Math.ceil((count + CHOSEN_POS) / this.state.staff.length),
    og = [...this.state.staff],
    res = [...this.state.staff]
    while(time > 1) {
      res = res.concat(og)
      time --
    }
    /**
     *  1.在组件生命周期中或者react事件绑定中，setState是通过异步更新的。
     *  2.在延时的回调或者原生事件绑定的回调中调用setState不一定是异步的。 
     */
    await this.setState({staff: res})
    console.log('print', this.state)
    // 计算滚动距离
    this.setState({animation: {transition: `all ease-in-out ${this.props.duration}ms`}})
    this.refs.ctn.style.transform = `translateY(-${ITEM_HEIGHT * count}px)`    
    let timer = setTimeout(() => {
      let bingo = this.state.staff[count + 7][1]
      console.log('refs', this.refs)
      alert(bingo)
      this.setState(state => {
        let delIdx = og.findIndex(item => item[1] == bingo)
        console.log(delIdx)
        og.splice(delIdx, 1)
        state.staff = og
        console.log('finalState', this.state)
      })
      clearTimeout(timer)
    }, this.props.duration)    
  }
  render () {    
    return (
      <div className={style.center}>
        <div className="title title_center">STAFF</div>
        <div className={style.wrap}>
          <div className={style.ctn} ref="ctn" style={this.state.animation}>
            {this.state.staff.map((item, idx) => <Paper key={idx} className={style.item}>{item[1]}</Paper>)}
          </div>
        </div>        
        <div className={style.chosen}></div>        
      </div>
    )
  }
}