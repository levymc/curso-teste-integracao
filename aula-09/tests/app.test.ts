import supertest from "supertest";
import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const userData = {
      email: "test@example.com",
      password: "password123",
    };

    const response = await api.post("/users").send(userData);

    expect(response.status).toBe(201);
    expect(response.body.email).toBe(userData.email);
  });

  it("should receive 409 when trying to create two users with the same email", async () => {
    const userData = {
      email: "aaa@tesrte.com",
      password: "123",
    };
    await api.post("/users").send(userData);
    const response = await api.post("/users").send(userData);

    expect(response.status).toBe(409);
  });
});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const userData = {
      email: "aaaaaaaaaa@bbb.com",
      password: "123",
    };

    const createUserResponse = await api.post("/users").send(userData);
    const userId = createUserResponse.body.id;
    const response = await api.get(`/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body.email).toBe(userData.email);
  });

  it("should return 404 when can't find a user by id", async () => {
    const userId = 9999
    const response = await api.get(`/users/${userId}`)

    expect(response.status).toBe(404);
  });

  it("should return all users", async () => {
    const userData1 = {
      email: "ubbbbbbbbbbbbbbbbbbbbbbb@bb.com",
      password: "123",
    };
    const userData2 = {
      email: "aaaaaa@aa.com",
      password: "123",
    };

    await api.post("/users").send(userData1)
    await api.post("/users").send(userData2)

    const response = await api.get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2)
  });
});
