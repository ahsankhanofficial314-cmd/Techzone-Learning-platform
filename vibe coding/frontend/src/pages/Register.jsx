import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { User, Mail, Lock, GraduationCap } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      // Success feedback
      const successToast = document.createElement('div');
      successToast.className = 'fixed top-4 right-4 bg-primary text-white px-6 py-3 rounded-sm shadow-2xl z-[9999] font-bold uppercase tracking-widest text-xs animate-bounce';
      successToast.innerText = 'Account Registered Successfully!';
      document.body.appendChild(successToast);
      
      setTimeout(() => {
        successToast.remove();
        navigate('/');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please verify your details.');
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 flex justify-center items-center min-h-screen bg-bg-alt text-text-main">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-bg-base p-10 border-t-8 border-secondary shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="bg-secondary w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-6">
             <GraduationCap className="text-white" size={28} />
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-widest text-primary">Student Registration</h2>
          <p className="text-text-muted mt-2 text-xs font-bold uppercase tracking-[0.1em]">Join the TechZone academic network</p>
        </div>

        {error && (
          <div className="bg-red-500/10 text-red-500 p-4 border-l-4 border-red-500 mb-8 text-xs font-bold uppercase tracking-widest">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Full Academic Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-secondary" />
              </div>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-bg-alt border border-primary/10 outline-none focus:ring-1 focus:ring-secondary transition-all text-sm font-medium"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-secondary" />
              </div>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-bg-alt border border-primary/10 outline-none focus:ring-1 focus:ring-secondary transition-all text-sm font-medium"
                placeholder="university@domain.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Security Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-secondary" />
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-bg-alt border border-primary/10 outline-none focus:ring-1 focus:ring-secondary transition-all text-sm font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary transition-all shadow-xl"
            >
              CREATE ACADEMIC ACCOUNT
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-text-muted">
          Already registered?{' '}
          <Link to="/login" className="text-secondary hover:text-primary transition-colors border-b border-secondary">
            Sign in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
