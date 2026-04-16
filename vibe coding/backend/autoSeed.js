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
    // Re-seed if count is low (for the upgrade) or 0
    if (courseCount < 10) {
      console.log('Oxford AQA Style Upgrade: Seeding enriched data...');
      await Course.deleteMany();
      await Student.deleteMany();
      await User.deleteMany();

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
