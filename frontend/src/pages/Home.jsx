import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Users, Star, ArrowRight, Download, 
  Globe, ShieldCheck, History, Laptop, Cpu 
} from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-main">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tight">
                Global Standards. <br/>
                <span className="text-accent italic">Local Excellence.</span>
              </h1>
              <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
                Oxford-standard curriculum designed for the international classroom. TechZone Learning empowers students with learning paths that open doors to top universities globally.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses" className="px-8 py-3 bg-accent text-white font-bold hover:bg-orange-600 transition-all flex items-center ">
                  BROWSE ALL COURSES <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/about" className="px-8 py-3 border-2 border-white/30 text-white font-bold hover:bg-white hover:text-primary transition-all">
                  LEARN MORE
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full"></div>
                <img 
                  src="/images/academic-excellence.png" 
                  alt="Academic Excellence" 
                  className="relative rounded-sm shadow-2xl border-white border-[12px] transform -rotate-1 lg:rotate-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <div className="bg-secondary/10 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {[
            { icon: Download, label: 'Download Specifications' },
            { icon: Globe, label: 'Find a Center' },
            { icon: Star, label: 'Results & Certificates' },
            { icon: ShieldCheck, label: 'Curriculum Security' }
          ].map((item, idx) => (
            <Link key={idx} to="/courses" className="flex items-center space-x-3 p-4 hover:bg-white transition-all group">
              <item.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Qualifications Section */}
      <section className="section-padding bg-bg-alt text-text-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-4">Our Learning Paths</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-text-muted leading-relaxed font-medium">
              We offer a broad range of qualifications specifically designed to meet the academic needs of international students, teachers, and examiners.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'International GCSEs',
                desc: 'Level 1 & 2 qualifications establishing a strong academic foundation across 15+ subjects.',
                icon: BookOpen
              },
              {
                title: 'International AS & A-levels',
                desc: 'Advanced Level 3 studies preparing students for competitive university entrance world-wide.',
                icon: History
              },
              {
                title: 'Professional Development',
                desc: 'Specialized certifications for educators and administrators to maintain global standards.',
                icon: Users
              }
            ].map((item, idx) => (
              <div key={idx} className="academic-card group">
                <item.icon size={48} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-primary mb-3 uppercase">{item.title}</h3>
                <p className="text-text-muted mb-6 text-sm">{item.desc}</p>
                <Link to="/courses" className="text-secondary font-bold text-sm tracking-widest flex items-center hover:opacity-80">
                  VIEW SUBJECTS <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="bg-primary py-20 text-white border-y-[10px] border-secondary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { count: '100+', label: 'Countries Reached' },
            { count: '30,000+', label: 'Exam Entries' },
            { count: '500+', label: 'Approved Centers' },
            { count: '98%', label: 'Progression Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-5xl font-extrabold text-accent">{stat.count}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Resources Section */}
      <section className="section-padding bg-bg-base text-text-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-6">Teacher Support & Resources</h2>
              <div className="space-y-6">
                {[
                  { title: 'Specification Guides', desc: 'Detailed documentation on course content and assessment methodology.', icon: Laptop },
                  { title: 'Training Materials', desc: 'Secure webinars and PDF guides for faculty professional development.', icon: Cpu },
                  { title: 'Administrative Support', desc: 'Full exam cycle management tools for center administrators.', icon: ShieldCheck }
                ].map((res, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-gray-bg p-3 border border-primary/10">
                      <res.icon size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">{res.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" className="rounded-sm grayscale hover:grayscale-0 transition-all" alt="Support 1" />
                 <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80" className="rounded-sm brightness-75" alt="Support 2" />
               </div>
               <div className="pt-8 space-y-4">
                 <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" className="rounded-sm" alt="Support 3" />
                 <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" className="rounded-sm grayscale" alt="Support 4" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
