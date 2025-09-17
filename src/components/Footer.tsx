import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    
      <footer className="py-8 bg-white text-white rounded-t-[4rem] -mt-16 z-50 relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.png" src="logo"/>
            </div>

              {/* Social Links */}
            <div className="flex justify-center space-x-8 mb-20">
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <Mail className="h-6 w-6" />
              </a>
            </div>

        {/* Bottom Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-black uppercase tracking-wider">
              <p>©GoGoGo 2025</p>
              <p>TOUS DROITS RÉSERVÉS.</p>
            </div>

        </div>
      </footer>
  );
};

export default Footer;
