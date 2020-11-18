# js

## 数据类型

原始类型：（值本身无法被改变）

- Boolean
- Null
- Undefined
- Number: 正负(2 的 53 次方 -1), +Infinity，-Infinity 和 NaN
- BigInt: 可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。BigInt 是通过在整数末尾附加 n 或调用构造函数来创建的。
- String
- Symbol: 唯一的并且是不可修改的

Object

### Number

- 检查值是否大于或小于 +/-Infinity，用 常量 Number.MAX_VALUE、Number.MIN_VALUE 判断
- 检查值是否在双精度浮点数的取值范围内用 Number.isSafeInteger() 方法还有 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER

### BigInt

- 通过使用常量 Number.MAX_SAFE_INTEGER，您可以获得可以用数字递增的最安全的值。通过引入 BigInt，您可以操作超过 Number.MAX_SAFE_INTEGER 的数字。
- 可以对 BigInt 使用运算符+、\*、-、\*\*和%，就像对数字一样。BigInt 严格来说并不等于一个数字，但它是松散的。
- 在将 BigInt 转换为 Boolean 时，它的行为类似于一个数字：if、||、&&、Boolean 和!。
- BigInt 不能与数字互换操作

```
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

### 类型判断

#### 使用 typeof

```
typeof true; // 'boolean'
typeof null; // 'object'
typeof undefined; // 'undefined'
typeof 2; // 'number'
typeof (2n ** 53n); // 'bigint'
typeof Symbol("Sym"); // 'symbol'
typeof "aaa"; // 'string'
typeof (function(){}) // 'function'
typeof []; // 'object'
typeof {}; // 'object'
typeof new Date(); // 'object'
```

#### instanceof

用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

## var let const 的对比

- var 有变量提升，初始值为 undefined；let 和 const 声明的变量是在定义被执行时才初始化，并且在初始化前访问该变量会陷入暂存死区。
- 在程序和方法的最顶端，var 会在全局对象里创建属性；let 和 const 不会。
- let 和 const 声明的变量只在其声明的块或子块中可用，var 声明的变量的作用域是整个封闭函数。
- var 可以重复声明变量；let 和 const 则不允许在同一个函数或块作用域中重复声明。

```
function varTest() {
  var x = 1;
  {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // 不同的变量
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

## 继承 -- 原型式的继承

参考链接

- [MDN-JavaScript 中的继承](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)
- [MDN-继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### 基于原型链的继承

#### 继承属性

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾（null）。

可以通过 `__proto__` 或 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 来访问。

> 注意：不要与构造函数 func 的 prototype 属性相混淆。被构造函数创建的实例对象的 [[Prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示 Object 的原型对象。

#### 继承方法

在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别，包括上面的“属性遮蔽”（这种情况相当于其他语言的方法重写）。

当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象。

### 创建对象和生成原型链

#### 使用语法结构创建的对象

```
var o = {a: 1};
// o ---> Object.prototype ---> null
var a = ["yo", "whadup", "?"];
// a ---> Array.prototype ---> Object.prototype ---> null
function f(){
  return 2;
}
// f ---> Function.prototype ---> Object.prototype ---> null
```

#### 使用构造函数创建的对象

> 注：每一个函数对象（Function）都有一个 prototype 属性，并且只有函数对象有 prototype 属性，因为 prototype 本身就是定义在 Function 对象下的属性。当我们输入类似 var person1=new Person(...)来构造对象时，JavaScript 实际上参考的是 Person.prototype 指向的对象来生成 person1。另一方面，Person()函数是 Person.prototype 的构造函数，也就是说 Person===Person.prototype.constructor。

```
// 基于原型链的继承
function Person(first, last) {
  this.name = first + " " + last;
}

Person.prototype.sayHi = function() {
  console.log("Hi," + this.name);
};

// Person 就是 Person.prototype 的构造函数
console.info(Person === Person.prototype.constructor); // true

function Teacher(first, last, sex) {
  // 通过 function.call 调用父类的构造函数，但是无法自定指定 Teacher.prototype 的值，这样 Teacher.prototype 只能包含在构造函数里构造的属性，而没有方法；因此需要借助 Object.create() 方法将 Person.prototype 作为 Teacher.prototype 的原型对象，并改变其构造器指向，使之与 Teacher 关联。
  Person.call(this, first, last);
  this.sex = sex;
}
console.info(Teacher.prototype.sayHi); // undefined
console.info(Teacher.prototype.constructor); // [Function: Teacher]
// 能够从 Person 原型对象里继承方法，但是导致构造器指向变了
Teacher.prototype = Object.create(Person.prototype);
console.info(Teacher.prototype.constructor); // [Function: Person]
// 重新修改构造器指向
Teacher.prototype.constructor = Teacher;

console.info(Teacher.prototype.constructor); // [Function: Teacher]

console.info(Teacher.__proto__); // [Function]
console.info(Teacher.__proto__.__proto__); // {}
console.info(Teacher.__proto__.__proto__.__proto__); // null

let MissWang = new Teacher("Li", "Lei");
console.info(MissWang.sayHi()); // Hi,Li Lei
```

#### 使用 Object.create 创建的对象

ECMAScript 5 中引入了一个新方法：Object.create()。可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数：

```
var a = {a: 1};
// a ---> Object.prototype ---> null
var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)
var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
```

#### 使用 class 关键字创建的对象

ECMAScript6 引入了一套新的关键字用来实现 class。这些新的关键字包括 class, constructor，static，extends 和 super。

```
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

#### 拓展原型链的方法

- 构造函数
- Object.create
- Object.setPrototypeOf
- `__proto__`

## new 的过程

this 指向问题
bind 实现方式
闭包
事件循环
手写 promise
