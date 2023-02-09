const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return getDataFromFilePromise(user1Path).then((user1Data) => {
    return getDataFromFilePromise(user2Path).then((user2Data) => {
      const user1ParseData = JSON.parse(user1Data);
      const user2ParesData = JSON.parse(user2Data);
      return [user1ParseData, user2ParesData];
    });
  });
};

// const readAllUsersChaining = () => {
//   // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
//   //then 밖의 result 변경 비추천
//   const result = [];
//   return getDataFromFilePromise(user1Path)
//     .then((data1) => {
//       result.push(JSON.parse(data1));
//       return getDataFromFilePromise(user2Path);
//     })
//     .then((data2) => {
//       result.push(JSON.parse(data2));
//       return result;
//     });
// };

// readAllUsersChaining(user1Path, user2Path);

module.exports = {
  readAllUsersChaining,
};
