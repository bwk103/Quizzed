const env = process.env.NODE_ENV || 'dev';

const config = {
  dev: {
    app: {
      port: 3000,
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'quizApp',
    },
  },
  test: {
    app: {
      port: 3000,
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'quizAppTest',
    },
  },
};

module.exports = config[env];
