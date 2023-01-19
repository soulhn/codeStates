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
if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
