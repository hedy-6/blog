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
