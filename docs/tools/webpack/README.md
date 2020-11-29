# Webpack

## 常用的 loaders

### css 相关

- css-loader 将多个 css 文件整合到一个 css 文件中
- style-loader 将整合的 css 文件挂载到 head 标签中
- postcss-loader 部分 css 特性需要加上次厂商前缀
- sass-loader 翻译成 css 文件
- less-loader 翻译成 css 文件
- style-resources-loader

### 图片、资源类

- url-loader 内部封装了 file-loader，区别是它能识别图片的大小，没有超出限制大小转为 base64；超出限制，用 file-loader 处理。
- file-loader 对图片文件等资源打包路径做处理。另一方面处理字体图标等文件打包。
- @svgr/webpack

### js 类

- babel-loader @babel/core @babel/preset-env 处理 es6 语法，将语法翻译成 es5 语法

-

## 常用的 plugin

- HtmlWebpackPlugin 生成 html 文件，将打包好的 js 自动引入到 html 中
- CleanWebpackPlugin 在打包前删除所以上一次打包好的文件
- BundleAnalyzerPlugin 分析包的体积
- LodashModuleReplacementPlugin lodash 按需加载
- MiniCssExtractPlugin CSS 代码压缩提取
- WorkboxWebpackPlugin
- ForkTsCheckerWebpackPlugin
- ESLintPlugin
- optimization.splitChunks （4 之前用 CommonsChunkPlugin）

## BundleAnalyzerPlugin

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
module.exports = {
  'plugins': [
    new BundleAnalyzerPlugin(),
  ]
};
```

分析包的体积

## 配置 lodash 按需加载

![未配置前](./webpack-lodash-old.png)

![配置后](./webpack-lodash-new.png)

```
yarn add lodash
yarn add lodash-webpack-plugin babel-loader babel-plugin-lodash @babel/core @babel/preset-env @babel/cli
```

在 `webpack.config.js` 中配置

```
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  'module': {
    'rules': [{
      'use': 'babel-loader',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'options': {
        'plugins': ['lodash'],
        presets: [["@babel/env", { targets: { node: 6 } }]],
      }
    }]
  },
  'plugins': [
    new LodashModuleReplacementPlugin,
  ]
};
```

## 配置 moment

![未配置前](./webpack-moment-old.png)
![配置后](./webpack-moment-ignore.png)

### 使用 IgnorePlugin

在 `webpack.config.js` 中配置

```
module.exports = {
  plugins: [
    // 在打包时排除moment中所有的locale下的文件
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
```

### 使用 moment-locales-webpack-plugin

```
yarn add -D moment-locales-webpack-plugin
```

在 `webpack.config.js` 中配置

```
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  plugins: [
    new MomentLocalesPlugin(),
    // 或
    // new MomentLocalesPlugin({
    //   localesToKeep: ["zh-cn"],
    // }),
  ],
};
```
