// 防抖
function debounce(fn, delay) {
  let timeout = null;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
/* 防抖应用场景：
1. 登陆、发短信等按钮；
2. 浏览器窗口大小；
3. 文本编辑器实时保存；
*/
