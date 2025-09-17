import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    // Footer
    <footer className="py-8 bg-white-900 text-white rounded-t-[4rem] -mt-16 z-50 relative">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img 
            src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.png" 
            alt="GoGoGo Studio Logo"
            className="h-8"
          />
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 GoGoGo Studio. Innovation digitale et solutions créatives.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
