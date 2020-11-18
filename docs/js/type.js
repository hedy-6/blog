// console.log(typeof NaN); // number
// console.log(typeof null); // object
// console.log(typeof []); // object
// console.log(typeof {}); // object
// console.log(typeof new Date()); // object
// console.log(typeof /regex/); // object
// console.log(typeof function() {}); // function
// 除 Function 外的所有构造函数的类型都是 'object'
// const str = new String("String");
// const num = new Number(100);
// console.log(typeof str); // 返回 'object'
// console.log(typeof num); // 返回 'object'

// const func = new Function();
// console.log(typeof func); // 返回 'function'
function getType(params) {
  return Object.prototype.toString.call(params);
}
console.log(getType(NaN)); // [object String]
