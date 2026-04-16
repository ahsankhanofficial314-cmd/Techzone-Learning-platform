const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const autoSeed = require('./autoSeed');

// Load env vars
dotenv.config();

const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 1 },
  process.env.JWT_SECRET)
// Connect to database and seed memory
connectDB().then(() => autoSeed());

// Route files
const auth = require('./routes/auth');
const courses = require('./routes/courses');
const students = require('./routes/students');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/auth', auth);
app.use('/api/courses', courses);
app.use('/api/students', students);

app.get('/', (req, res) => {
  res.send('TechZone Learning API is running...');
});

const PORT = process.env.PORT || 5000;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(Number(port) + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

module.exports = app;

if (require.main === module) {
  startServer(PORT);
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
});
