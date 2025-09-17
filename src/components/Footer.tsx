import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation with Logo in center */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
          <Link to="/about" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            À PROPOS
          </Link>
          <Link to="/services" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            SERVICES
          </Link>
          
          {/* Central Logo */}
          <div className="mx-8">
            <Link to="/" className="flex items-center space-x-2">
              <Flower className="h-8 w-8 text-black" />
              <span className="text-2xl font-bold text-black italic">AI Flora</span>
            </Link>
          </div>
          
          <Link to="/contact" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            CONTACT
          </Link>
          <Link to="/blog" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            CRÉATIONS
          </Link>
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
            <Twitter className="h-6 w-6" />
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
