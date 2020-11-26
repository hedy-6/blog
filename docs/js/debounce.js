function debounce(fn) {
  let timeout = null;
  return function(params) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
