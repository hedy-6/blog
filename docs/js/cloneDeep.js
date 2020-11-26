function clone(target, map = new Map()) {
  if (typeof target !== "object" && target !== null) {
    return target;
  }
  let newTarget = Array.isArray(target) ? [] : {};
  if (map.get(target)) {
    return target;
  }
  map.set(target, newTarget);
  for (let key in target) {
    newTarget[key] = clone(target[key], map);
  }
  return newTarget;
}
const obj = {
  name: "a",
  info: { age: 36 },
  children: [{ name: "Alice" }, { name: "Bob" }],
};
obj.user = obj;
const obj2 = clone(obj);
obj2.name = "b";
console.log(obj);
console.log(obj.user);
console.log(obj2);
