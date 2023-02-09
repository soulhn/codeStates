const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  const promiseOne = getDataFromFilePromise(user1Path);
  const promiseTwo = getDataFromFilePromise(user2Path);

  return Promise.all([promiseOne, promiseTwo]).then(([user1, user2]) => {
    // console.log([JSON.parse(user1), JSON.parse(user2)]);
    return [JSON.parse(user1), JSON.parse(user2)];
  });
};

readAllUsers();

module.exports = {
  readAllUsers,
};
