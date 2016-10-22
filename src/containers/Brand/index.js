/*
* @Author: fengyun2
* @Date:   2016-10-22 00:50:38
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-10-22 14:11:22
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
      <div className="content-block">这里是内容区</div>
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
