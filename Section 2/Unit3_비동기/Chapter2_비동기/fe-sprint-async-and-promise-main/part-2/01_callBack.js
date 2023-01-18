const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return callback(err, null);
    }
    callback(err, data);
  });
};

// getDataFromFile("README.md", (err, data) => console.log(data));

module.exports = {
  getDataFromFile,
};
