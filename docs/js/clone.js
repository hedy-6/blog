const data = {
  str: "str",
  num: 123,
  bool: true,
  arr: [43, 2],
  arr2: [{ name: "hello" }, { name: "world" }],
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

/*
// 使用 JSON.stringify 转化，会丢掉 undefined、function、Symbol(非安全的类型)格式的数据;  并且Set、Map 转化为 {}
console.log(JSON.stringify(data));
// {"str":"str","num":123,"bool":true,"arr":[43,2],"nil":null,"setArr":{},"obj":{"name":"aaa"},"mapArr":{}}
*/

/*
//  使用 JSON.stringify 转化，对象属性循环引用会报错
const data = {
  name: "aaa",
  child: null,
};
data.child = data;
console.log(JSON.stringify(data));
// TypeError: Converting circular structure to JSON
*/

function deepClone(obj, map = new Map()) {
  if (typeof obj !== "object" && obj !== null) {
    return obj;
  }
  const type = Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLocaleLowerCase();
  switch (type) {
    case "array":
      return [...obj];
    case "set":
      return new Set([...obj]);
    case "map":
      return new Map([...obj]);
    default:
      break;
  }
  let newObj = {};
  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}
const newData = deepClone(data);
console.log(newData);
