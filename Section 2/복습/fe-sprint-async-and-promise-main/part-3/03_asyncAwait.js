async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const newData = await fetch(newsURL).then((data) => data.json());
  const weatherData = await fetch(weatherURL).then((data) => data.json());
  return {
    news: newData.data,
    weather: weatherData,
  };
}
if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
