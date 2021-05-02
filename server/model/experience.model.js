const mongoose = require('mongoose');

const experience = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('experience', experience);
