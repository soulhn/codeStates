const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
// TODO: 여러개의 Promise를 then으로 연결하여 작성합니다

const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path) // user1Path파일을 받아온다.
    .then((value) => JSON.parse(value)) // 그 다음 parsing을 해주고
    .then((user1) => {
      //파징된 데이터를 user1이라고 해준다.
      return getDataFromFilePromise(user2Path) // 그 다음 user2Path파일을 받아온다.
        .then((value) => JSON.parse(value)) // 그 다음 parsing을 해주고
        .then((user2) => {
          return [user1, user2]; // 한 배열안에 chaning을 해줘서 리턴한다.
        });
    });
};

// readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};
