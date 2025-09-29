import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    
      <footer className="py-8 bg-white text-white rounded-t-[4rem] -mt-16 z-50 relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/logo%20noir.svg" alt="logo-gogogo-studio"/>
            </div>

              {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-10">
              <a href="https://www.instagram.com/gogogo.studio?igsh=enQ0cm13cGFyOW9y" className="text-black hover:text-gray-600 transition-colors">
            <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/gogogo-studio" className="text-black hover:text-gray-600 transition-colors">
            <Linkedin className="h-6 w-6" />
              </a>
            </div>

        {/* Bottom Copyright */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-black uppercase tracking-wider">
              <p>©GoGoGo 2025</p>
              <div className="flex items-center space-x-4">
                <Link to="/mentions-legales" className="hover:text-gray-600 transition-colors">
                  Mentions légales
                </Link>
                <p>TOUS DROITS RÉSERVÉS.</p>
              </div>
            </div>

        </div>
      </footer>
  );
};

export default Footer;
