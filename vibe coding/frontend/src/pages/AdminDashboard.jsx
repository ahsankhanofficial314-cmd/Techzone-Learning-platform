import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, BookOpen, Settings } from 'lucide-react';
import api from '../services/api';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState({ courses: 0, students: 0 });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      try {
        const [coursesRes, studentsRes] = await Promise.all([
          api.get('/courses'),
          api.get('/students')
        ]);
        setStats({
          courses: coursesRes.data.count,
          students: studentsRes.data.count
        });
      } catch (error) {
        console.error('Error fetching admin stats', error);
      }
    };
    fetchStats();
  }, [user, navigate]);

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-64 space-y-2 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 h-fit"
        >
          <div className="mb-8">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <p className="text-sm text-gray-500">Welcome back, {user.name}</p>
          </div>

          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-primary text-white rounded-xl font-medium">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors">
            <BookOpen size={20} />
            <span>Manage Courses</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors">
            <Users size={20} />
            <span>Manage Students</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Total Courses</p>
                  <h3 className="text-4xl font-bold">{stats.courses}</h3>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Total Students</p>
                  <h3 className="text-4xl font-bold">{stats.students}</h3>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 hover:text-primary hover:border-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all text-center font-medium">
                + Add New Course
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 hover:text-secondary hover:border-secondary hover:bg-green-50 dark:hover:bg-green-900/30 transition-all text-center font-medium">
                + Add Student Record
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
