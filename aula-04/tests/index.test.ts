import request from 'supertest';
import assert from 'assert';
import { Express } from 'express';
import app from 'app';

const server = request(app)

describe("api testing", () => {
    it("/heath", async () => {
        const result = await server.get('/health')
        // console.log(result)

        const {statusCode} = result
        expect(statusCode).toBe(200)
    });

  });