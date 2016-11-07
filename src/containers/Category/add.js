import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as CategoryActions from 'ACTIONS'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class AddCategory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user_info: {
        firstName: '',
        lastName: '',
        email: '',
        sex: '',
        favoriteColor: '',
        employed: '',
        notes: ''
      }
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

  handleChange (event) {
    const inputType = event.target.type
    const inputName = event.target.name
    const inputValue = event.target.value

    console.log('type: ', inputType)
    console.log('checked: ', event.target)
    console.log('checked: ', event.target.refs)

    if (inputType !== 'select-multiple' || inputType !== 'checkbox') {
      this.setState({user_info: Object.assign({}, this.state.user_info, {[inputName]: inputValue})})
    } else if (inputType === 'checkbox') {
      // const _this = ReactDOM.findDOMNode(this.refs[''])
    }
    this.forceUpdate()
  }

  addCategory () {
    const {addCategory} = this.props.actions
    const {userInfo} = this.state
    addCategory(userInfo)
    this.forceUpdate()
    return true
  }

  resetCategory () {
    console.log('resetCategory....')
  }

  render () {
    const {user_info} = this.state
    // console.log(user_info)

    return (
      <div className="content-block">
        <div className="form">
          <div>
            <label>First Name</label>
            <div>
              <input name="firstName" value={user_info.firstName} type="text" placeholder="First Name" onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input name="lastName" value={user_info.lastName} type="text" placeholder="Last Name" onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input name="email" value={user_info.email} type="email" placeholder="Email" onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div>
            <label>Sex</label>
            <div>
              <label><input name="sex" type="radio" value="male" onChange={this.handleChange.bind(this)} /> Male</label>
              <label><input name="sex" type="radio" value="female" onChange={this.handleChange.bind(this)} /> Female</label>
            </div>
          </div>
          <div>
            <label>Favorite Color</label>
            <div>
              <select name="favoriteColor" onChange={this.handleChange.bind(this)}>
                <option></option>
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </select>
            </div>
          </div>
          <div>
            <label>Employed</label>
            <div>
              <input name="employed" ref="employed" value={user_info.employed} onChange={this.handleChange.bind(this)} type="checkbox" data-id="11"/>
            </div>

            <label>Employee</label>
            <div>
              <input name="employed" ref="employee" value={user_info.employed} onChange={this.handleChange.bind(this)} type="checkbox" data-id="22"/>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <div>
              <textarea name="notes" onChange={this.handleChange.bind(this)} />
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
