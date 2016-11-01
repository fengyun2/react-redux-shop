import React, {Component} from 'react'
import classNames from 'classnames'
import BarNav from 'COMPONENTS/BarNav'
import BarTab from 'COMPONENTS/BarTab'
import NavLink from 'COMPONENTS/NavLink'

import styles from './style.scss'
class App extends Component {
  render () {
    const pageClassNames = classNames(styles.page, styles.pageCurrent)
    return (
      <div className={pageClassNames}>
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
