// const arr = [];

// function fun() {
//   for (var i = 0; i < 5; i++) {
//     arr.push(function() {
//       return i * i;
//     });
//   }
// }

// fun();
// console.info(arr[0]()); // 25
// console.info(arr[1]()); // 25

// function fun2() {
//   for (let i = 0; i < 5; i++) {
//     arr.push(function() {
//       return i * i;
//     });
//   }
// }

// fun2();
// console.info(arr[0]()); // 0
// console.info(arr[1]()); // 1

// function fun3() {
//   for (let i = 0; i < 5; i++) {
//     (function(n) {
//       arr.push(function() {
//         return n * n;
//       });
//     })(i);
//   }
// }

// fun3();
// console.info(arr[0]()); // 0
// console.info(arr[1]()); // 1

// const str = "hello word";
// const arr = str.split("");
// console.log(arr.reverse().join(""));
