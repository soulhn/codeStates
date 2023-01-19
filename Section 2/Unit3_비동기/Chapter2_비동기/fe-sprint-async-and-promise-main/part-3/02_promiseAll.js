function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다'
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([newRes, weatherRes]) => {
      return Promise.all([newRes.json(), weatherRes.json()]);
    })
    .then(([news, weather]) => {
      return {
        news: news.data,
        weather,
      };
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
