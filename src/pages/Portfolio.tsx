import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, Github, Play, Award, TrendingUp, Users, 
  Smartphone, Video, Code, Palette, Zap, Eye, Heart
} from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoSmart - App de Gestion Énergétique",
      category: "applications",
      description: "Application mobile moderne pour optimiser la consommation énergétique",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["React Native", "Node.js", "MongoDB", "TypeScript"],
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
      title: "Brand Studio - Plateforme Creative",
      category: "design",
      description: "Plateforme de création et gestion de contenu pour les marques",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["React", "Figma API", "Adobe SDK", "Next.js"],
      results: [
        "10K designs créés/mois",
        "Réduction 80% temps création",
        "ROI client 300%+"
      ],
      links: {
        live: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "CustomerHub Pro",
      category: "backend",
      description: "API complète de gestion client avec dashboard analytics",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
      results: [
        "99.9% uptime garanti",
        "500+ requêtes/seconde",
        "Satisfaction 95%"
      ],
      links: {
        live: "#",
        docs: "#"
      }
    },
    {
      id: 4,
      title: "Digital Mastery Program",
      category: "conseil",
      description: "Programme de transformation digitale pour les entreprises",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["Analytics", "SEO", "Performance", "Strategy"],
      results: [
        "200+ entreprises accompagnées",
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
      title: "HealthTech Dashboard",
      category: "applications",
      description: "Tableau de bord médical pour le suivi patient",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["React", "D3.js", "WebSockets", "FHIR"],
      results: [
        "94% précision données",
        "50 cliniques partenaires",
        "Certification médicale"
      ],
      links: {
        live: "#",
        research: "#"
      }
    },
    {
      id: 6,
      title: "Design System Pro",
      category: "design",
      description: "Système de design complet avec composants réutilisables",
      image: "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png",
      technologies: ["Figma", "Storybook", "React", "Tokens"],
      results: [
        "100+ composants",
        "Temps développement -60%",
        "Cohérence 100%"
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
    { id: 'design', label: 'Design', icon: <Palette className="h-4 w-4" /> },
    { id: 'backend', label: 'Backend', icon: <Code className="h-4 w-4" /> },
    { id: 'conseil', label: 'Conseil', icon: <Users className="h-4 w-4" /> }
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
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Portfolio
            <span className="block orange-text">Nos Réalisations</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Découvrez nos projets les plus innovants et les résultats exceptionnels obtenus
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
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
                <div className="text-sm text-medium-gray">{stat.label}</div>
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
                className={`${activeCategory === category.id ? 'modern-button-primary' : 'modern-button-secondary'} flex items-center space-x-2`}
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="modern-card group">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {categories.find(c => c.id === project.category)?.label}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-medium-gray">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">
                      Résultats clés :
                    </h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-medium-gray">
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
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Témoignages <span className="orange-text">Clients</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "L'application développée par Gogogo Studio a révolutionné notre processus. Le ROI a dépassé toutes nos attentes !",
                author: "Marie Dupont",
                position: "CEO, EcoTech Solutions",
                rating: 5
              },
              {
                quote: "Une équipe exceptionnelle qui a su comprendre nos besoins et livrer une solution parfaitement adaptée.",
                author: "Jean-Claude Martin", 
                position: "CTO, Innovation Corp",
                rating: 5
              },
              {
                quote: "Le design system créé a transformé notre équipe. Nos développeurs sont maintenant beaucoup plus efficaces.",
                author: "Sophie Laurent",
                position: "Lead Designer, Digital & Co",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="modern-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-medium-gray mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Votre Projet est le <span className="orange-text">Prochain</span> !
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            Rejoignez nos clients satisfaits et donnez vie à vos idées les plus ambitieuses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="modern-button-primary text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Démarrer mon projet
            </Button>
            <Button className="modern-button-outline text-lg">
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