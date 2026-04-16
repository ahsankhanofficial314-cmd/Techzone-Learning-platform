const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/150?text=Student+Image',
  },
  position: {
    type: String,
    required: [true, 'Please add current position/job'],
  },
  completedCourse: {
    type: String,
    required: [true, 'Please add completed course title'],
  },
  testimonial: {
    type: String,
    required: [true, 'Please add a testimonial'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
