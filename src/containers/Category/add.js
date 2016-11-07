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
        employed: [],
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
    Array.prototype.remove = function(val) {
      var index = this.indexOf(val)
      if (index > -1) {
        this.splice(index, 1)
      }
    }

    const inputType = event.target.type
    const inputName = event.target.name
    const inputValue = event.target.value

    if (inputType !== 'select-multiple' && inputType !== 'checkbox') {
      console.log('type: ', inputType)
      this.setState({user_info: Object.assign({}, this.state.user_info, {[inputName]: inputValue})})
    } else if (inputType === 'checkbox') {
      const {type} = event.target.dataset
      // console.log(`event.target: `, event.target.dataset)
      const _this = ReactDOM.findDOMNode(this.refs[type])
      let {employed} = this.state.user_info
      if (_this.checked) { // 选中
        if (!employed.includes(type)) {
          employed.push(type)
          this.setState({user_info: Object.assign({}, this.state.user_info, {employed})})
        }
      } else {
        if (employed.includes(type)) {
          // employed.push(type)
          employed.remove(type)
          this.setState({user_info: Object.assign({}, this.state.user_info, {employed})})
        }
      }

      console.log(`_this`, _this.checked)
      console.log(this.state.user_info)
    }
    this.forceUpdate()
  }

  addCategory () {
    const {addCategory} = this.props.actions
    const {user_info} = this.state
    addCategory(user_info)
    this.forceUpdate()
    return true
  }

  resetCategory () {
    console.log('resetCategory....')
  }

  render () {
    const {user_info} = this.state

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
              <input name="employed" ref="employed" value={user_info.employed} onChange={ this.handleChange.bind(this)} type="checkbox" data-type="employed"/>
            </div>

            <label>Employee</label>
            <div>
              <input name="employed" ref="employee" value={user_info.employed} onChange={ this.handleChange.bind(this)} type="checkbox" data-type="employee"/>
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
