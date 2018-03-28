const app = require('../src/app');

const request = require('supertest');

describe('root path', () => {
  test('responds to GET requests', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
