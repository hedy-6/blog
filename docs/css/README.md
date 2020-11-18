# css

## 布局

- 正常布局流
- display 属性
- 弹性盒子：创建横向或是纵向的一维页面布局
- 网格：用于同时在两个维度上把元素按行和列排列整齐。
- 浮动
- 定位
- CSS 表格布局
- 多列布局

## 模块化 CSS

### BEM

[官网](http://getbem.com/)

BEM 即分为以下三部分

- Block：具有独立意义的独立实体。如：header, container, menu, checkbox, input
- Element：块的一部分，没有独立的含义，并且在语义上与该块相关。如： menu item, list item, checkbox caption, header title
- Modifier：块或元素上的标志，使用它们可以更改外观或行为。如：disabled, highlighted, checked, fixed, size big, color yellow

命名规则

```
.block {}
.block__element {}
.block--modifier {}
# 如：
.button
.button__icon
.button--danger .button--success
```

- [OOCSS](http://oocss.org/)
- [SMACSS](http://smacss.com/)
- [SUITCSS](http://suitcss.github.io/)
- [ATOMIC](https://github.com/nemophrost/atomic-css)

### CSS Modules

- [css-modules github](https://github.com/css-modules/css-modules)
- [阮一峰老师教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

在 `webpack.config.js` 下使用 CSS Modules。更多可参考 [webpack-demo](https://github.com/css-modules/webpack-demo)

```
{
  test: /\.css$/,
  loader: 'style!css-loader?modules'
}
```
