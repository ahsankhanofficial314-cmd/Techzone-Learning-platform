const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
  },
  duration: {
    type: String,
    required: [true, 'Please add duration'],
  },
  fees: {
    type: Number,
    required: [true, 'Please add fees'],
  },
  schedule: {
    time: { type: String, required: true },
    days: { type: [String], required: true },
  },
  instructor: {
    type: String,
    required: [true, 'Please add instructor name'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x200?text=Course+Image',
  },
  ramadanOffer: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
