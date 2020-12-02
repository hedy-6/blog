// 给定起⽌日期，返回中间所有的月份;   参数是字符串格式，格式固定用-分割； 比如输入 2018-09 2019-01 ； 返回数组【2018-10 2018-11 2018-12】

function getMonths(str) {
  const [start, end] = str.split(" ");
  let [start_y, start_m] = start.split("-");
  let [end_y, end_m] = end.split("-");
  end_y = Number(end_y);
  end_m = Number(end_m);
  console.log(start_y);
  start_y = Number(start_y);
  start_m = Number(start_m);
  if (start_y > end_y) {
    return [];
  }
  // 超过一年
  const years = end_y - start_y;

  if (years === 0) {
    // 18.9 - 18.12
    const arr = [];
    const months = end_m - start_m;
    for (let i = 1; i < months; i++) {
      arr.push(`${start_y}-${start_m + i}`);
    }
    return arr;
  }
  if (years > 0) {
    // 18.9- 19.2 18.9+2+12*n
    const arr = [];
    let newM = 12 - start_m + end_m + (years - 1) * 12;
    let y_ = start_y;
    let m_ = start_m;
    for (let i = 1; i < newM; i++) {
      if (m_ + 1 > 12) {
        y_ = y_ + 1;
        m_ = m_ + 1 - 12;
      } else {
        m_ = m_ + 1;
      }
      arr.push(`${y_}-${m_}`);
    }
    return arr;
  }
}

console.log(getMonths("2018-05 2018-11"));
console.log(getMonths("2018-09 2018-9"));
console.log(getMonths("2018-09 2019-01"));
console.log(getMonths("2018-09 2020-05"));

// 与或

// {
//   type: 'and',
//     children: [
//       {
//         type: 'or',
//         children: [
//           {
//             info:1
//           }
//         ]
//       }
//     ]
// }

// react hook

// vue
// eslint ，stylelint, prettier
// git commit
