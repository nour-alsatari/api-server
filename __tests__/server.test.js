"use strict";

const server = require("../src/server.js");
const { db } = require("../src/models/index");

const supertest = require("supertest");

const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe("testing API server", () => {
  it("testing 404 on a bad route", async () => {
    const response = await request.get("/notexistent");
    expect(response.status).toEqual(404);
  });

  it("testing 404 on a bad method", async () => {
    const response = await request.post("/clothess");
    expect(response.status).toEqual(404);
  });
});

describe("testing database routers", () => {
  it("Read a list of records using GET", async () => {
    const response = await request.get("/food");
    expect(response.status).toBe(200);
  });

  it("Create a record using POST", async () => {
    const response = await request.post("/food").send({
      dishName: "anything",
      minutesToPrepare: 22,
    });
    expect(response.status).toBe(201);
  });

  it("Read a record using GET", async () => {
    const response = await request.get(`/food/1`);
    expect(response.status).toBe(200);
  });

  it("Update a record using PUT", async () => {
    const response = await request.put(`/food/1`).send({
      dishName: "anything",
      minutesToPrepare: 22,
    });
    expect(response.status).toBe(201);
    // expect(typeof response.body).toEqual("object");
  });

  it("Destroy a record using DELETE", async () => {
    const response = await request.delete(`/food/1`)
    expect(response.status).toBe(201);

});

});
