# clone

## 深拷贝

### JSON.parse(JSON.stringify())

- 优点：
  - 在处理嵌套的对象或者是属性值是对另一个对象的引用时，都能很好的进行字符串化，不会出现丢失数据
- 缺点：
  - 不能对 undefined、function、Symbol(非安全的类型)格式的数据进行转化；
  - 不能对 Set、Map 正确转化，转化后为 {}
  - 循环引用会报错

```
const data = {
  str: "str",
  num: 123,
  bool: true,
  arr: [43, 2],
  undef: undefined,
  nil: null,
  fun: function() {
    console.log("fun");
  },
  setArr: new Set([3, 2, null]),
  sym: Symbol("fsd"),
  obj: { name: "aaa" },
  mapArr: new Map([
    ["name", "张三"],
    ["title", "Author"],
  ]),
};
console.log(JSON.stringify(data));
// 丢掉了 undefined、function、Symbol(非安全的类型)格式的数据;  Set、Map 转化为 {}
// {"str":"str","num":123,"bool":true,"arr":[43,2],"nil":null,"setArr":{},"obj":{"name":"aaa"},"mapArr":{}}
```