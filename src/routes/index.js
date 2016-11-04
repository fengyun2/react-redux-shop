/*
 * @Author: fengyun2
 * @Date:   2016-10-22 14:39:34
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2016-11-04 18:59:13
 */

export default {
  childRoutes: [{
    path: '/',
    component: require('CONTAINERS/App').default,
    indexRoute: {
      // path: '/',
      // component: require('CONTAINERS/App').default
      // getComponent(nextState, cb) {
      //   require.ensure([], (require) => {
      //     cb(null, require('CONTAINERS/Brand'), 'index')
      //   })
      // }
    },
    childRoutes: [{
      path: 'brand',
      component: require('CONTAINERS/Brand').default
        // getComponent(nextState, cb) {
        //   require.ensure([], (require) => {
        //     cb(null, require('CONTAINERS/Brand'), 'index')
        //   })
        // }
    }, {
      path: 'note',
      component: require('CONTAINERS/Note').default
        // getComponent(nextState, cb) {
        //   require.ensure([], (require) => {
        //     cb(null, require('CONTAINERS/Note'), 'index')
        //   })
        // }
    }, {
      path: 'product',
      component: require('CONTAINERS/Product').default
    }]
  }]
}
