import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedBackground from '@/components/AnimatedBackground';
import { 
  ExternalLink, Github, Play, Award, TrendingUp, Users, 
  Smartphone, Video, Bot, GraduationCap, Zap, Eye, Heart
} from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoSmart - App de Gestion Énergétique",
      category: "applications",
      description: "Application mobile utilisant l'IA pour optimiser la consommation énergétique des foyers",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["React Native", "TensorFlow", "IoT", "Node.js"],
      results: [
        "30% de réduction de consommation",
        "50K+ utilisateurs actifs", 
        "4.8/5 étoiles sur les stores"
      ],
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      id: 2,
      title: "AutoVideoGen - Générateur Vidéo IA",
      category: "video",
      description: "Plateforme de création automatique de vidéos marketing avec IA générative",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["OpenAI", "FFmpeg", "React", "Python"],
      results: [
        "10K vidéos générées/mois",
        "Réduction 80% temps production",
        "ROI client 300%+"
      ],
      links: {
        live: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "CustomerBot Pro",
      category: "agents",
      description: "Agent IA conversationnel multilingue pour le support client e-commerce",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["GPT-4", "LangChain", "Webhook", "CRM"],
      results: [
        "85% résolution automatique",
        "24/7 disponibilité",
        "Satisfaction 92%"
      ],
      links: {
        live: "#",
        case: "#"
      }
    },
    {
      id: 4,
      title: "AI Mastery Program",
      category: "formation",
      description: "Programme de formation intensive aux outils IA pour les entreprises",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["ChatGPT", "Midjourney", "Notion AI", "Zapier"],
      results: [
        "500+ professionnels formés",
        "95% taux satisfaction",
        "ROI moyen 250%"
      ],
      links: {
        program: "#",
        testimonials: "#"
      }
    },
    {
      id: 5,
      title: "MedIA - Diagnostic Médical IA",
      category: "applications",
      description: "Application d'aide au diagnostic médical par analyse d'images",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["Computer Vision", "TensorFlow", "DICOM", "React"],
      results: [
        "94% précision diagnostic",
        "50 hôpitaux partenaires",
        "Certification CE médicale"
      ],
      links: {
        live: "#",
        research: "#"
      }
    },
    {
      id: 6,
      title: "CreativeStudio IA",
      category: "video",
      description: "Suite complète de création de contenu visuel alimentée par l'IA",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["Stable Diffusion", "DALL-E", "Adobe API", "Vue.js"],
      results: [
        "1M+ images générées",
        "Temps création -70%",
        "Utilisateurs +200% en 6 mois"
      ],
      links: {
        live: "#",
        gallery: "#"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: <Zap className="h-4 w-4" /> },
    { id: 'applications', label: 'Applications', icon: <Smartphone className="h-4 w-4" /> },
    { id: 'video', label: 'Création Visuelle', icon: <Video className="h-4 w-4" /> },
    { id: 'agents', label: 'Agents IA', icon: <Bot className="h-4 w-4" /> },
    { id: 'formation', label: 'Formation', icon: <GraduationCap className="h-4 w-4" /> }
  ];

  const stats = [
    { icon: <Award className="h-6 w-6" />, number: "150+", label: "Projets livrés" },
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Clients satisfaits" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "300%", label: "ROI moyen client" },
    { icon: <Heart className="h-6 w-6" />, number: "4.9/5", label: "Note satisfaction" }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-deep-black">
            Portfolio
            <span className="block neon-text">Réalisations IA</span>
          </h1>
          <p className="text-xl text-deep-black/80 max-w-3xl mx-auto">
            Découvrez nos projets les plus innovants et les résultats exceptionnels obtenus avec l'IA
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-deep-black text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${activeCategory === category.id ? 'ai-button-primary' : ''} flex items-center space-x-2`}
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className={index % 2 === 0 ? "ai-card group" : "ai-card-magenta group"}>
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {categories.find(c => c.id === project.category)?.label}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className={`text-xl ${index % 2 !== 0 ? 'text-pure-white' : ''}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={index % 2 !== 0 ? 'text-pure-white/80' : ''}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <h4 className={`font-semibold text-sm ${index % 2 !== 0 ? 'text-pure-white' : ''}`}>
                      Résultats clés :
                    </h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className={`flex items-center text-sm ${index % 2 !== 0 ? 'text-pure-white/90' : 'text-muted-foreground'}`}>
                        <TrendingUp className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    {project.links.live && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                    )}
                    {project.links.code && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Play className="h-4 w-4 mr-1" />
                        Démo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">
            Témoignages Clients
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "L'application développée par AI Agency a révolutionné notre processus. Le ROI a dépassé toutes nos attentes !",
                author: "Marie Dupont",
                position: "CEO, EcoTech Solutions",
                rating: 5
              },
              {
                quote: "Une équipe exceptionnelle qui a su comprendre nos besoins et livrer une solution IA parfaitement adaptée.",
                author: "Jean-Claude Martin", 
                position: "CTO, Innovation Corp",
                rating: 5
              },
              {
                quote: "La formation IA a transformé notre équipe. Nos collaborateurs sont maintenant autonomes sur les outils d'IA.",
                author: "Sophie Laurent",
                position: "DRH, Digital & Co",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="ai-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-black">
            Votre Projet est le Prochain !
          </h2>
          <p className="text-xl text-deep-black/80 mb-8">
            Rejoignez nos clients satisfaits et donnez vie à vos idées les plus ambitieuses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="ai-button-primary text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Démarrer mon projet
            </Button>
            <Button className="ai-button-secondary text-lg">
              <Eye className="mr-2 h-5 w-5" />
              Voir plus de projets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;