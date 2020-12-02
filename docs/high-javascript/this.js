// var value = 1;

// var foo = {
//   value: 2,
//   bar: function() {
//     return this.value;
//   },
// };

// //示例1
// console.log(foo.bar()); // 2
// //示例2
// console.log(foo.bar()); // 2
// //示例3
// console.log((foo.bar = foo.bar)()); // 1
// //示例4
// console.log((false || foo.bar)()); // 1
// //示例5
// console.log((foo.bar, foo.bar)()); // 1

/*
function Foo() {
  getName = function() {
    console.log(1);
  };
  return this;
}

function getName() {
  console.log(5);
}

Foo().getName();
// 1
*/

/*
// call
var foo = { value: 1 };
function bar() {
  console.log(this.value);
}
bar.call(foo); // 1
*/
/*
// v1
Function.prototype.call1 = function(obj) {
  obj.fn = this;
  obj.fn();
  delete obj.fn;
};
*/
/*
// v2
Function.prototype.call2 = function(obj, ...arguments) {
  obj.fn = this;
  var args = [];
  for (var i = 0, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  eval("obj.fn(" + args + ")");
  delete obj.fn;
};
*/
// var foo = { value: 18 };
// function bar(name, sex) {
//   console.log(`name is ${name}, sex is ${sex}, age is ${this.value}`);
// }
// bar.call2(foo, "Bob", "man"); // 1

// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
function get