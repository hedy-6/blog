/*
setTimeout((_) => console.log(4));

new Promise((resolve) => {
  resolve();
  console.log(1);
}).then((_) => {
  console.log(3);
});

console.log(2);

// 输出结果：1 2 3 4
*/

/*
setTimeout((_) => console.log(4));

async function main() {
  console.log(1);
  await Promise.resolve();
  console.log(3);
}

main();

console.log(2);
// 输出结果：1 2 3 4
*/

/*
setTimeout((_) => console.log(4));

new Promise((resolve) => {
  resolve();
  console.log(1);
}).then((_) => {
  console.log(3);
  Promise.resolve()
    .then((_) => {
      console.log("before timeout");
    })
    .then((_) => {
      Promise.resolve().then((_) => {
        console.log("also before timeout");
      });
    });
});

console.log(2);
// 输出结果：1 2 3 before timeout also before timeout 4
*/

/*
const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}

// Good, looped for 2 seconds
// Ran after 2 seconds
*/

async function async1() {
  setTimeout(() => {
    console.log("async1 setTimeout");
  }, 0); // 宏任务
  console.log("async1 start"); // 同步
  await async2();
  console.log("async1 end"); // 微任务
}
async function async2() {
  console.log("async2"); // 同步
}
console.log("script start"); // 同步
async1();
setTimeout(function() {
  console.log("setTimeout"); // 宏任务
}, 0);
console.log("script end"); // 同步
// 1、从上到下，首先定义 async1 和 async2 两个方法 ；然后输出 "script start";
// 2、开始执行 async1 ，async1 中 setTimeout 是宏任务，放到队列里；先执行同步代码 "async1 start"；
// 3、然后开始执行 async2 ，async2 中输出 "async2"; 此时 await 相当于Promise.then() ，所以其后面的代码是微任务，等同步代码执行后才执行。
// 4、继续执行同步代码 "script end"
// 5、先执行微任务，输出 "async1 end"
// 6、输出 "async1 setTimeout"
// 7、最后输出 "setTimeout"

// script start
// async1 start
// async2
// script end
// async1 end
// async1 setTimeout
// setTimeout
