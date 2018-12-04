const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/woof', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
  console.log('MONGOOSE CONNECTION ERROR!');
});
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

export default db;
