import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t-8 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-bg-alt p-1.5 rounded-sm">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight uppercase leading-none">TechZone</span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Learning Platform</span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Leading the way in international education by providing rigorous academic standards and globally recognized qualifications for the next generation.
            </p>
            <div className="flex space-x-4">
               <div className="p-2 border border-white/20 hover:bg-bg-base hover:text-primary transition-all cursor-pointer">
                  <Globe size={18} />
               </div>
               <div className="p-2 border border-white/20 hover:bg-bg-base hover:text-primary transition-all cursor-pointer text-xs font-bold flex items-center px-4">
                  ENGLISH (UK)
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-8">Qualifications</h4>
            <ul className="space-y-4 text-sm text-blue-100 font-medium">
              <li><Link to="/courses" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> International GCSEs</Link></li>
              <li><Link to="/courses" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> AS & A-levels</Link></li>
              <li><Link to="/courses" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Vocational Training</Link></li>
              <li><Link to="/courses" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Professional Diplomas</Link></li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-8">Institutional</h4>
            <ul className="space-y-4 text-sm text-blue-100 font-medium">
              <li><Link to="/about" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> About OxfordAQA</Link></li>
              <li><Link to="/contact" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Find a Center</Link></li>
              <li><Link to="/students" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Student Success</Link></li>
              <li><Link to="/login" className="hover:text-white flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Online Room (Login)</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-8">Connect</h4>
            <ul className="space-y-6 text-sm text-blue-100">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary flex-shrink-0" size={18} />
                <span>124 Oxford Street, Academic Quarter, London, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <span>+44 20 8123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <span>support@techzone.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} TechZone Learning Platform. <br className="md:hidden" />
            Part of the Global Academic Network.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Legal Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
