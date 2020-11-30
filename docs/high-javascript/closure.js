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

// var nAdd;
// var t = function() {
//   var n = 99;
//   nAdd = function() {
//     n++;
//   };
//   var t2 = function() {
//     console.log(n);
//   };
//   return t2;
// };

// var a1 = t();
// var a2 = t();

// nAdd();

// a1(); //99
// a2(); //100
// 当执行 a1=t 的时候，nAdd被赋值为一个函数fn1，function(){n++};
// 当执行a2=t 的时候，nAdd被重新赋值fn2，function(){n++};
// 当执行 nAdd 函数，我们执行的是其实是 fn2，而不是 fn1，我们更改的是 a2 形成的闭包里的 n 的值，并没有更改 a1 形成的闭包里的 n 的值

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
