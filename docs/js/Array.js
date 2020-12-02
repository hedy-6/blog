const arr = [1, 2, 3, 4, 5, 6];
// 返回index
console.log([...arr.keys()]); // [ 0, 1, 2, 3, 4, 5 ]
// 返回value
console.log([...arr.values()]); // [ 1, 2, 3, 4, 5, 6 ]
// 返回[index,value]
console.log([...arr.entries()]); // [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ] ]
console.log(arr.includes(3)); // true

/*
Array.from()
let arrayLike = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3,
};
console.log([].slice.call(arrayLike)); // ES5的写法 [ 'a', 'b', 'c' ]
console.log(Array.from(arrayLike)); // ES6的写法 [ 'a', 'b', 'c' ]

console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from(new Set(["a", "b"]))); // [ 'a', 'b' ]
console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]
*/
