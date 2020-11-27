const fs = require("fs");

const readFile = function(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function*() {
  const f1 = yield readFile("/file1");
  const f2 = yield readFile("/file2");
  console.log(f1.toString());
  console.log(f2.toString());
};

const asyncRead = async function() {
  const f1 = await readFile("/file1");
  const f2 = await readFile("/file2");
  console.log(f1.toString());
  console.log(f2.toString());
};
