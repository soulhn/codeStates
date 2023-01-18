const fs = require("fs");

const getDataFromFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    //첫번째 인자로는 수행할 비동기 작업
    //(err, data) 여기가 콜백함수에 전달하는 함수
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

getDataFromFilePromise("README.md")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = {
  getDataFromFilePromise,
};
