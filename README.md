# react-redux-shop

> react-redux-shop

## 技术

- react
- react-router
- redux
- jsx
- fetch
- node

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

```

## react 小结

## 升级日志

### 2016/11/01

1. 添加 `css-modules`, 解决 react 子组件样式冲突问题

### 2016/10/22

1. 添加按需加载, 需要让路由动态加载组件, 需要将 `component` 换成 `getComponent`(未能成功)

关键:
- `require.ensure(dependencies, callback, chunkName)`
这是 webpack 提供的方法, 这也是按需加载的核心方法。
> 第一个参数是依赖, 第二个是回调函数,第三个就是上面提到过的 chunkName, 用来指定这个 chunk file 的 name。

2. 将 `react-immutable-render-mixin` 更新为 `react-addons-pure-render-mixin`

> `react-immutable-render-mixin` 作者不再维护了

### 2016/10/21

1. 添加 `webpack.dll.config.js`, 即利用了 webpack 的 `DLLReferencePlugin`加快打包效率

2. 将 `react-addons-pure-render-mixin` 更新为 `react-immutable-render-mixin`

3. 添加 `antd`

### 2016/10/09

1. 添加 `react-addons-pure-render-mixin` 模块

## Bug

### 2016/10/22

1. ~~react 组件的 `state` 变化了，但是ui不更新~~

造成这一bug的原因是: 引入`react-immutable-render-mixin` 或 `react-addons-pure-render-mixin` 这个插件导致页面ui更新判断条件不成立, 以至于ui页面没有刷新。

`shouldComponentUpdate`: `在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用`

解决办法:

在需要更新视图的地方使用 `forceUpdate()` 方法, 强制更新ui视图即可。

例如:

container/product:

```js
  addItem() {
    console.log('addItem...')
    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>);
    this.setState({
      items: this.state.items
    })
    console.log('new items: ', this.state.items)
    this.forceUpdate()
    return true
  }
```

2.

### 2016/10/09

1. `npm run dev` 和 `npm run build` 暂不能使用
2. `bindActionCreators` 写错名称
3. `webpack.config.js` 的 'css exclude: /src/' 路径有误, 导致引入css报错
4. 想不通为啥 `constants/actionTypes.js` 里 使用 `keyMirror` 导出对象会读取不到, 而在当前文件却可以读取到, 好奇怪。
5. 不知道为啥 `antd-mobile` 老是报错, `Uncaught Error: Cannot find module "antd-mobile"`(感觉是因为`webpack.config.js的 'css-loader?modules&importLoaders=1&localIdentName=[name]___[local]-[hash:base64:' +'5]&sourceMap=true'` `css-modules`搞的鬼)
