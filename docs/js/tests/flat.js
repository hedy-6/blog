/*
// 实现flat
function flat1(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((c, i) => {
      return (c = c.concat(flat1(i)));
    }, []);
  }
  return arr;
}

const arr1 = [1, [2, [3, 4]]];
console.log(flat1(arr1));
*/

/*
// 有deep参数
function flat2(arr, deep) {
  if (Array.isArray(arr)) {
    if (deep === null || deep === undefined || deep > 0) {
      if (deep > 0) deep -= 1;
      return arr.reduce((c, i) => {
        c = c.concat(flat2(i, deep));
        return c;
      }, []);
    }
    return arr;
  }
  return arr;
}
const arr2 = [1, [2, [3, 4]]];
console.log(flat2(arr2, 1));
console.log(flat2(arr2, 2));
*/
/**/
// 绑定到数组原型上
function flat3(deep) {
  if (deep === undefined || deep === null || deep > 0) {
    if (deep) deep -= 1;
    return this.reduce((newArr, item) => {
      if (Array.isArray(item) && item.length > 0) {
        newArr = newArr.concat(item.flat_(deep));
        return newArr;
      }
      newArr.push(item);
      return newArr;
    }, []);
  }
  return this;
}

Array.prototype.flat_ = flat3;
const arr3 = [1, [2, [3, 4]], , , ,];
// forEach,filter,reduce,every和some 会自动过滤空格。
// console.info("origin is ", arr3);
// console.info("0 is ", arr3.flat_());
// console.info("1 is ", arr3.flat_(1));
// console.info("2 is ", arr3.flat_(2));

arr3.forEach((o) => console.info("forEach", o));
arr3.filter((o) => {
  console.info("filter", o);
  return true;
});
arr3.reduce((arr, i) => {
  console.info("reduce", i);
  arr.push(i);
  return arr;
}, []);
arr3.every((o) => {
  console.info("every", o);
  return true;
});
arr3.some((o) => {
  console.info("some", o);
});
// */
