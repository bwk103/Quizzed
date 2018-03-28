const app = require('../src/app');

const request = require('supertest');

describe('root path', () => {
  describe('GET request', () => {
    test('responds to GET requests', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('/game path', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/game');
      expect(response.statusCode).toBe(200);
    });
    test('returns appropriate response', async () => {
      const response = await request(app).get('/game');
      expect(response.text).toContain('This is the game path');
    });
  });
});
