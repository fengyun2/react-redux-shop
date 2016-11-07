/*
* @Author: fengyun2
* @Date:   2016-10-22 10:45:56
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-07 16:18:43
*/

/**
 * 工具栏
 */

import React, {Component} from 'react'
import NavLink from 'COMPONENTS/NavLink'
import classNames from 'classnames'

class BarTab extends Component {
  render () {
    const { params } = this.props
    const {pathname} = this.props.location
    const noteClass = classNames({
      'tab-item': true,
      'external': true,
      'active': pathname === '/' || pathname === '/note'
    })

    return (
      <nav className="bar bar-tab">
        <NavLink to="/note" className={noteClass}>
          <span className="icon icon-home"></span>
          <span className="tab-label">首页</span>
        </NavLink>
        <NavLink to="/brand" className="tab-item external">
          <span className="icon icon-star"></span>
          <span className="tab-label">收藏</span>
        </NavLink>
        <NavLink to="/product" className="tab-item external">
          <span className="icon icon-settings"></span>
          <span className="tab-label">商品</span>
        </NavLink>
      </nav>
    )
  }
}

export default BarTab
