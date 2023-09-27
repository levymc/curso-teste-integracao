import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);


describe("API test", () => {
  it ("Expect do be an object with any id", async () => {
    const {status ,body} = await api.get("/event")
    expect(status).toBe(200)
    expect(body).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String)
    })
  })
});