# react-hook

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## 为什么要引入 hook

- 组件之间复用状态逻辑困难，以往采用高阶组件，但是导致组件被层层包装，代码结构不够清晰，难以追溯。
- 复杂组件难以理解。componentDidMount 和 componentDidUpdate 数据提取，componentDidMount 设置事件监听，并在 componentWillUnmount 清理。

Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。

- 只在最顶层使用 Hook
  不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。遵守这条规则， 使得 Hook 的调用顺序在多次渲染之间保持一致。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

- 只在 React 函数中调用 Hook
  不要在普通的 JavaScript 函数中调用 Hook；
  在 React 的函数组件中调用 Hook；
  在自定义 Hook 中调用其他 Hook；
