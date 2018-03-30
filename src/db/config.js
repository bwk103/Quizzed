const mongoose = require('mongoose');
const config = require('../config');

const { db: { host, port, name } } = config;

const connectionString = `mongodb://${host}:${port}/${name}`;

const db = mongoose.connect(connectionString, {}).then(
  () => {
    console.log(`Connected to ${name} on port ${port}`);
  },
  (error) => {
    console.log(error);
  },
);

module.exports = db;
