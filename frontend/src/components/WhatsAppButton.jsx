import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[9999] p-4 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center group pointer-events-auto"
    >
      <div className="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-40"></div>
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
        Support
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
