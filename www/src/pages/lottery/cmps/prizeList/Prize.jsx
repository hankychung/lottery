import React from 'react'
import Button from '@material-ui/core/Button'
import style from './prize.less'

export default class Prize extends React.Component {
  constructor(args) {
    super(args)
    console.log(args)
    this.state = {
      unClickable: false
    }
    this.start = this.start.bind(this)
  }
  start() {
    this.setState({unClickable: true})
    this.props.parent.refs.center.start()
    let timer = setTimeout(() => {
      this.setState({unClickable: false})
      clearTimeout(timer)
    }, this.props.parent.duration);
  }
  render() {
    return (
      <div className={style.wrap}>
        <div className="title title_prize">PRIZE</div>
        <Button 
          disabled={this.state.unClickable} 
          color="primary" 
          variant="contained"
          onClick={this.start}
          className={style.btn}
          >
          START
        </Button>
      </div>
    )
  }
  componentDidMount() {
    
  }
}