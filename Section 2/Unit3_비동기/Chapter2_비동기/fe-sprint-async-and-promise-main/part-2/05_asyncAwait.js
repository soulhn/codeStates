const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersAsyncAwait = async () => {
  //async라는 표현을 해주어야 await을 사용할 수 있다.
  const user1 = await getDataFromFilePromise(user1Path);
  const user2 = await getDataFromFilePromise(user2Path);
  return [JSON.parse(user1), JSON.parse(user2)];
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};
