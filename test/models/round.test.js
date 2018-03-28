const Round = require('../../src/models/Round');

let round;

describe('Round', () => {
  beforeEach(() => {
    round = new Round({
      question: 'What is this?',
      answer: 'A test',
      timer: 30,
    });
  });
  describe('question', () => {
    test('cannot be null', async () => {
      round.question = null;
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('cannot be blank', async () => {
      round.question = '';
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('cannot only contain spaces', async () => {
      round.question = ' ';
      await expect(round.validate()).rejects.not.toBeNull();
    });
  });
  describe('answer', () => {
    test('cannot be null', async () => {
      round.answer = null;
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('cannot be blank', async () => {
      round.answer = '';
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('cannot only contain spaces', async () => {
      round.answer = ' ';
      await expect(round.validate()).rejects.not.toBeNull();
    });
  });
  describe('timer', () => {
    test('is 30 by default', async () => {
      round.timer = null;
      await expect(round.validate()).resolves;
    });
    test('must be a minimum of 10', async () => {
      round.timer = 5;
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('cannot be negative', async () => {
      round.timer = -10;
      await expect(round.validate()).rejects.not.toBeNull();
    });
    test('must be a maximum of 30', async () => {
      round.timer = 50;
      await expect(round.validate()).rejects.not.toBeNull();
    });
  });
});
