# Async

## 参考链接

- [阮一峰 ES6](https://es6.ruanyifeng.com/#docs/async)

Async 是 Generator 函数的语法糖，async 函数就是将 Generator 函数的星号（\*）替换成 async，将 yield 替换成 await，仅此而已。它的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。

```
const fs = require("fs");

const readFile = function(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function*() {
  const f1 = yield readFile("/file1");
  const f2 = yield readFile("/file2");
  console.log(f1.toString());
  console.log(f2.toString());
};

const asyncRead = async function() {
  const f1 = await readFile("/file1");
  const f2 = await readFile("/file2");
  console.log(f1.toString());
  console.log(f2.toString());
};
```

async 函数对 Generator 函数的改进，体现在以下四点。

- 内置执行器。Generator 函数的执行必须靠执行器，所以才有了 co 模块，而 async 函数自带执行器。也就是说，async 函数的执行，与普通函数一模一样，只要一行。

```
asyncReadFile();
```

- 更好的语义。async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。
- 更广的适用性。co 模块约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
- 返回值是 Promise。async 函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用 then 方法指定下一步的操作。

async 函数可以看作多个异步操作，包装成的一个 Promise 对象，而 await 命令就是内部 then 命令的语法糖。

## 捕获错误

async 函数内部抛出错误，会导致返回的 Promise 对象变为 reject 状态。抛出的错误对象会被 catch 方法回调函数接收到。所以最好把 await 命令放在 try...catch 代码块中。

```
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  });
}
```

## 多个异步操作

```
let foo = await getFoo();
let bar = await getBar();
```

多个异步操作，如果不存在继发关系，最好让它们同时触发。

```
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```
