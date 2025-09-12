import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import geometricTravel from '@/assets/geometric-travel.png';
import geometricElephant from '@/assets/geometric-elephant.png';
import geometricDashboard from '@/assets/geometric-dashboard.png';
import { 
  ArrowUpRight, Download, Globe, Smartphone, Video, Bot, Code, 
  CheckCircle, Mail, MapPin, Phone, Send, ExternalLink
} from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-background" />
            </div>
            <span className="text-2xl font-bold text-foreground">GoGoGo Studio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              BLOG
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              CONTACT
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-foreground">
              <Globe className="h-4 w-4" />
              <span>FR</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-foreground text-background rounded-full px-6 py-2 hover:bg-foreground/90"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-8 py-20 pt-32">
        {/* Geometric Illustrations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 opacity-40">
            <div className="w-24 h-24 border-2 border-foreground rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-foreground rounded-full"></div>
            <svg className="absolute top-8 left-32 w-16 h-8" viewBox="0 0 64 32">
              <path d="M8 16 L24 8 L40 12 L56 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            </svg>
          </div>
          
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-30">
            <img src={geometricTravel} alt="" className="w-96 h-auto" />
          </div>
          
          <div className="absolute top-32 right-20 opacity-40">
            <img src={geometricElephant} alt="" className="w-32 h-32" />
          </div>
          
          <div className="absolute top-40 right-40 opacity-30">
            <img src={geometricDashboard} alt="" className="w-40 h-auto" />
          </div>
          
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
            
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-foreground text-background rounded-full px-8 py-4 text-lg font-medium hover:bg-foreground/90 group"
            >
              <Download className="h-5 w-5 mr-3" />
              GET STARTED TODAY
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We provide comprehensive digital solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-foreground">WEB DEVELOPMENT</CardTitle>
                <CardDescription className="text-foreground/80">
                  Modern, responsive websites and web applications built with cutting-edge technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>React & Next.js Applications</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Progressive Web Apps</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>E-commerce Solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-foreground">DESIGN & BRANDING</CardTitle>
                <CardDescription className="text-foreground/80">
                  Complete visual identity and user experience design for digital products.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Brand Identity</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Design Systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-foreground">AI SOLUTIONS</CardTitle>
                <CardDescription className="text-foreground/80">
                  Intelligent automation and AI-powered features for your business processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Chatbots & Virtual Assistants</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Process Automation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Data Analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Insights and updates from our team about technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge variant="outline" className="w-fit mb-2">Development</Badge>
                <CardTitle className="text-xl text-foreground group-hover:text-foreground/80">
                  The Future of Web Development
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  Exploring emerging trends and technologies that will shape the next generation of web applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Dec 12, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Bot className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge variant="outline" className="w-fit mb-2">AI</Badge>
                <CardTitle className="text-xl text-foreground group-hover:text-foreground/80">
                  AI in Modern Business
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  How artificial intelligence is transforming industries and creating new opportunities for growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Dec 10, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge variant="outline" className="w-fit mb-2">Design</Badge>
                <CardTitle className="text-xl text-foreground group-hover:text-foreground/80">
                  Design Systems That Scale
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  Building consistent and maintainable design systems for large-scale applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/60">Dec 8, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                <CardDescription className="text-foreground/80">
                  We'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First name" className="border-border" />
                  <Input placeholder="Last name" className="border-border" />
                </div>
                <Input placeholder="Email address" type="email" className="border-border" />
                <Input placeholder="Company (optional)" className="border-border" />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  className="border-border"
                />
                <Button className="bg-foreground text-background w-full rounded-full py-3 hover:bg-foreground/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-foreground/80">hello@gogogo-studio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-foreground/80">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-foreground/80">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2 text-foreground/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;