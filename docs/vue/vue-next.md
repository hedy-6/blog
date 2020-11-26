# vue-next

## vite

使用了浏览器原生的 ESM（type="module"）能力。所有的 js 文件经过 vite 处理后，其 import 的模块路径都会被修改，在前面加上 /@modules/。当浏览器请求 import 模块的时候，vite 会在 node_modules 中找到对应的文件进行返回。这样就省略了打包的过程，大大提升了开发效率。当然 vite 也提供了生产模式，利用 Rollup 进行构建。

vite 在启动时，内部会启一个 http server，用于拦截页面的脚本文件。
