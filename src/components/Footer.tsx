import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-3">
              <Flower className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tropical-text">AI Flora</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Votre partenaire IA pour transformer vos idées en solutions intelligentes, 
              avec l'élégance et la beauté de la nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-primary">Liens rapides</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/portfolio" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">À propos</Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 text-accent">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@aiflora.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground mb-2 sm:mb-0">
            © 2024 AI Flora. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;