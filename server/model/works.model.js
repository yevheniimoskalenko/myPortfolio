const mongoose = require('mongoose');

const works = new mongoose.Schema({
  preview_img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  more_image: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model('works', works);
