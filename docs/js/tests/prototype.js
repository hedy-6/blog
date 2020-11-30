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
