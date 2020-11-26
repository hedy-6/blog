# ES6

## Set Map WeakSet WeakMap

### Set WeakSet

作用是去重，区别是 WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet 中的对象都是弱引用，垃圾回收机制不考虑 WeakSet 对该对象的引用

```
let unique = [...new Set(arr)];
```

同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用 Array.from 方法。

```
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```

> 在 Set 内部，两个 NaN 是相等的。

属性：

- .constructor
- .size （WeakSet 没有该属性）

方法：

- .add
- .delete
- .has
- .clear （WeakSet 没有该方法）

遍历：

- Set.prototype.keys()：返回键名的遍历器 （key 和 value 一样）
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员 （WeakSet 不能这样遍历）

### Map WeakMap

## for of

### 将 DOM 节点列表转化成数组的几种方式

#### for 循环

```
var arr = [];
for(var i = 0, n; n = divs[i]; ++i) arr.push(n);
```

#### for of

```
for (let div of divs){console.log(div.id)}
```

#### Array.prototype.slice.call

```
Array.prototype.slice.call(divs)
```

#### Array.from

```
Array.from(divs)
```

#### 数组对象扩展运算符

> 扩展运算符（...）内部使用 for...of 循环

```
[...divs]
```
