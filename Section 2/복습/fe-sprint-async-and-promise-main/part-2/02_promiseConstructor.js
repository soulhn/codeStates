const { rejects } = require("assert");
const fs = require("fs");

const getDataFromFilePromise = (filePath) => {
  return new Promise((resolve, rejects) => {
    //Promise는 비동기를 처리를 수행할 콜백 함수를 인수로 전달 받는다.
    //콜백함수는 resolve, reject 함수의 인자로 받는다.
    //코드 정상 처리 시 resolve, 실패시 rejects
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return rejects(err);
      resolve(data);
    });
  });
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

// getDataFromFilePromise("README.md").then((data) => console.log(data));

module.exports = {
  getDataFromFilePromise,
};
