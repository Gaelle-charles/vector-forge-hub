import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedBackground from '@/components/AnimatedBackground';
import { 
  Target, Lightbulb, Users, Award, Calendar, MapPin, Linkedin, 
  Github, Mail, Zap, Brain, Rocket, Shield, Heart, Star, 
  TrendingUp, Code, Palette, Bot
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation Continue",
      description: "Nous restons à la pointe des dernières avancées en IA pour offrir les solutions les plus performantes."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Relation Client",
      description: "Chaque projet est unique. Nous construisons des partenariats durables basés sur la confiance mutuelle."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Éthique & Sécurité",
      description: "Développement responsable de l'IA avec respect de la vie privée et des standards de sécurité les plus élevés."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Excellence Technique",
      description: "Code de qualité, méthodologies agiles et architecture scalable pour des solutions pérennes."
    }
  ];

  const team = [
    {
      name: "Alexandre Dubois",
      position: "CEO & IA Strategist",
      bio: "Expert en IA avec 10 ans d'expérience. Ancien lead data scientist chez Google.",
      skills: ["Strategy", "Machine Learning", "Leadership"],
      social: {
        linkedin: "#",
        github: "#",
        email: "alexandre@aiagency.fr"
      }
    },
    {
      name: "Sarah Chen",
      position: "CTO & Lead Developer",
      bio: "Développeuse full-stack passionnée par l'IA. Spécialiste React et Python.",
      skills: ["React", "Python", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@aiagency.fr"
      }
    },
    {
      name: "Thomas Moreau",
      position: "AI Research Engineer",
      bio: "Chercheur en IA et vision par ordinateur. PhD en Computer Science.",
      skills: ["Deep Learning", "Computer Vision", "Research"],
      social: {
        linkedin: "#",
        github: "#",
        email: "thomas@aiagency.fr"
      }
    },
    {
      name: "Julie Martin",
      position: "UX/UI Designer",
      bio: "Designer créative spécialisée dans l'interface utilisateur pour les applications IA.",
      skills: ["UI/UX", "Figma", "User Research"],
      social: {
        linkedin: "#",
        email: "julie@aiagency.fr"
      }
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fondation d'AI Agency",
      description: "Lancement avec une vision : démocratiser l'IA pour les entreprises"
    },
    {
      year: "2021",
      title: "Premiers Succès",
      description: "50 clients accompagnés et première levée de fonds"
    },
    {
      year: "2022",
      title: "Expansion Internationale",
      description: "Ouverture à l'international et partenariats stratégiques"
    },
    {
      year: "2023",
      title: "Leadership Reconnu",
      description: "Prix de l'innovation IA et 300+ projets réalisés"
    },
    {
      year: "2024",
      title: "Nouvelles Ambitions",
      description: "Lancement de notre programme de formation et R&D avancée"
    }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, title: "Prix Innovation IA 2023", org: "French Tech" },
    { icon: <Star className="h-6 w-6" />, title: "Top 10 Startups IA", org: "TechCrunch" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Croissance 400%", org: "Les Echos" },
    { icon: <Users className="h-6 w-6" />, title: "Meilleur Employeur", org: "Great Place to Work" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-deep-black">
              À Propos
              <span className="block neon-text">d'AI Agency</span>
            </h1>
            <p className="text-xl text-deep-black/80 max-w-3xl mx-auto">
              Nous sommes une équipe passionnée qui transforme l'intelligence artificielle 
              en solutions concrètes pour révolutionner votre business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="ai-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Notre Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Démocratiser l'intelligence artificielle en créant des solutions accessibles, 
                    éthiques et performantes qui transforment la façon dont les entreprises opèrent 
                    et innovent dans l'économie numérique.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="ai-card-magenta">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-pure-white mr-3" />
                    <h3 className="text-xl font-bold text-pure-white">Notre Vision</h3>
                  </div>
                  <p className="text-pure-white/80">
                    Devenir le partenaire de référence en Europe pour l'intégration de l'IA 
                    dans les entreprises, en créant un écosystème où technologie et humanité 
                    convergent vers l'excellence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="ai-card text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        {achievement.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.org}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Nos Valeurs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="ai-card text-center group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Notre Équipe
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className={index % 2 === 0 ? "ai-card" : "ai-card-magenta"}>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className={`text-lg ${index % 2 !== 0 ? 'text-pure-white' : ''}`}>
                    {member.name}
                  </CardTitle>
                  <CardDescription className={`text-sm font-medium ${index % 2 !== 0 ? 'text-primary' : 'text-primary'}`}>
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className={`text-sm ${index % 2 !== 0 ? 'text-pure-white/80' : 'text-muted-foreground'}`}>
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className={`p-2 rounded-lg ${index % 2 !== 0 ? 'bg-pure-white/20 text-pure-white' : 'bg-primary/10 text-primary'} hover:scale-110 transition-transform`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className={`p-2 rounded-lg ${index % 2 !== 0 ? 'bg-pure-white/20 text-pure-white' : 'bg-primary/10 text-primary'} hover:scale-110 transition-transform`}>
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className={`p-2 rounded-lg ${index % 2 !== 0 ? 'bg-pure-white/20 text-pure-white' : 'bg-primary/10 text-primary'} hover:scale-110 transition-transform`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-deep-black text-pure-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Notre Histoire
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-deep-black z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="ai-card-magenta">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          <span className="text-primary font-bold">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-pure-white mb-2">{event.title}</h3>
                        <p className="text-pure-white/80">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-black">
            Rejoignez Notre Aventure
          </h2>
          <p className="text-xl text-deep-black/80 mb-8">
            Que vous soyez un talent ou un futur client, nous serions ravis de discuter avec vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="ai-button-primary text-lg">
              <Users className="mr-2 h-5 w-5" />
              Nous rejoindre
            </Button>
            <Button className="ai-button-secondary text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Devenir client
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;