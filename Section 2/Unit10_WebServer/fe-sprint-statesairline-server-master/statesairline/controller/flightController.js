const flights = require("../repository/flightList");
const fs = require("fs");

const queryCheck = (flight, departure_times, arrival_times, destination, departure) => {
  if (departure_times && flight.departure_times !== departure_times) {
    return false;
  }

  if (arrival_times && flight.arrival_times !== arrival_times) {
    return false;
  }

  if (destination && flight.destination !== destination) {
    return false;
  }

  if (departure && flight.departure !== departure) {
    return false;
  }

  return true;
};

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.

  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:

    const result = flights.filter((flight) => queryCheck(flight, departure_times, arrival_times, destination, departure));

    return res.json(result);
  },
  // [GET] /flight/:uuid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:

    const result = flights.filter((flight) => flight.uuid === uuid);

    return res.json(result);
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    // TODO:
  },
};
