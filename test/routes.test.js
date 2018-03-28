const app = require('../src/app');

const request = require('supertest');

describe('root path', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
    test('returns appropriate response', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('Welcome to Quiz App');
      expect(response.text).toContain('Start Game');
    });
  });
});

describe('any other path', () => {
  describe('GET request', () => {
    test('returns 404 status code', async () => {
      const response = await request(app).get('/doesntexist');
      expect(response.statusCode).toBe(404);
    });
  });
});
