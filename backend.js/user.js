// backend/models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['supervisor', 'staff'], default: 'staff' }
});
module.exports = mongoose.model('User', userSchema);
