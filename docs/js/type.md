# 类型及类型判断

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

- typeof: 返回该变量的类型。
- instanceof: 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
- Object.prototype.toString(): 返回一个表示该对象的字符串。
- constructor: 利用原型上的 prototype.constructor 指向实例的构造函数来进行判断。

## 类型判断

### typeof

#### 参考链接

- [MDN typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

#### 语法

```
typeof operand
typeof(operand)
```

> 总结：可以用来判断原始类型（null 除外）；并且该原始类型不是通过构造函数创建的。

```
# 注意这两个
console.log(typeof NaN); // number
console.log(typeof null); // object

console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof /regex/); // object

console.log(typeof function() {}); // function

# 使用 new 操作符
const str = new String("String");
const num = new Number(100);
console.log(typeof str); // 返回 'object'
console.log(typeof num); // 返回 'object'

const func = new Function();
console.log(typeof func); // 返回 'function'
```

### instanceof

#### 参考链接

- [MDN instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

#### 语法

```
object instanceof constructor
```

```
const str1 = "str";
const str2 = new String("str");
const date = new Date();
const obj = {};
const nullObj = Object.create(null);

console.log(str1 instanceof String); // 返回 false, 检查原型链会找到 undefined
console.log(str2 instanceof String); // 返回 true
console.log(str2 instanceof Object); // 返回 true

console.log(obj instanceof Object); // 返回 true, 尽管原型没有定义
console.log(nullObj instanceof Object); // 返回 false, 一种创建非 Object 实例的对象的方法

console.log(date instanceof Date); // 返回 true
console.log(date instanceof Object); // 返回 true

function Fun() {}
const fun1 = new Fun();
console.log(fun1 instanceof Fun); // true
console.log(Fun instanceof Object); // true
console.log(fun1 instanceof Object); // true

Fun.prototype = {};
console.log(fun1 instanceof Fun); // false
console.log(Object.getPrototypeOf(fun1)); // Fun {}
console.log(Fun.prototype); // {}

```

#### instanceof 和多个全局对象的交互

在浏览器中，我们的脚本可能需要在多个窗口之间进行交互。多个窗口意味着多个全局环境，不同的全局环境拥有不同的全局对象，从而拥有不同的内置类型构造函数。这可能会引发一些问题。

```
# 在多个 frame 中
[] instanceof window.frames[0].Array  // false
# 可以通过 Array.isArray(myObj) 或 Object.prototype.toString.call(myObj) === "[object Array]" 来判断
```

### Object.prototype.toString()

默认情况下，toString() 方法被每个 Object 对象继承。

```
const toString = Object.prototype.toString;

console.log(toString.call(new Date())); // [object Date]
console.log(toString.call(new String())); // [object String]
console.log(toString.call(Math)); // [object Math]

//Since JavaScript 1.8.5
console.log(toString.call(undefined)); // [object Undefined]
console.log(toString.call(null)); // [object Null]
```

### constructor

- null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。
- 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object

### 总结

```
function getType(params) {
  return Object.prototype.toString.call(params);
}
console.log(getType("str")); // [object String]
console.log(getType(123)); // [object Number]
console.log(getType(true)); // [object Boolean]
console.log(getType(null)); // [object Null]
console.log(getType(undefined)); // [object Undefined]
console.log(getType(Symbol("a"))); // [object Symbol]
console.log(getType(BigInt(Number.MAX_SAFE_INTEGER + 10))); // [object BigInt]
console.log(getType({})); // [object Object]
console.log(getType(function() {})); // [object Function]
console.log(getType(new Date())); //[object Date]
```
