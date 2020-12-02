// 节流
function throttle(fn, delay) {
  let isCan = true;
  return function() {
    if (!isCan) return;
    isCan = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      isCan = true;
    }, delay);
  };
}
/* 节流应用场景：
1. scroll 事件；
2. 浏览器播放事件；
3. input 实时搜索；
*/
