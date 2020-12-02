## Array

- includes
- find
- findIndex
- keys
- values
- entries
- from 将类数组(dom 集合，函数内部的 arguments)或 iterable(Set,字符串) 对象转为数组。以及支持有 length 属性的对象转数组。（扩展运算符（...）也可以将某些数据结构转为数组，原理是 iterable 接口。）

```
let arrayLike = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3,
};
# Array.prototype.slice
console.log([].slice.call(arrayLike)); // ES5的写法 [ 'a', 'b', 'c' ]
console.log(Array.from(arrayLike)); // ES6的写法 [ 'a', 'b', 'c' ]

console.log(Array.from("hello")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from(new Set(["a", "b"]))); // [ 'a', 'b' ]
console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]
```

### every

测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

> 若收到一个空数组，此方法在一切情况下都会返回 true。

### flat flatMap

flat 用来将数组拉平，默认参数为 1，只拉平一层；如果全部拉平，可以传 Infinity

> 如果原数组有空位，flat()方法会跳过空位。

```
const arr = [1, [2, [3, 4]]];
console.log(arr.flat()); // [ 1, 2, [ 3, 4 ] ]
console.log(arr.flat(1)); // [ 1, 2, [ 3, 4 ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4 ]
console.log(arr.flat(Infinity)); // [ 1, 2, 3, 4 ]
```

flatMap()方法对原数组的每个成员执行一个函数（相当于执行 Array.prototype.map()），然后对返回值组成的数组执行 flat()方法。该方法返回一个新数组，不改变原数组。

> flatMap()只能展开一层数组。

```
const arr = [1, 2, 3, 4];
console.log(arr.flatMap((x) => [x, x * 2])); // [ 1, 2, 2, 4, 3, 6, 4, 8]
```

#### 手动实现

```
function flat(arr, deep) {
  if (deep === undefined || deep === null || deep > 0) {
    deep = deep ? deep - 1 : deep;
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.reduce((newArr, item) => {
        newArr = newArr.concat(flat(item, deep));
        return newArr;
      }, []);
    }
    return arr;
  }
  return arr;
}

const arr = [1, [[2, [3, 4], [5, 6, 7]]], 8];
console.info("origin is ", arr);
console.info("0 is ", flat(arr, 0));
console.info("1 is ", flat(arr, 1));
console.info("2 is ", flat(arr, 2));
console.info("3 is ", flat(arr, 3));
console.info("4 is ", flat(arr, 4));
console.info("null is ", flat(arr));
```
