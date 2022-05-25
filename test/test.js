const request = require("supertest");
const app = require("../app");
const { ilanlarRoutes } = require("../api-routes");
const { closeConnection } = require("../loaders/db");
const config = require("../config");
const loaders = require("../loaders");

describe("Uygulama Testi", () => {
  beforeAll(() => {
    config();
    loaders();
  });

  afterAll(() => {
    closeConnection();
  });

  app.use(ilanlarRoutes);

  test("/api/testilanlar GET test", async () => {
    const response = await request(app).get("/api/testilanlar");
    expect(response.statusCode).toBe(200);
  });
});
