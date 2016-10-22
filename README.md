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
npm run dev

# build for production with minification
npm run build

```

## react 小结

## 升级日志

### 2016/10/22

1. 添加按需加载, 需要让路由动态加载组件, 需要将 `component` 换成 `getComponent`(未能成功)

关键:
- `require.ensure(dependencies, callback, chunkName)`
这是 webpack 提供的方法, 这也是按需加载的核心方法。
> 第一个参数是依赖, 第二个是回调函数,第三个就是上面提到过的 chunkName, 用来指定这个 chunk file 的 name。

### 2016/10/21

1. 添加 `webpack.dll.config.js`, 即利用了 webpack 的 `DLLReferencePlugin`加快打包效率

2. 将 `react-addons-pure-render-mixin` 更新为 `react-immutable-render-mixin`

3. 添加 `antd`

### 2016/10/09

1. 添加 `react-addons-pure-render-mixin` 模块

## Bug

### 2016/10/09

1. `npm run dev` 和 `npm run build` 暂不能使用
2. `bindActionCreators` 写错名称
3. `webpack.config.js` 的 'css exclude: /src/' 路径有误, 导致引入css报错
4. 想不通为啥 `constants/actionTypes.js` 里 使用 `keyMirror` 导出对象会读取不到, 而在当前文件却可以读取到, 好奇怪。
5. 不知道为啥 `antd-mobile` 老是报错, `Uncaught Error: Cannot find module "antd-mobile"`(感觉是因为`webpack.config.js的 'css-loader?modules&importLoaders=1&localIdentName=[name]___[local]-[hash:base64:' +'5]&sourceMap=true'` `css-modules`搞的鬼)
