/*
* @Author: fengyun2
* @Date:   2016-10-22 10:45:56
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-10-22 11:21:49
*/

/**
 * 工具栏
 */
import React, {Component} from 'react'
import NavLink from 'COMPONENTS/NavLink'

class BarTab extends Component {
  render() {
    return (
      <nav className="bar bar-tab">
        <NavLink to="/note" className="tab-item external active">
          <span className="icon icon-home"></span>
          <span className="tab-label">首页</span>
        </NavLink>
        <NavLink to="/brand" className="tab-item external">
          <span className="icon icon-star"></span>
          <span className="tab-label">收藏</span>
        </NavLink>
      </nav>
    )
  }
}

export default BarTab
