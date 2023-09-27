import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

  it("", async () => {
    const { status, text } = await api.get("/fibonacci?elements=3");
    expect(status).toBe(200);
    expect(text).toEqual('[0,1,1]');
  })
})