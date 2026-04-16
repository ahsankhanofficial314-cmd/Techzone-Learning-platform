const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');
const autoSeed = require('../autoSeed');

// Load env vars
dotenv.config();

// Route files
const auth = require('../routes/auth');
const courses = require('../routes/courses');
const students = require('../routes/students');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS with options
const corsOptions = {
  origin: process.env.frontend_URL || '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Connect to database and seed data
connectDB().then(() => autoSeed());


// Mount routers
app.use('/api/auth', auth);
app.use('/api/courses', courses);
app.use('/api/students', students);

// Health check and root verification
app.get('/api/health', (req, res) => res.status(200).json({ status: 'Healthy', version: '1.1.0' }));

app.get('/', (req, res) => {
  res.send('TechZone Learning API is running successfully...');
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
