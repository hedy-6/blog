/**
 * 默认绑定
 * 在非严格模式下this指向的是全局对象window，而在严格模式下会绑定到undefined。
 */
/*
var a = 10;
function foo() {
  console.log(this.a);
}
foo(); // 10
*/

/*
"use strict";
var a = 10;
function foo() {
  console.log(window.a); // 10
  console.log(this.a); // 报错 Cannot read property 'a' of undefined
}
foo();
*/

/*
let a = 10;
const b = 20;

function foo() {
  console.log(this.a); // undefined
  console.log(this.b); // undefined
}
foo();
console.log(window.a); // undefined
*/

/*
var a = 1;
function foo() {
  var a = 2;
  console.log(this.a); // 1
}

foo();
*/

/** ----error-----
var a = 1;
function foo() {
  var a = 2;
  function inner() {
    console.log(this.a); // 1
  }
  inner();
}

foo();
 */

/**
 * 隐式绑定
 * this 永远指向最后调用它的那个对象
 */
/*
function foo() {
  console.log(this.a); // 1
}
var obj = { a: 1, foo };
var a = 2;
obj.foo();
*/

/* 
function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo(); // 1
foo2(); // 2
*/

/*
function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo };

obj.foo(); // 1
foo2(); // 2
obj2.foo2(); // 3
*/

/*
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  fn();
}
var obj = { a: 1, foo };
var a = 2;
doFoo(obj.foo); // 2
*/

function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this); // { a:3, doFoo: f }
  fn(); // 2
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo);
