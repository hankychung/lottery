import React from 'react'
import style from './cmp1.less'
import style2 from './cmp1.scss'

export default class Cmp1 extends React.Component {
  render() {
    return (
      <div className="cmp1"> 
        <div className={style.test}>cmp21
          <div className={style.inner}>inner</div>
        </div>
        <div className='inner'>ouside inner</div>
        <div className={style2.tt}>scss
          <div>scss inner</div>
        </div>
        <div className="tt">blue</div>
      </div>      
    )
  }
}