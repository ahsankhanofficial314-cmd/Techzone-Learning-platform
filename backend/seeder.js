const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Load models
const Course = require('./models/Course.js');
const Student = require('./models/Student.js');
const User = require('./models/User.js');


// Connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/techzone_learning', {});

const courses = [
  {
    title: 'Full Stack Web Development - MERN',
    duration: '6 Months',
    fees: 199,
    schedule: { time: '6:00 PM - 8:00 PM', days: ['Mon', 'Wed', 'Fri'] },
    instructor: 'John Doe',
    description: 'Learn full-stack development with MongoDB, Express, React, and Node.js.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ramadanOffer: true
  },
  {
    title: 'Advanced React Native',
    duration: '3 Months',
    fees: 149,
    schedule: { time: '8:00 PM - 10:00 PM', days: ['Tue', 'Thu'] },
    instructor: 'Jane Smith',
    description: 'Build cross-platform mobile apps with React Native and modern tools.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ramadanOffer: false
  },
  {
    title: 'UI/UX Design Masterclass',
    duration: '4 Months',
    fees: 129,
    schedule: { time: '10:00 AM - 12:00 PM', days: ['Sat', 'Sun'] },
    instructor: 'Sarah Connor',
    description: 'Master Figma and design principles to create stunning user interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ramadanOffer: true
  }
];

const students = [
  {
    name: 'Michael Scott',
    position: 'Frontend Developer at Dunder Mifflin',
    completedCourse: 'Full Stack Web Development - MERN',
    testimonial: 'This course completely changed my career. The projects were real and the instruction was top-notch.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Pam Beesly',
    position: 'UI Designer',
    completedCourse: 'UI/UX Design Masterclass',
    testimonial: 'I transitioned from a traditional background to tech in just 4 months thanks to TechZone Learning.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

const admin = {
  name: 'Admin User',
  email: 'admin@techzone.com',
  password: 'password123',
  role: 'admin'
};

// Import into DB
const importData = async () => {
  try {
    await Course.deleteMany();
    await Student.deleteMany();
    await User.deleteMany();

    await Course.create(courses);
    await Student.create(students);
    await User.create(admin);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Course.deleteMany();
    await Student.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
