const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  let newObj = {};
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  return fetch(newsURL)
    .then((reponse) => reponse.json())
    .then((result) => {
      newObj.news = result.data;
      return fetch(weatherURL);
    })
    .then((response) => response.json())
    .then((result) => {
      newObj.weather = result;
      return newObj;
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}
