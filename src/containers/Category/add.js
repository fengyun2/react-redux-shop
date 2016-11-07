import React, {Component} from 'react'
import * as CategoryActions from 'ACTIONS'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class AddCategory extends Component {
  constructor (props) {
    console.log(`props: `, props)
    super(props)

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

  addCategory () {
    const {addCategory} = this.props.actions
    addCategory()
    console.log('addItem...', this.props.actions)
    this.forceUpdate()
    return true
  }

  resetCategory () {
    console.log('resetCategory....')
  }

  render () {
    const {} = this.props

    return (
      <div className="content-block">
        <div className="form">
          <div>
            <label>First Name</label>
            <div>
              <input name="firstName" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input name="lastName" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input name="email" type="email" placeholder="Email"/>
            </div>
          </div>
          <div>
            <label>Sex</label>
            <div>
              <label><input name="sex" type="radio" value="male"/> Male</label>
              <label><input name="sex" type="radio" value="female"/> Female</label>
            </div>
          </div>
          <div>
            <label>Favorite Color</label>
            <div>
              <select name="favoriteColor">
                <option></option>
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="employed">Employed</label>
            <div>
              <input name="employed" id="employed" type="checkbox"/>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <div>
              <textarea name="notes" />
            </div>
          </div>
          <div>
            <button type="button" onClick={this.addCategory.bind(this)}>Submit</button>
            <button type="button" onClick={this.resetCategory.bind(this)}>Clear Values</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {category: state.category}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CategoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
