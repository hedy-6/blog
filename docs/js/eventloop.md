# Event Loop 宏任务和微任务

## 参考链接

[阮一峰 JavaScript 运行机制详解：再谈 Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

## Event Loop

JavaScript 是一种单线程语言，即同一个时间只能做一件事。

为什么 JavaScript 不能有多个线程呢？主要是因为作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

JavaScript 通过事件循环机制实现（Event Loop）异步任务和多线程。事件循环有三部分组成：

- 调用栈(call Stack): 普通函数执行时先放入调用栈中按顺序执行并立即释放。
- 消息队列(Message Queue): 异步函数（setTimeout，setInteval，xhr...）执行时放入消息队列中，执行完调用栈中的任务后执行。
- 微任务队列(Microtack Queue): promise，async，await 创建的函数先放入到微任务队列中，调用栈清空后立即被执行。

## 宏任务和微任务的区别

在当前的微任务没有执行完成时，是不会执行下一个宏任务的。

> setTimeout 就是作为宏任务来存在的，而 Promise.then 则是具有代表性的微任务。new Promise 在实例化的过程中所执行的代码都是同步进行的，而 then 中注册的回调才是异步执行的。在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。

- 宏任务：宿主环境提供的一般为宏任务，setTimeout, setInterval
- 微任务：js 引擎自身提供的一般为微任务，Promise

```
setTimeout((_) => console.log(4));

new Promise((resolve) => {
  resolve();
  console.log(1);
}).then((_) => {
  console.log(3);
});

console.log(2);

// 输出结果：1 2 3 4
```

> 此处用 async 和 await 效果同上
