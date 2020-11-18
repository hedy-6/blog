// 基于原型链的继承2

let f = function() {
  this.a = 1;
  this.b = 2;
};
console.info(f); // [Function: f]

let o = new f();
console.info(o); // f { a: 1, b: 2 }

f.prototype.b = 3;
f.prototype.c = 4;
console.info(o); // f { a: 1, b: 2 }
// 访问属性的时候，先访问自身属性，在访问原型属性，所以先读取到2，为2
console.info(o.b); // 2
console.info(o.c); // 4

console.info(o.__proto__); // f { b: 3, c: 4 }
// __proto__ 相当于 constructor.prototype 或 o.[[Prototype]]
console.info(o.constructor.prototype); // f { b: 3, c: 4 }
console.info(o.__proto__.__proto__); // {}
console.info(o.__proto__.__proto__.__proto__); // null

// 防抖 每次触发后几秒执行一次
function debounce(fn, delay) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

// 节流 在一定时间内执行一次
function throttle(fn, delay) {
  let isCanRun = true;
  return function() {
    if (!isCanRun) return;
    isCanRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      isCanRun = true;
    }, delay);
  };
}
