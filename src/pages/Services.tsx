import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FloralBackground from '@/components/FloralBackground';
import tropicalArrangement from '@/assets/tropical-arrangement.jpg';
import { 
  Smartphone, Video, Bot, GraduationCap, CheckCircle, ArrowRight, 
  Flower, Code, Palette, Database, Cloud, Shield, Lightbulb, Target, Sparkles
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('applications');

  const serviceDetails = {
    applications: {
      title: "Applications Web & Mobile",
      icon: <Smartphone className="h-12 w-12" />,
      description: "Développement d'applications intelligentes avec IA intégrée",
      features: [
        "Applications React Native cross-platform",
        "Progressive Web Apps (PWA)",
        "Intégration IA et Machine Learning",
        "Interface utilisateur moderne et intuitive",
        "Performance optimisée",
        "Sécurité renforcée"
      ],
      technologies: ["React", "React Native", "TypeScript", "Node.js", "Python", "TensorFlow"],
      pricing: "À partir de 15 000€",
      timeline: "6-12 semaines"
    },
    video: {
      title: "Création Vidéo & Images IA",
      icon: <Video className="h-12 w-12" />,
      description: "Production de contenus visuels époustouflants avec l'IA générative",
      features: [
        "Génération d'images haute qualité",
        "Création vidéo automatisée",
        "Animation 3D et motion design",
        "Personnalisation de contenu en masse",
        "Retouche et amélioration d'images",
        "Création de avatars virtuels"
      ],
      technologies: ["DALL-E", "Midjourney", "Stable Diffusion", "After Effects", "Blender"],
      pricing: "À partir de 2 500€",
      timeline: "2-4 semaines"
    },
    agents: {
      title: "Agents IA Personnalisés",
      icon: <Bot className="h-12 w-12" />,
      description: "Assistants IA sur mesure pour automatiser vos processus",
      features: [
        "Chatbots conversationnels avancés",
        "Automatisation de workflows",
        "Analyse prédictive et insights",
        "Intégration APIs multiples",
        "Traitement du langage naturel",
        "Apprentissage continu"
      ],
      technologies: ["OpenAI GPT", "LangChain", "Rasa", "TensorFlow", "API REST"],
      pricing: "À partir de 8 000€",
      timeline: "4-8 semaines"
    },
    formation: {
      title: "Formation & Accompagnement IA",
      icon: <GraduationCap className="h-12 w-12" />,
      description: "Programmes de formation pour maîtriser les outils d'IA",
      features: [
        "Ateliers pratiques en entreprise",
        "Formation aux outils IA populaires",
        "Stratégie d'adoption de l'IA",
        "Certification personnalisée",
        "Support et suivi post-formation",
        "Cas d'usage métier spécifiques"
      ],
      technologies: ["ChatGPT", "Claude", "Midjourney", "Notion AI", "Zapier"],
      pricing: "À partir de 1 500€",
      timeline: "1-3 jours"
    }
  };

  const processSteps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Analyse des Besoins",
      description: "Audit complet de vos processus et identification des opportunités IA"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Stratégie Personnalisée",
      description: "Élaboration d'une roadmap sur mesure adaptée à vos objectifs"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Développement Agile",
      description: "Création itérative avec feedback continu et tests réguliers"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Déploiement & Formation",
      description: "Mise en production accompagnée de formation de vos équipes"
    }
  ];

  const currentService = serviceDetails[selectedService as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-24 relative">
        <FloralBackground />
        <div className="absolute left-10 top-1/4 opacity-30 hidden lg:block">
          <img 
            src={tropicalArrangement} 
            alt="Tropical arrangement" 
            className="w-64 h-64 object-cover rounded-3xl floating-flora"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground">
            <span className="paradise-text">Services IA</span>
            <span className="block text-foreground/90 text-4xl md:text-5xl mt-4">Élégants & Naturels</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Des solutions IA innovantes qui s'épanouissent comme les plus belles fleurs 
            pour propulser votre entreprise vers de nouveaux horizons
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedService} onValueChange={setSelectedService}>
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 bg-muted p-2 rounded-2xl">
              <TabsTrigger value="applications" className="rounded-xl">Applications</TabsTrigger>
              <TabsTrigger value="video" className="rounded-xl">Création Visuelle</TabsTrigger>
              <TabsTrigger value="agents" className="rounded-xl">Agents IA</TabsTrigger>
              <TabsTrigger value="formation" className="rounded-xl">Formation</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedService}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Service Details */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                      {currentService.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{currentService.title}</h2>
                      <p className="text-muted-foreground text-lg">{currentService.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Fonctionnalités incluses :</h3>
                    <div className="grid gap-3">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Technologies utilisées :</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentService.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card */}
                <Card className="floral-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Flower className="mr-3 h-6 w-6 text-primary" />
                      Tarification Élégante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {currentService.pricing}
                      </div>
                      <div className="text-muted-foreground">
                        Délai : {currentService.timeline}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Audit initial gratuit
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Support 6 mois inclus
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Formation équipe
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Garantie résultat
                      </div>
                    </div>

                    <Button className="floral-button-primary w-full text-lg">
                      Faire fleurir ce projet
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/20 relative">
        <FloralBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 tropical-text">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un processus organique et éprouvé pour garantir l'épanouissement de vos projets IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="floral-card text-center group">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-5 bg-primary/10 rounded-3xl text-primary group-hover:scale-110 transition-transform duration-500 petal-glow">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <div className="mt-6 text-primary font-bold text-lg">Étape {index + 1}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative">
        <FloralBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-foreground">
            <span className="paradise-text">Transformez Votre Vision</span>
            <span className="block text-foreground/90 text-3xl mt-2">en Réalité Florissante</span>
          </h2>
          <p className="text-xl mb-10 text-muted-foreground leading-relaxed">
            Discutons de votre projet et découvrons ensemble comment l'IA peut révolutionner 
            votre activité avec l'élégance et l'efficacité de la nature
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="floral-button-primary text-lg px-8 py-4">
              Consultation gratuite
              <Flower className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;