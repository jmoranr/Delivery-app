const Request = require("supertest");
const dotenv = require("dotenv");
dotenv.config();

const serverUrl = String(process.env.SERVER_URL);
const serverPort = String(process.env.SERVER_PORT);
const ordersApiPath = "/api/orders";
const validStartingDate = "2025-03-01";
const validEndingDate = "2025-03-30";
const lowerEndingDate = "2025-02-01";
const nonValidDate = "fakeDate";
const request = Request(`${serverUrl}:${serverPort}${ordersApiPath}`);

function expectResponse(res, responseStatus, responseStatusCode) {
  expect(res.statusCode).toEqual(responseStatusCode);
  expect(res.body.status).toEqual(responseStatus);
}

describe("GET / Get orders list by date range", () => {
  it("Should return results on valid date range request", () => {
    return request
      .get(`/${validStartingDate}/${validEndingDate}`)
      .expect((res) => {
        expectResponse(res, "ok", 200);
        expect(res.body?.data?.length).toBeGreaterThan(0);
      });
  });

  it("Should return error on non valid date range request", () => {
    return request
      .get(`/${validStartingDate}/${lowerEndingDate}`)
      .expect((res) => {
        expectResponse(res, "nok", 404);
      });
  });

  it("Should return error on fake date request", () => {
    return request
      .get(`/${validStartingDate}/${nonValidDate}`)
      .expect((res) => {
        expectResponse(res, "nok", 404);
      });
  });
});
