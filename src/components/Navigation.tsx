import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'FOR WHOM', path: '/about' },
    { name: 'FEATURES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-background">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
          <Globe className="h-4 w-4 text-background" />
        </div>
        <span className="text-2xl font-bold text-foreground">GoGoGo Studio</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`font-medium transition-colors ${
              isActive(item.path)
                ? 'text-foreground'
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Button className="bg-foreground text-background rounded-full px-6 py-2 hover:bg-foreground/90">
          CONTACT
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-t border-border z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
