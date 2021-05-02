const mongoose = require('mongoose');

const concept = new mongoose.Schema({
  preview_img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('concept', concept);
