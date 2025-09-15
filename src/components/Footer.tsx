import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-border/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link to="/about" className="text-sm font-medium text-black hover:text-primary transition-colors uppercase tracking-wider border-b border-transparent hover:border-primary">
            À PROPOS
          </Link>
          <Link to="/services" className="text-sm font-medium text-black hover:text-primary transition-colors uppercase tracking-wider border-b border-transparent hover:border-primary">
            SERVICES
          </Link>
          <Link to="/portfolio" className="text-sm font-medium text-black hover:text-primary transition-colors uppercase tracking-wider border-b border-transparent hover:border-primary">
            PORTFOLIO
          </Link>
          <Link to="/contact" className="text-sm font-medium text-black hover:text-primary transition-colors uppercase tracking-wider border-b border-transparent hover:border-primary">
            CONTACT
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-black hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-black hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Large Brand Name */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center justify-center space-x-3">
            <Flower className="h-8 w-8 text-primary" />
            <h2 className="text-6xl md:text-8xl font-bold text-black tracking-tight">
              AI Flora
            </h2>
          </Link>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <p>©AI FLORA 2024.</p>
          <p>TOUS DROITS RÉSERVÉS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;