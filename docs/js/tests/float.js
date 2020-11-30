const a = 0.1,
  b = 0.2;
// console.log(a + b); // 0.30000000000000004
// console.log(parseFloat((a + b).toPrecision(12))); // 0.3
// console.log(parseFloat((a + b).toPrecision(16))); // 0.3
// console.log(parseFloat((a + b).toPrecision(17))); // 0.30000000000000004
// console.log(parseFloat((a + b).toPrecision(18))); // 0.30000000000000004

function add(num1, num2) {
  const num1Digits = (num1.toString().split(".")[1] || "").length;
  const num2Digits = (num2.toString().split(".")[1] || "").length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}

console.log(add(a, b)); // 0.3
