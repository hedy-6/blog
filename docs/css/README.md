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

## css 单位

### 相对长度单位

- rem: 根元素 html 的字体大小
- em: 在 font-size 中使用的是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小
- vw: 视窗宽度的 1%
- vh: 视窗高度的 1%
- vmin: 视窗较小尺寸的 1%
- vmax: 视图大尺寸的 1%
- lh: 元素的 line-height
- ch: 数字“0”的宽度
- ex: 字符“x”的高度

### 绝对长度单位

- px: 像素
- pt: 点
- pc: 十二点活字
- in: 英寸
- Q: 四分之一毫米
- mm: 毫米
- cm: 厘米

## 垂直居中

### gird

```
dispaly: gird;
place-items: center;
```

或者

```
.root {
  width: 500px;
  height: 500px;
  background-color: #0ff;
  display: grid;
}
.main {
  width: 200px;
  height: 200px;
  background-color: #f00;
  align-self: center;
  justify-self: center;
}
```

或

```
.root {
  width: 500px;
  height: 500px;
  background-color: #0ff;
  display: grid;
}
.main {
  width: 200px;
  height: 200px;
  background-color: #f00;
  margin: auto;
}
```

### flex

```
display: flex;
align-items: center;
justify-content: center;
```

另一种方式

```
.root {
  width: 500px;
  height: 500px;
  background-color: #0ff;
  display: flex;
}
.main {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: #f00;
}
```

### 相对布局

```
.root {
  width: 500px;
  height: 500px;
  background-color: #0ff;
  position: relative;
}
.main {
  width: 200px;
  height: 200px;
  background-color: #f00;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

或

> 使用了 CSS 中的定位属性（absolute、fixed 等）后，如果 left 设置了具体值，没有设置 right 和 width，那么就会自动计算，把剩余的空间分配给 right 和 width。如果 left、right 和 width 都设置了具体值，并且没有占满横向空间，那么剩余空间就处于待分配状态，此时设置 margin: auto; 意味着把剩余的空间分配给 margin，并且左右均分，所以就实现了水平居中，垂直方向同理。缺点：需要固定居中元素的宽高，否则其宽高会被设为 100%（副作用)

```
.root {
  width: 500px;
  height: 500px;
  background-color: #0ff;
  position: relative;
}
.main {
  width: 200px;
  height: 200px;
  background-color: #f00;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### table 布局

```
.root {
  width: 500px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.main {
  display: inline-block; // 必须设置为 inline-block
  width: 200px;
  height: 200px;
  background-color: #f00;
}
```

## 盒模型

```
width: 300px;
border: 5px solid green;
padding: 10px;
margin: 20px;
```

谷歌浏览器默认为 content-box;IE 浏览器默认为 border-box;

- css 设置 box-sizing: content-box;

![css 设置 box-sizing: border-box;](@img/css/css-content-box.png)

- css 设置 box-sizing: border-box;

![css 设置 box-sizing: content-box;](@img/css/css-border-box.png)

## 选择器

#### 参考链接

- [阮一峰 CSS 选择器](http://www.ruanyifeng.com/blog/2009/03/css_selectors.html)
- [W3C CSS 选择器](https://www.w3school.com.cn/cssref/css_selectors.asp)

1. 基本选择器

- .class;
- #id;
- \*;
- element;

2. 多元素组合选择器

- elementA,elementB;
- elementP elementC;
- elementP>elementC;
- element+element;
- element1~element2(选择前面有 `element1` 元素的每个 `element2` 元素。);

3. 属性选择器

- [attribute];
- [attribute=value];
- [attribute~=value] 选择 attribute 属性包含 `value` 的所有元素。;
- [attribute|=value] 选择 attribute 属性值以 `value` 开头的所有元素;
- [attribute^=value] 开头;
- [attribute\$=value] 结尾;
- [attribute\*=value] 包含;

4. 伪类选择器

- :first-child;
- :only-child
- :last-child
- :nth-child(n)
- :nth-last-child(n)
- :first-of-type
- :last-of-type
- :last-of-type
- :nth-of-type(n)
- :nth-last-of-type(n)
- :link;
- :visited;
- :active;
- :hover;
- :focus;
- :lang(language)
- :root;
- :before;
- :after;
- :first-line;
- :first-letter;

- :enabled;
- :disabled;
- :checked;
- ::selection;
- :em.ty;
- :target
- :not(selector)

## flex 布局

> 设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

### 容器属性

#### flex-direction

主轴的方向

- row
- row-reverse
- column
- column-reverse

#### flex-wrap

换行

- nowrap
- wrap
- wrap-reverse

#### flex-flow

flex-direction 和 flex-wrap 的简写，默认为 row nowrap

#### justify-content

水平方向对齐方式

- flex-start
- flex-end
- center
- space-between 两端对齐，项目之间的间隔都相等。
- space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

#### align-items

垂直方向对齐

- flex-start
- flex-end
- center
- baseline 项目的第一行文字的基线对齐。
- stretch 如果项目未设置高度或设为 auto，将占满整个容器的高度。

#### align-content

多根轴线的对齐方式

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### 项目属性

#### order

定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

#### flex-grow

属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

#### flex-shrink

属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

#### flex-basis

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

#### flex

是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### align-self

允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

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
