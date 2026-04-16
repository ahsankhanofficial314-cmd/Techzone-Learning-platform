import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, User, ArrowRight } from 'lucide-react';
import api from '../services/api';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState('All');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/courses');
        setCourses(res.data.data);
      } catch (error) {
        console.error('Error fetching courses', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = activeLevel === 'All' || c.title.includes(activeLevel);
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="pt-28 pb-20 bg-bg-alt text-text-main min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm font-bold uppercase tracking-widest text-secondary">
          <Link to="/" className="hover:opacity-70">TechZone</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Qualifications</span>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-primary uppercase tracking-tight mb-4">Qualifications & Specifications</h1>
          <p className="text-gray-600 max-w-2xl font-medium">
            Explore our comprehensive range of international qualifications, designed for excellence in the global classroom.
          </p>
        </motion.div>

        {/* Filters & Search Bar */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-bg-base p-6 shadow-sm border-t-4 border-primary">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {['All', 'IGCSE', 'AS & A-level', 'Web Development'].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeLevel === level 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-500 hover:text-primary hover:bg-gray-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Search by subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse bg-bg-base border border-primary/10 p-8 h-80">
                 <div className="h-4 w-1/2 bg-gray-200 mb-4"></div>
                 <div className="h-8 w-full bg-gray-200"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx % 3 * 0.1 }}
                  key={course._id || idx}
                  className="bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col border-t-4 border-secondary/20 group-hover:border-accent transition-all">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Subject Specification</div>
                    <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center text-xs text-text-muted mb-6 font-bold uppercase tracking-wider mt-auto">
                      <User className="w-4 h-4 mr-2" /> Specialist: {course.instructor}
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">${course.fees}</span>
                      <button className="flex items-center text-xs font-bold uppercase tracking-[0.1em] text-secondary hover:text-accent transition-colors">
                        View Details <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <div className="text-center py-20 bg-bg-base shadow-sm">
                <p className="text-text-muted font-bold uppercase tracking-widest">No matching specifications found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
