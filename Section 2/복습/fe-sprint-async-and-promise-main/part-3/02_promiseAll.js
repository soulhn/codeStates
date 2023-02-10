function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([newResponse, weatherResPonse]) => {
      return Promise.all([newResponse.json(), weatherResPonse.json()]);
    })
    .then(([newsData, weatherData]) => {
      return {
        news: newsData.data,
        weather: weatherData,
      };
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
