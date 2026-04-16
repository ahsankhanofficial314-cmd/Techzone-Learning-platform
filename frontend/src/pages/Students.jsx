import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, GraduationCap, Award, MapPin } from 'lucide-react';
import api from '../services/api';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await api.get('/students');
        setStudents(res.data.data);
      } catch (error) {
        console.error('Error fetching students', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-bg-base text-text-main min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-16 text-white text-center mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold uppercase tracking-widest mb-4"
          >
            Student Case Studies
          </motion.h1>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            Discover how TechZone International Qualifications have empowered students globally to reach their core academic and professional goals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-bg-alt h-64 rounded-sm"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {students.map((student, idx) => (
              <motion.div
                key={student._id || idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-bg-alt border-l-[6px] border-secondary p-8 flex flex-col md:flex-row gap-8 items-start relative group"
              >
                <div className="absolute top-6 right-8 opacity-10 group-hover:rotate-12 transition-transform">
                  <Quote size={80} className="text-primary" />
                </div>

                <div className="w-32 h-32 flex-shrink-0 relative">
                   <img 
                    src={student.image} 
                    alt={student.name} 
                    className="w-full h-full object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all border-4 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent p-1 shadow-md">
                     <Award className="text-white w-4 h-4" />
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-1 uppercase tracking-tight">{student.name}</h3>
                  <div className="flex items-center text-xs font-bold text-secondary uppercase tracking-widest mb-4">
                     <GraduationCap className="w-4 h-4 mr-1" /> {student.completedCourse}
                  </div>
                  
                  <p className="text-gray-600 italic leading-relaxed mb-6 font-medium">
                    "{student.testimonial}"
                  </p>

                  <div className="bg-white/60 p-3 border border-primary/5 inline-flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">{student.position}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Global Success Banner */}
        <section className="mt-24 bg-gray-bg border border-primary/10 p-12 text-center max-w-4xl mx-auto">
           <h2 className="text-2xl font-bold text-primary uppercase tracking-widest mb-4">Are you a TechZone Alumni?</h2>
           <p className="text-gray-500 mb-8 mx-auto font-medium">
             Share your story with our international community and inspire the next generation of academic leaders.
           </p>
           <button className="px-10 py-3 bg-primary text-white font-bold tracking-[0.2em] hover:bg-secondary transition-all">
             SUBMIT CASE STUDY
           </button>
        </section>
      </div>
    </div>
  );
};

export default Students;
