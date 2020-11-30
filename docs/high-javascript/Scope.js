// var value = 1;
// function foo() {
//   console.log(value);
// }
// function bar() {
//   var value = 2;
//   foo();
// }
// bar(); // 1

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     console.log(scope); // local scope
//     return scope;
//   }
//   return f();
// }
// checkscope();

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     console.log(scope); // local scope
//     return scope;
//   }
//   return f;
// }
// checkscope()();

// var a = 10;
// var o = {
//   a: 11,
//   b: {
//     fn: function() {
//       console.log(a); // 10
//       console.log(this.a); // undefined
//     },
//   },
// };
// o.b.fn();

// function foo() {
//   console.log("foo1");
// }
// foo(); // foo2
// function foo() {
//   console.log("foo2");
// }
// foo(); // foo2
/**
 * 预编译之后
function foo() {
  console.log("foo1");
}
function foo(params) {
  console.log("foo2");
}
foo(); // foo2
foo(); // foo2
 */

// function foo() {
//   console.log(a);
//   a = 1;
// }
// foo(); // a is not defined
// function bar() {
//   a = 1;
//   console.log(a);
// }
// bar(); // 1

console.log(foo);
function foo() {
  console.log("foo");
}
var foo = 1;
// [Function: foo]
