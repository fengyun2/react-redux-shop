import React, {Component} from 'react'
import BarNav from 'COMPONENTS/BarNav'
import BarTab from 'COMPONENTS/BarTab'
import NavLink from 'COMPONENTS/NavLink'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="page page-current">
        <BarNav />
        <BarTab />

        <div className="content">
          这里是App内容区
        </div>
      </div>
    )
  }
}

export default App
