import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedBackground from '@/components/AnimatedBackground';
import { 
  Smartphone, Video, Bot, GraduationCap, CheckCircle, ArrowRight, 
  Zap, Code, Palette, Database, Cloud, Shield, Lightbulb, Target
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
      icon: <Zap className="h-8 w-8" />,
      title: "Déploiement & Formation",
      description: "Mise en production accompagnée de formation de vos équipes"
    }
  ];

  const currentService = serviceDetails[selectedService as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-deep-black">
            Services IA
            <span className="block neon-text">Avant-Gardistes</span>
          </h1>
          <p className="text-xl text-deep-black/80 max-w-3xl mx-auto">
            Des solutions IA innovantes pour propulser votre entreprise vers le futur
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
                <Card className="ai-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="mr-2 h-6 w-6 text-primary" />
                      Tarification
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

                    <Button className="ai-button-primary w-full text-lg">
                      Démarrer ce projet
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de vos projets IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="ai-card text-center group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <div className="mt-4 text-primary font-bold">Étape {index + 1}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-black text-pure-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transformez Votre Vision en Réalité
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discutons de votre projet et découvrons ensemble comment l'IA peut révolutionner votre activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="ai-button-primary text-lg">
              Consultation gratuite
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg border-primary text-primary hover:bg-primary hover:text-black">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;