const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsers = () => {
  const user1 = getDataFromFilePromise(user1Path); //user1Path를 받아와서 user1에 할당시켜준다.
  const user2 = getDataFromFilePromise(user2Path);
  return Promise.all([user1, user2]).then((value) => {
    //Promise.all을 사용해서 user1Path, user2Path를 한 배열에 담아준다.
    return value.map((el) => JSON.parse(el));
  });
};

// readAllUsers()

module.exports = {
  readAllUsers,
};
