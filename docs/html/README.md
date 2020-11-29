# HTML

## HTML5

- Html5 语义化标签
  代码结构清晰，可读性高，减少差异化，便于团队开发和维护。
  在页面没有加载 CSS 的情况下，也能呈现良好的内容结构，提升用户体验。
  对搜索引擎友好，良好的结构和语义，有助于爬虫抓取更多的有效信息。

## 标签

- 根元素: html
- 文档元数据: head title base link meta style
- 脚本: script noscript template
- 章节: body address h1~h6 [section nav article aside header footer main]
- 内容: div p hr pre blockquote ol ul li dl dt dd figure figcaption
- 文字: a em strong samll s cite q

### H5 语义化标签

header nav section article aside footer

## 块、内联块、内联元素

- 块元素：以新行开始；height，line-height,margin,padding 可设置，width：100%，可容纳块元素或内联元素
  `div p h1~h6 ol ul li dl dt dd form hr table pre address blockquote`

- 内联块元素：
  `img input`

- 内联元素：和其他元素在一行内，height，line-height,margin,padding 不可改变，width 为内容宽度，只能容纳文本或者其他内联元素
  `span a b label strong em`

## cookie 与 storage

共同点：cookie 与 locationStorage 、sessionStorage 都是在浏览器端保存，且同源
不同点：

- cookie 会在 http 请求头中携带信息，会导致资源浪费，数据不安全；cookie 有大小限制，为 4KB 左右；一般为服务器生成，可设置失效时间。如果在浏览器生成，则默认关闭浏览器后失效。
- locationStorage 与 sessionStorage 仅在本地存储，大小限制为 5M；sessionStorage 会话存储，窗口关闭即无效；locationStorage 一直有效。

### img 标签属性 alt 与 title 区别

图片中的 alt 属性是在图片不能正常显示时出现的文本提示。 图片中的 title 属性是在鼠标在移动到元素上的文本提示。
