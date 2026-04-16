const express = require('express');
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/students');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getStudents)
  .post(protect, authorize('admin'), createStudent);

router
  .route('/:id')
  .put(protect, authorize('admin'), updateStudent)
  .delete(protect, authorize('admin'), deleteStudent);

module.exports = router;
