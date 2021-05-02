const mongoose = require('mongoose');

const description = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('description', description);
