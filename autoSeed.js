const Course = require('./models/Course.js');
const Student = require('./models/Student.js');
const User = require('./models/User.js');

const categories = ['International GCSE', 'International AS & A-level', 'Professional Development', 'Technical Skills'];
const levels = ['Foundation', 'Intermediate', 'Advanced', 'Professional'];

const generateCourses = () => {
  const courses = [];
  const titles = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 
    'Business Studies', 'Economics', 'English Literature', 'Psychology', 'Sociology',
    'Full Stack Development', 'Data Science & AI', 'Cyber Security', 'Digital Marketing',
    'UI/UX Design', 'Cloud Computing (AWS/Azure)', 'Mobile App Dev'
  ];

  titles.forEach((title, index) => {
    // Generate GCSE level
    courses.push({
      title: `International GCSE: ${title}`,
      duration: '12 Months',
      fees: 299,
      schedule: { time: '9:00 AM - 11:00 AM', days: ['Mon', 'Tue', 'Wed'] },
      instructor: 'Dr. Sarah Wilson',
      description: `Comprehensive foundation in ${title} aligned with international standards.`,
      image: `https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80`,
      ramadanOffer: index % 3 === 0
    });

    // Generate A-level level
    courses.push({
      title: `International AS & A-level: ${title}`,
      duration: '24 Months',
      fees: 499,
      schedule: { time: '1:00 PM - 3:00 PM', days: ['Wed', 'Thu', 'Fri'] },
      instructor: 'Prof. James Anderson',
      description: `Advanced academic study of ${title} for higher education preparation.`,
      image: `https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80`,
      ramadanOffer: false
    });
  });

  // Adding Dedicated Web Development Courses
  const webDevCourses = [
    {
      title: 'Full Stack Web Development (MERN Mastery)',
      duration: '6 Months',
      fees: 599,
      schedule: { time: '6:00 PM - 9:00 PM', days: ['Mon', 'Wed', 'Fri'] },
      instructor: 'Engr. Alex Rivera',
      description: 'Master the full stack with MongoDB, Express, React, and Node.js. Build production-ready applications.',
      image: '/images/webdev-mern.png',
      ramadanOffer: true
    },
    {
      title: 'Frontend Architecture with React & Next.js',
      duration: '4 Months',
      fees: 399,
      schedule: { time: '4:00 PM - 6:00 PM', days: ['Tue', 'Thu'] },
      instructor: 'Sarah Jenkins',
      description: 'Advanced frontend engineering patterns, performance optimization, and server-side rendering with Next.js.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
      ramadanOffer: false
    },
    {
      title: 'Backend Systems & API Design (Node.js)',
      duration: '4 Months',
      fees: 349,
      schedule: { time: '7:00 PM - 9:00 PM', days: ['Sat', 'Sun'] },
      instructor: 'David Chen',
      description: 'Deep dive into server-side development, database modeling, and scalable API architecture.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80',
      ramadanOffer: true
    },
    {
      title: 'UI/UX Design for Web Developers',
      duration: '3 Months',
      fees: 249,
      schedule: { time: '10:00 AM - 12:00 PM', days: ['Mon', 'Fri'] },
      instructor: 'Maria Garcia',
      description: 'Bridge the gap between design and development. Learn Figma, accessibility, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80',
      ramadanOffer: false
    }
  ];

  courses.push(...webDevCourses);
  return courses;
};

const students = [
  {
    name: 'Michael Scott',
    position: 'Data Analyst at BlueCorp',
    completedCourse: 'International AS & A-level: Mathematics',
    testimonial: 'TechZone Learning provided the academic rigor I needed to succeed in my university entrance exams.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Pam Beesly',
    position: 'Graphic Designer',
    completedCourse: 'International GCSE: Business Studies',
    testimonial: 'The structured curriculum and expert faculty made learning complex concepts effortless.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Jim Halpert',
    position: 'Cloud Engineer',
    completedCourse: 'Professional: Full Stack Development',
    testimonial: 'Exceptional resources and globally recognized qualifications.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

const admin = {
  name: 'Admin User',
  email: 'admin@techzone.com',
  password: 'password123',
  role: 'admin'
};

const autoSeed = async () => {
  try {
    const courseCount = await Course.countDocuments();
    // Only seed if the database is empty. No more deleting existing data!
    if (courseCount === 0) {
      console.log('Oxford AQA Style Upgrade: Seeding initial data...');
      
      const courses = generateCourses();
      await Course.create(courses);
      await Student.create(students);
      await User.create(admin);
      console.log(`Database seeded with ${courses.length} academic courses.`);
    }
  } catch (err) {
    console.error('Seeding failed', err);
  }
};

module.exports = autoSeed;
