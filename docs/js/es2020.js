// let a = Number.MAX_SAFE_INTEGER;
// console.info(++a); // 9007199254740992
// console.info(++a); // 9007199254740992

// let b = 9007199254740992n;
// console.info(++b); // 9007199254740993n
// console.info(++b); // 9007199254740994n

// async function getName(a) {
//   if (a === "a") {
//     const module = await import("./data.js");
//     console.info(module);
//   }
// }
// // getName("a");
// getName("b");

// console.log(false ?? "some value"); // false
// console.log(undefined ?? "some value"); // some value
// console.log(null ?? "some value"); // some value
// console.log(NaN ?? "some value"); // NaN

const promiseAll = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.reject("no"),
];
Promise.allSettled(promiseAll).then((results) => {
  console.info(results);
  // [
  //   { status: "fulfilled", value: 100 },
  //   { status: "rejected", reason: null },
  //   { status: "rejected", reason: "no" },
  // ];
});
