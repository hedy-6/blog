# 闭包

## 参考链接

- [阮一峰 闭包](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
- [MDN 闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

## 什么是闭包

首先要理解变量的作用域：全局变量和局部变量。在函数内部可以直接读取全局变量，但在函数外部无法读取函数内的局部变量。如何从外部读取函数内的局部变量，就需要通过闭包来实现。在 Javascript 语言中，只有函数内部的子函数才能读取其函数内的局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。

> 注意：函数内部声明变量的时候，如果没有用 let、const、var 声明，则该变量是全局变量。

```
function f1() {
  const str = "string";
  function f2() {
    console.log(str);
  }
  return f2;
}

const fun = f1();
fun();
```

## 闭包的作用

- 可以读取函数内部的变量；
- 让这些变量的值始终保持在内存中；

> ```
> # 自执行函数 IIFE（立即调用函数表达式）
> (function () {
>     statements
> })();
> ```

```
const Counter = (function() {
  let initValue = 0;
  return {
    value: function() {
      return initValue;
    },
    add: function() {
      ++initValue;
    },
    sub: function() {
      --initValue;
    },
  };
})();
console.log(Counter.value()); // 0
Counter.add();
Counter.add();
console.log(Counter.value()); // 2
Counter.sub();
console.log(Counter.value()); // 1
```

## 使用注意

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
- 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。
- 在循环中创建闭包，可能存在共用词法作用域的问题。可以使用 let、const 绑定块作用域。

## 题目解析

```
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function() {
    console.log(i);
  };
}

data[0](); // 3
data[1](); // 3
data[2](); // 3
// 当执行到data[0]函数的时候，for循环已经执行完了，i是全局变量，此时的值为3
```

采用闭包

```
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function(o) {
    return function() {
      console.log(o);
    };
  })(i);
}

data[0](); // 0
data[1](); // 1
data[2](); // 2
```
