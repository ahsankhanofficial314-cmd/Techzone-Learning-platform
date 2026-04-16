import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || false
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass dark:glass-dark backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-bg-alt p-1.5 rounded-sm">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight uppercase leading-none text-text-main">TechZone</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Learning Platform</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-text-main hover:text-primary transition-colors font-medium">Courses</Link>
            <Link to="/students" className="text-text-main hover:text-primary transition-colors font-medium">Students</Link>
            <Link to="/about" className="text-text-main hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-text-main hover:text-primary transition-colors font-medium">Contact</Link>

            {user ? (
              <div className="flex items-center space-x-6 border-l border-primary/10 pl-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.1em]">Logged in as</span>
                  <span className="text-sm font-bold text-text-main">{user.name}</span>
                </div>
                
                {user.role === 'admin' && (
                  <Link to="/admin" className="px-4 py-2 bg-secondary/10 text-secondary rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                    Admin
                  </Link>
                )}
                
                <button
                  onClick={logout}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-primary/20 text-text-main hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-text-main font-bold text-sm hover:text-primary transition-colors uppercase tracking-widest">Login</Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-primary text-white hover:bg-secondary transition-all font-bold text-sm uppercase tracking-widest"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-bg-base text-text-main shadow-xl"
        >
          <Link to="/courses" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Courses</Link>
          <Link to="/students" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Students</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact</Link>
          {user ? (
            <button onClick={logout} className="block w-full text-left px-3 py-2 text-primary">Logout</button>
          ) : (
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" className="block px-3 py-2 border rounded-md text-center">Login</Link>
              <Link to="/register" className="block px-3 py-2 bg-primary text-white rounded-md text-center">Sign Up</Link>
            </div>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
