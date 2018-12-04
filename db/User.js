const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  city: String,
  state: String,
  zipCode: String,
  email: {
    type: String,
    index: true,
    unique: true,
  },
  dogName: String,
  dogBreed: String,
  dogWeight: Number,
  dogGender: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
