const arr1 = [1, 2, 3, 4, 5];

arr1.every((item) => {
  console.log(item);
  return item > 3;
});
// 只输出 1 后就不再继续执行了

console.log([].every(() => {})); // true
