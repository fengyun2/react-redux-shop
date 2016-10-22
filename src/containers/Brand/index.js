/*
* @Author: fengyun2
* @Date:   2016-10-22 00:50:38
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-10-22 16:09:25
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {shouldComponentUpdate} from 'react-immutable-render-mixin'
import * as ItemsActions from 'ACTIONS'
import {bindActionCreators} from 'redux'

import styles from './style.scss'

class Brand extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }

  render() {
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {items: state.items, filter: state.filter}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand)
