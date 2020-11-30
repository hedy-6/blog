# 原型与原型链

![prototype](./images/prototype.png)

每个实例对象（ object ）都有一个私有属性（称之为 `__proto__` ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( `__proto__` ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

```
function Person() {}

const peopleA = new Person();

console.log(Person.prototype.constructor === Person); // true
console.log(peopleA.constructor === Person.prototype.constructor); // true
console.log(peopleA.constructor === Person); // true 根据上面得出
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(peopleA) === Person.prototype); // true
console.log(peopleA.__proto__ === Person.prototype); // true 相当于是根据上面这个得出的

console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

```
