const obj = {};

/*
Object.defineProperty(obj, "name", {
  value: "Alice",
});
console.info(obj); // {}
 */

/*
Object.defineProperty(obj, "name", {
  enumerable: true,
  value: "Alice",
});
console.info(obj); // { name: 'Alice' }
obj.name = "Bob";
console.info(obj); // { name: 'Alice' }
*/

/*
Object.defineProperty(obj, "name", {
  enumerable: true,
  writable: true,
  value: "Alice",
});
console.info(obj); // { name: 'Alice' }
obj.name = "Bob";
console.info(obj); // { name: 'Bob' }
delete obj.name;
console.info(obj); // { name: 'Bob' }
*/

/*
Object.defineProperty(obj, "name", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: "Alice",
});
console.info(obj); // { name: 'Alice' }
obj.name = "Bob";
console.info(obj); // { name: 'Bob' }
delete obj.name;
console.info(obj); // {}
*/

Object.defineProperty(obj, "name", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("get");
    return "hanson";
  },
  set(newVal) {
    console.log("set" + newVal);
  },
});

console.log(obj);
console.log(obj.name);
obj.name = "beauty";
console.log(obj.name);
delete obj.name;
console.log(obj);

// { name: [Getter/Setter] }
// get
// hanson
// setbeauty
// get
// hanson
// {}
