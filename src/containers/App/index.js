import React, {Component} from 'react'
import BarNav from 'COMPONENTS/BarNav'
import BarTab from 'COMPONENTS/BarTab'
import NavLink from 'COMPONENTS/NavLink'

class App extends Component {
  render () {
    return (
      <div className="page page-current">
        <BarNav {...this.props} />
        <BarTab {...this.props} />

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
