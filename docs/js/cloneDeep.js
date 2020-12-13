function clone(target, map = new Map()) {
  if (typeof target !== "object" && target !== null) {
    return target;
  }
  let newTarget = Array.isArray(target) ? [] : {};
  if (map.get(target)) {
    console.info("target", target);
    return target;
  }
  for (let key in target) {
    newTarget[key] = clone(target[key], map);
  }
  map.set(target, newTarget);
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
