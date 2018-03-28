const app = require('../src/app');

const request = require('supertest');

const mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

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

describe('/play path', () => {
  describe('GET request', () => {
    test('returns 200 status code', async () => {
      const response = await request(app).get('/play');
      expect(response.statusCode).toBe(200);
    });
    test('renders game/play', async () => {
      const response = await request(app).get('/play');
      expect(response.text).toContain('This is the play route');
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
