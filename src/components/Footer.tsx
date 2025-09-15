import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <Link to="/about" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            À PROPOS
          </Link>
          <Link to="/services" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            SERVICES
          </Link>
          <Link to="/portfolio" className="text-sm font-medium text-black hover:text-black transition-colors uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1">
            PORTFOLIO
          </Link>
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

        {/* Large Brand Name */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-block">
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-black tracking-tight leading-none">
              AI Flora
            </h2>
          </Link>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-black uppercase tracking-wider">
          <p>©AI FLORA 2024.</p>
          <p>TOUS DROITS RÉSERVÉS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;