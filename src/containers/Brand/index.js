/*
* @Author: fengyun2
* @Date:   2016-10-22 00:50:38
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2016-11-04 20:03:55
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import pureRender from 'pure-render-decorator'
import * as ItemsActions from 'ACTIONS'
import {bindActionCreators} from 'redux'

import styles from './style.scss'

@pureRender
class Brand extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate....')
  //   return this.props != nextProps || this.state != nextState
  // }
  render () {
    const {items, filter, actions, children} = this.props

    /* console.log(`this.props: `, this.props) */

    return (
      <div className="content-block">

        <div className="content-block-title">分类</div>
        <div className="card">
          <div className="card-header color-white no-border no-padding">
            <img className='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="" />
          </div>
          <div className="card-content">
            <div className="card-content-inner">
              <p className="color-gray">发表于 2016/10/22</p>
              <p>此处省略一百万字...</p>
            </div>
          </div>
          <div className="card-footer">卡脚</div>
        </div>

        <div className="content-block-title">FaceBook卡片</div>
        <div className="card facebook-card">
          <div className="card-header no-border">
            <div className="avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34" /></div>
            <div className="name">风云一出, 谁与争锋</div>
            <div className="date">星期六 16:20</div>
          </div>
          <div className="card-content">
            <img className="card-cover" src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" />
          </div>
          <div className="card-footer no-border">
            <a href="#" className="link">赞</a>
            <a href="#" className="link">评论</a>
            <a href="#" className="link">分享</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {items: state.items, filter: state.filter}
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)
