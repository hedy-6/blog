// 基于原型链的继承
function Person(first, last) {
  this.name = first + " " + last;
}

Person.prototype.sayHi = function() {
  console.log("Hi," + this.name);
};

// Person 就是 Person.prototype 的构造函数
console.info(Person === Person.prototype.constructor); // true

let WangYi = new Person("Wang", "Yi", 24);
console.info(WangYi); // Person { name: 'Wang Yi', age: 24 }
console.info(WangYi.sayHi()); // hello, Wang Yi

function Teacher(first, last, sex) {
  // 通过function.call来调用父类的构造函数，但是无法自动指定Teacher.prototype的值，这样Teacher.prototype就只能包含在构造函数里构造的属性，而没有方法。因此需要利用Object.create()方法将Person.prototype作为Teacher.prototype的原型对象，并改变其构造器指向，使之与Teacher关联。
  Person.call(this, first, last);
  this.sex = sex;
}

console.info(Teacher.prototype.constructor); // [Function: Teacher]

let MissWang = new Teacher("Wang", "MeiMei", "woman");
console.info(MissWang); // Teacher { name: 'Wang MeiMei', age: 26, subject: '语文' }
// console.info(MissWang.greet()); // MissWang.greet is not a function

// 如果不加这一行，Teacher 的原型属性为空；无法从 Person 原型对象里继承方法;加了导致构造器指向变了
Teacher.prototype = Object.create(Person.prototype);
console.info(Teacher.prototype.constructor); // [Function: Person]
// 重新修改构造器指向
Teacher.prototype.constructor = Teacher;
console.info(Teacher.prototype.constructor); // [Function: Teacher]

Teacher.prototype.greet = function() {
  return "Good morning，" + this.name;
};
let MrLee = new Teacher("Li", "Lei", 42, "数学");
console.info(MrLee.greet()); // Good morning，Li Lei
