# js

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

## 浮点数

如何解决浮点数计算问题

1. toPrecision()

2. 将小数转化为整数，再进行除法计算。

[github number-precision](https://github.com/nefe/number-precision/blob/master/src/index.ts)

```
const a = 0.1,
  b = 0.2;
console.log(a + b); // 0.30000000000000004
console.log(parseFloat((a + b).toPrecision(12))); // 0.3
console.log(parseFloat((a + b).toPrecision(16))); // 0.3
console.log(parseFloat((a + b).toPrecision(17))); // 0.30000000000000004
console.log(parseFloat((a + b).toPrecision(18))); // 0.30000000000000004

function add(num1, num2) {
  const num1Digits = (num1.toString().split(".")[1] || "").length;
  const num2Digits = (num2.toString().split(".")[1] || "").length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
console.log(add(a, b)); // 0.3
```

## this

- this 永远指向最后调用它的那个对象;
- 箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。

### 如何改变 this 指向

- 箭头函数
- 在函数内部使用 \_this = this
- 使用 apply、call、bind

-

## bind call apply

### bind

bind 是一个新函数，必须手动去调用

```
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

### call apply

```
func.apply(thisArg, [argsArray])
function.call(thisArg, arg1, arg2, ...)
```

### 区别

三个函数存在的区别, 用一句话来说的话就是: bind 是返回对应函数, 便于稍后调用; apply, call 则是立即调用. 除此外, 在 ES6 的箭头函数下, call 和 apply 的失效, 对于箭头函数来说:

- 函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;
- 不可以当作构造函数, 也就是说不可以使用 new 命令, 否则会抛出一个错误;
- 不可以使用 arguments 对象, 该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替;
- 不可以使用 yield 命令, 因此箭头函数不能用作 Generator 函数;

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

## 防抖和节流

### 防抖

触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间

```
function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => {
      // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log("防抖成功");
}

var inp = document.getElementById("inp");
inp.addEventListener("input", debounce(sayHi)); // 防抖
```

### 节流

高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率

```
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```
