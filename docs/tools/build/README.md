# 打包工具

## Webpack

## Rollup

Rollup 使用 ES6 模块，而不是以前的特殊解决方案，如 CommonJS 和 AMD。ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。

## Webpack VS Rollup

[参考链接](https://segmentfault.com/a/1190000022227140)

- Rollup
  - 优点：
    - 使用 ES6 模块，允许静态分析，实现 Tree-shaking，从而剔除未使用的代码，减少冗余；
    - 轻量、快速、低复杂度；
    - 所有模块构建在一个函数内，执行效率高；
    - config 文件支持通过 ESM 模块格式书写；
    - 可以一次输出多种格式：IIFE、AMD、CJS、UMD、ESM
    - development 与 production 版本：.js,.min.js
    - 文档精简
  - 缺点：只能对 JavaScript 模块进行打包
- Webpack
  - 优点：代码拆分；按需加载；也支持 tree-shake ；静态资源导入（如js、css、img、font等）
  - 缺点：会产生很多冗余的代码

当项目或库只有js，没有静态资源文件，使用 Rollup
