import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import techRobot from '@/assets/tech-robot.png';
import techBrain from '@/assets/tech-brain.png';
import techDevices from '@/assets/tech-devices.png';
import techRocket from '@/assets/tech-rocket.png';
import { ArrowRight, Smartphone, Video, Bot, GraduationCap, Star, CheckCircle, Users, Trophy, Clock, Code, Cpu, Zap, Sparkles } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');

  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Apps Qui Époustouflent",
      description: "Des apps si intelligentes qu'elles lisent dans vos pensées ! On code avec l'IA comme copilote et la beauté naturelle comme inspiration 🌺",
      features: ["IA Conversationnelle", "Design Biomimétique", "Prédiction Magique", "UX Envoûtante"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Créations Visuelles Épiques",
      description: "L'IA génère, vous rêvez ! Des visuels si beaux que même Mère Nature applaudit. Nos algorithmes ont étudié chez Picasso ET Darwin 🎭",
      features: ["IA Générative Pro", "Style Organique", "Rendu Photoréaliste", "Émotions Pures"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Agents IA de Folie",
      description: "Des robots virtuels si cool qu'ils pourraient avoir leur propre compte TikTok ! Ils automatisent tout avec classe et finesse florale 🌿",
      features: ["Conversations Naturelles", "Automation Zen", "Prédictions Surnaturelles", "Intégration Fluide"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Formations IA Addictives",
      description: "Devenez un magicien de l'IA ! Nos formations sont si fun que vous oublierez que vous apprenez. Promis, pas de cours barbants 😉",
      features: ["Workshops Interactifs", "Certification Cool", "Mentorat Personnalisé", "Résultats Garantis"]
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Clients épanouis" },
    { icon: <Trophy className="h-6 w-6" />, number: "150+", label: "Projets fleuris" },
    { icon: <Clock className="h-6 w-6" />, number: "24/7", label: "Support continu" },
    { icon: <Star className="h-6 w-6" />, number: "4.9/5", label: "Excellence reconnue" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
        
        {/* Tech Illustrations */}
        <div className="absolute right-20 top-20 hidden lg:block opacity-30 animate-float">
          <img 
            src={techRobot} 
            alt="Tech Robot" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="absolute left-20 bottom-20 hidden lg:block opacity-20 animate-bounce">
          <img 
            src={techBrain} 
            alt="Tech Brain" 
            className="w-28 h-28 object-contain"
          />
        </div>
        <div className="absolute right-1/4 bottom-32 hidden lg:block opacity-25">
          <img 
            src={techDevices} 
            alt="Tech Devices" 
            className="w-24 h-24 object-contain"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-bloom">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
              <span className="orange-text">GoGoGo Studio</span>
              <span className="block text-foreground text-4xl md:text-6xl mt-4">
                Tech & Innovation              
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-8 max-w-3xl mx-auto font-medium">
              On transforme vos idées en réalité digitale avec style !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="modern-button-primary text-lg px-8 py-4">
                Nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="modern-button-outline text-lg px-8 py-4">
                <Code className="mr-2 h-5 w-5" />
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary relative">
        <div className="absolute right-10 top-10 opacity-10">
          <img 
            src={techRocket} 
            alt="Tech Rocket" 
            className="w-40 h-40 object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-medium-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute left-10 top-1/4 opacity-10">
          <img 
            src={techBrain} 
            alt="Tech Brain" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="orange-text">Services Tech</span>
              <span className="block text-foreground text-3xl md:text-4xl mt-2">Innovation & Expertise</span>
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              De l'idée à la réalisation, nous créons des solutions digitales modernes et performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "modern-card" : "modern-card-accent"}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl mr-4 ${index % 2 === 0 ? 'text-primary bg-primary/10' : 'text-primary bg-primary/10'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-medium-gray mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                      <span className="text-medium-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services">
                  <Button variant="outline" className="mt-8 w-full hover:scale-105 transition-transform duration-300 border-primary/30 hover:border-primary">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 hidden lg:block">
          <img 
            src={techRocket} 
            alt="Tech Rocket" 
            className="w-40 h-40 object-contain"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            <span className="orange-text">Prêt à révolutionner</span>
            <span className="block text-foreground text-3xl md:text-4xl mt-2">votre business ?</span>
          </h2>
          <p className="text-xl text-medium-gray mb-10 leading-relaxed">
            Raconte-nous ton rêve fou et on le transforme en réalité digitale ! 
          </p>
          
          <Card className="modern-card max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="orange-text text-2xl">Contact Express</CardTitle>
              <CardDescription className="text-medium-gray">
                Recevez votre devis personnalisé en moins de 24h
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input 
                placeholder="Votre email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
              <Textarea 
                placeholder="Décrivez votre projet..." 
                rows={3} 
                className="border-primary/20 focus:border-primary"
              />
              <Button className="modern-button-primary w-full text-lg py-3">
                <Sparkles className="mr-2 h-5 w-5" />
                Lancer mon projet tech
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
