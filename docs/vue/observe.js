function observe(data) {
  if (typeof data !== "object") {
    return;
  }
  for (const key in data) {
    if (Object.hasOwnProperty(key)) {
      const value = object[key];
      observe(value);
      Object.defineProperty(data, key, {
        enumerable: true,
        get: () => {
          console.info("get");
          return value;
        },
        set: (newVal) => {
          if (value === newVal) {
            return;
          }
          console.info("set");
          value = newVal;
          observe(value);
        },
      });
    }
  }
}

const obj = { a: 1, b: { c: 2 } };
observe(obj);
console.log(obj); // { a: 1, b: { c: 2 } }
console.log(obj.a); // 1
console.log(obj.b); // { c: 2 }
console.log(obj.b.c); // 2
