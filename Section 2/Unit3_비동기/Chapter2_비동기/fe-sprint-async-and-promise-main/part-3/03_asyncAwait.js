async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다.
  const news = await fetch(newsURL)
    .then((reponse) => reponse.json())
    .then((result) => result.data);
  const weather = await fetch(weatherURL).then((response) => response.json());
  return {
    news,
    weather,
  };
}

//래퍼런스 코드
async function getNewsAndWeatherAsync() {
  let json1 = await fetch(newsURL).then((resp) => resp.json());
  let json2 = await fetch(weatherURL).then((resp) => resp.json());

  return {
    news: json1.data,
    weather: json2,
  };
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
