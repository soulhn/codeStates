// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require("uuid");
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);
  },
  // [GET] /book/:phone 요청을 수행합니다.
  // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const { phone } = req.params;

    const result = booking.filter((currentBooking) => {
      return currentBooking.phone === phone;
    });

    return res.json(result);
  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
  // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req, res) => {
    const { phone, flight_uuid } = req.params;
    // TODO:

    const result = booking.filter((currentBooking) => {
      return currentBooking.phone === phone && currentBooking.flight_uuid === flight_uuid;
    });

    return res.json(result);
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    // POST /book에서 사용할 booking_uuid입니다.
    const booking_uuid = uuid();
    // TODO:
    const { flight_uuid, name, phone } = req.body;

    const newBooking = {
      booking_uuid,
      flight_uuid,
      name,
      phone,
    };

    booking.push(newBooking);

    return res.json(newBooking);
  },

  // Optional
  // [DELETE] /book/:booking_uuid 요청을 수행합니다.
  // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteByBookingId: (req, res) => {
    const { booking_uuid } = req.params;
    // TODO:
  },
};
