/*
function Person(name) {
  console.info("name", name);
  this.name = name;
  return name;
}
const a = new Person("A");

function Student(name, age) {
  this.name = name;
  this.age = age;
  return {
    name,
    age,
  };
}
const b = new Student("B", 18);
console.log(a); // Person {}
console.log(b); // { name: 'B', age: 18 }

function newFun(fn, ...args) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  // Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.apply(obj, args);
  console.info("result", result);
  return result instanceof Object ? result : obj;
}

var f1 = newFun(Person, "f1");
var f2 = newFun(Student, "f2", 16);
console.log(f1);
console.log(f2);
*/

var c = { p: 21 };
Object.myCreate = function(proto, properties) {
  function F() {}
  F.prototype = proto;
  let f = new F();
  if (properties) {
    Object.defineProperties(f, properties);
  }
  return f;
};
// var o = Object.create(c, { q: { value: 42 } });
var o = Object.myCreate(c, { q: { value: 42 } });
console.info("o", o); // {}
console.info(o.p, o.q); // 21, 42
console.info(o.hasOwnProperty("p"), o.hasOwnProperty("q")); // false true
console.info(o.prototype); // undefined
console.info(o.__proto__); // { p: 21 }
console.info(o.prototype === c); // false
console.info(o.__proto__ === c); // true
console.info(o.prototype === Object); // false
// Object.myCreate = function name() {};
