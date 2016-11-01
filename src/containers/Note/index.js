import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import pureRender from 'pure-render-decorator'
import * as ItemsActions from 'ACTIONS'
import {bindActionCreators} from 'redux'

import SearchBar from 'COMPONENTS/Items/SearchBar'
import Content from 'COMPONENTS/Items/Content'
import Footer from 'COMPONENTS/Items/Footer'

import styles from './style.scss'

@pureRender
class App extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate....')
  //   return this.props != nextProps || this.state != nextState
  // }
  render () {
    const {items, filter, actions, children} = this.props

    /* console.log(`this.props: `, this.props) */

    return (
      <div className={styles.normal}>
        <h1>Manage Items</h1>
        <SearchBar filterItem={actions.filterItem}/>
        <Content items={items} filter={filter} deleteItem={actions.deleteItem}/>
        <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
