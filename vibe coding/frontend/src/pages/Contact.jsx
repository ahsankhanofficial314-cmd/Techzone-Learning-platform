import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Link2, Globe, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: 'Student' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. An academic advisor will contact you within 24 hours.');
  };

  return (
    <div className="pt-20 bg-bg-alt text-text-main min-h-screen">
      {/* Header */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold uppercase tracking-widest mb-4"
          >
            International Support Center
          </motion.h1>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            Authorized centers, teachers, and students can reach our global support team for assistance with specifications, examinations, or results.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-bg-base p-8 shadow-sm border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-bg p-3 border border-primary/5">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-gray-600 text-sm">support@techzone-international.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-bg p-3 border border-primary/5">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">International Helpline</h4>
                    <p className="text-gray-600 text-sm">+44 20 8123 4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-bg p-3 border border-primary/5">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Headquarters</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      124 Oxford Street, Academic Quarter,<br/> London, W1D 1LL, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 shadow-xl">
              <Clock className="mb-4 text-accent" size={32} />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Service Hours</h3>
              <p className="text-blue-100 text-sm mb-4">Our global helpdesk maintains coverage across multiple time zones.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold">08:00 - 18:00 GMT</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">09:00 - 13:00 GMT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-bg-base p-10 shadow-sm border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-primary uppercase tracking-tight mb-8">Formal Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-bg-base border border-primary/10 outline-none focus:ring-1 focus:ring-primary transition-all text-text-main"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Academic Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-bg-base border border-primary/10 outline-none focus:ring-1 focus:ring-primary transition-all text-text-main"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Your Role</label>
                  <select 
                    className="w-full px-4 py-3 bg-bg-base border border-primary/10 outline-none focus:ring-1 focus:ring-primary transition-all text-text-main"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option>Student</option>
                    <option>Teacher / Educator</option>
                    <option>Exams Officer</option>
                    <option>Prospective Partner School</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Inquiry Details</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-bg-base border border-primary/10 outline-none focus:ring-1 focus:ring-primary transition-all text-text-main"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 p-4 bg-bg-alt border-l-4 border-accent text-xs font-bold text-text-main uppercase tracking-wider mb-8">
                   <ShieldCheck size={16} /> All data is handled in compliance with Global GDPR and Privacy Standards.
                </div>

                <button
                  type="submit"
                  className="px-12 py-4 bg-primary text-white font-bold tracking-[0.2em] hover:bg-secondary transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SUBMIT FORMAL INQUIRY</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Support */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-secondary p-3 text-white">
              <Globe size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-tight">Global Network</h4>
              <p className="text-xs text-gray-500 font-medium">Supporting 100+ nations across the world.</p>
            </div>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="p-3 bg-gray-bg text-primary hover:bg-primary hover:text-white transition-all"><Link2 size={20} /></a>
             <a href="#" className="p-3 bg-gray-bg text-primary hover:bg-primary hover:text-white transition-all"><MessageCircle size={20} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
