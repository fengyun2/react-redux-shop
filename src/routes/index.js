/*
 * @Author: fengyun2
 * @Date:   2016-10-22 14:39:34
 * @Last Modified by: fengyun2
 * @Last Modified time: 2016-11-09 11:34:21
 */

/**
 * 绝对路径 or 相对路径
 * bug: 想不明白为啥 NotFound 懒加载就出错(解决了)
 */
export default [{
  path: '/',
  // component: require('CONTAINERS/App').default,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('CONTAINERS/App').default)
    })
  },
  indexRoute: { // 默认路径
    // component: require('CONTAINERS/Note').default

    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Note').default)
      })
    }

  },
  childRoutes: [{
    path: 'brand',
    // component: require('CONTAINERS/Brand').default
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Brand').default)
      })
    }
  }, {
    path: 'note',
    // component: require('CONTAINERS/Note').default,
    onEnter(nextState, replaceState) { // nextState 表示要进入的下一个路径 replaceState 表示替换路由状态的方法
      console.log('enter note component')
        // replaceState(null, `/brand/${nextState.params.id}`)
    },
    onLeave(prevState) {
      console.log('leave note component')
    },
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Note').default)
      })
    }
  }, {
    path: 'product',
    // component: require('CONTAINERS/Product').default
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Product').default)
      })
    }
  }, {
    path: 'add_cate',
    // component: require('CONTAINERS/Category/add').default
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/Category/add').default)
      })
    }
  }, {
    path: '*',
    // component: require('CONTAINERS/NotFound').default
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('CONTAINERS/NotFound').default)
      })
    }
  }]
}]
