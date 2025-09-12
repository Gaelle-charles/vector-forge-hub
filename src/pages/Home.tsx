import { Button } from '@/components/ui/button';
import geometricTravel from '@/assets/geometric-travel.png';
import geometricElephant from '@/assets/geometric-elephant.png';
import geometricDashboard from '@/assets/geometric-dashboard.png';
import { ArrowUpRight, Download, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <Globe className="h-4 w-4 text-background" />
          </div>
          <span className="text-2xl font-bold text-foreground">GoGoGo Studio</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-foreground/80 font-medium">FOR WHOM</a>
          <a href="#" className="text-foreground hover:text-foreground/80 font-medium">FEATURES</a>
          <a href="#" className="text-foreground hover:text-foreground/80 font-medium">HOW IT WORKS</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-foreground">
            <Globe className="h-4 w-4" />
            <span>FR</span>
          </div>
          <Button className="bg-foreground text-background rounded-full px-6 py-2 hover:bg-foreground/90">
            <Download className="h-4 w-4 mr-2" />
            DOWNLOAD
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-8 py-20">
        {/* Geometric Illustrations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left Abstract Elements */}
          <div className="absolute top-20 left-20 opacity-40">
            <div className="w-24 h-24 border-2 border-foreground rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-foreground rounded-full"></div>
            <svg className="absolute top-8 left-32 w-16 h-8" viewBox="0 0 64 32">
              <path d="M8 16 L24 8 L40 12 L56 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            </svg>
          </div>
          
          {/* Center Geometric Travel */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-30">
            <img src={geometricTravel} alt="" className="w-96 h-auto" />
          </div>
          
          {/* Right Side Elements */}
          <div className="absolute top-32 right-20 opacity-40">
            <img src={geometricElephant} alt="" className="w-32 h-32" />
          </div>
          
          {/* Dashboard UI Mockup */}
          <div className="absolute top-40 right-40 opacity-30">
            <img src={geometricDashboard} alt="" className="w-40 h-auto" />
          </div>
          
          {/* Bottom geometric shapes */}
          <div className="absolute bottom-32 left-32 opacity-20">
            <div className="w-16 h-16 border-2 border-foreground transform rotate-45"></div>
          </div>
          
          <div className="absolute bottom-20 right-32 opacity-30">
            <svg className="w-20 h-20" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
              <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-foreground">
              Digital innovation
              <br />
              and creative
              <br />
              solutions
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
              An essential tool for global brands, digital agencies, startups 
              and creative professionals.
            </p>
            
            <Button className="bg-foreground text-background rounded-full px-8 py-4 text-lg font-medium hover:bg-foreground/90 group">
              <Download className="h-5 w-5 mr-3" />
              GET STARTED TODAY
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;