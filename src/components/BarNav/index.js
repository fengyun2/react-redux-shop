/*
* @Author: fengyun2
* @Date:   2016-10-22 10:45:49
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-10-22 11:13:20
*/

/**
 * 标题栏
 */
import React, {Component} from 'react'

class BarNav extends Component {
  render () {
    return (
      <header className="bar bar-nav">
        <a className="icon icon-me pull-left open-panel"></a>
        <h1 className="title">Brand</h1>
      </header>
    )
  }
}

export default BarNav
