const mongoose = require('mongoose');
const Users = require('./User.js');

mongoose.connect('mongodb://localhost/woof', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', () => {
  console.log('MONGOOSE CONNECTION ERROR!');
  process.exit();
});
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = Users;
