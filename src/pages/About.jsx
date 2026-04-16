import { motion } from 'framer-motion';
import { History, Globe, ShieldCheck, Award, Target, Users, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 bg-bg-base text-text-main min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover" 
            alt="Library" 
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-[0.3em] mb-4"
          >
            About TechZone
          </motion.h1>
          <div className="h-1.5 w-24 bg-accent mx-auto mb-8"></div>
          <p className="text-xl font-medium tracking-wide text-blue-100 italic">
            "Championing academic excellence and global student progression since inception."
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-alt border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary uppercase tracking-widest flex items-center gap-4">
              <Target className="text-secondary" /> Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              To provide world-class, rigorous, and accessible international qualifications that empower students from all backgrounds to achieve their highest academic potential and secure places at the world's leading universities.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-bg-base border-l-4 border-primary shadow-sm">
                <ShieldCheck className="text-secondary" />
                <span className="font-bold text-primary text-sm uppercase">Rigorous Assessment Standards</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-bg-base border-l-4 border-secondary shadow-sm">
                <Globe className="text-primary" />
                <span className="font-bold text-primary text-sm uppercase">Global Recognition & Portability</span>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&w=800&q=80" 
              className="rounded-sm shadow-2xl border-white border-[12px]" 
              alt="Classroom" 
            />
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 text-white hidden md:block">
               <div className="text-4xl font-bold mb-1">15+</div>
               <div className="text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-4">The TechZone Pillars</h2>
            <p className="text-gray-500 font-medium">Built on the foundation of international academic integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Academic Integrity', 
                desc: 'Unwavering commitment to the security and fairness of every qualification we award.',
                icon: ShieldCheck 
              },
              { 
                title: 'Student-First', 
                desc: 'Every curriculum decision is made with the student’s future university path in mind.',
                icon: GraduationCap 
              },
              { 
                title: 'Innovation', 
                desc: 'Constant improvement of teaching and testing methodologies through modern technology.',
                icon: History 
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                  <div className="w-20 h-20 bg-bg-alt border border-primary/10 mx-auto flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary uppercase mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.4em] mb-12">Institutional Partners & Recognition</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Mock University/Partner names for academic feel */}
             <div className="text-2xl font-serif font-bold text-primary">UNIVERSITY OF TECH</div>
             <div className="text-2xl font-serif font-bold text-primary">GLOBAL EXAM BOARD</div>
             <div className="text-2xl font-serif font-bold text-primary">EDUCATION FIRST</div>
             <div className="text-2xl font-serif font-bold text-primary">BRITISH COUNCIL APP</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
