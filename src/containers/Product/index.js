/*
* @Author: fengyun2
* @Date:   2016-10-22 16:47:44
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-07 21:22:23
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import pureRender from 'pure-render-decorator'
import * as ItemsActions from 'ACTIONS'
import {bindActionCreators} from 'redux'
import ReactPullToRefresh from 'react-pull-to-refresh'

let count = 1

@pureRender
class Product extends Component {
  constructor (props) {
    super(props)
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

    this.state = {
      items: [
        <div key={'item-' + count}>Item {count++}</div>
      ]
    }
  }

  componentWillMount () {
    // add event listeners (Flux Store, WebSocket, document, etc.)
  }
  componentDidMount () {
    // React.getDOMNode()
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }
  handleRefresh (resolve, reject) {
    let self = this
    console.log('handleRefresh...', this)
    setTimeout(function () {
      self.addItem() ? resolve() : reject()

      console.log('is true: ', self.addItem())
    }, 500)
  }
  addItem () {
    console.log('addItem...')
    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>)
    this.setState({
      items: this.state.items
    })
    console.log('new items: ', this.state.items)
    this.forceUpdate()
    return true
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate....')
  //   return this.props != nextProps || this.state != nextState
  // }

  render () {
    const {items, filter, actions, children} = this.props

    return (
      <div className="content-block">

      <ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{
        textAlign: 'center'
      }}>
        <h3>Pull down to refresh</h3>
        <div>
         {this.state.items}
        </div>
      </ReactPullToRefresh>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)
