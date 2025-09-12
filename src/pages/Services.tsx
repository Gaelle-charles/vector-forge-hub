import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Smartphone, Video, Bot, GraduationCap, CheckCircle, ArrowRight, 
  Code, Palette, Database, Cloud, Shield, Lightbulb, Target, Sparkles
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('applications');

  const serviceDetails = {
    applications: {
      title: "Applications Web & Mobile",
      icon: <Smartphone className="h-12 w-12" />,
      description: "Développement d'applications modernes et performantes",
      features: [
        "Applications React/Next.js",
        "Applications mobiles React Native",
        "Progressive Web Apps (PWA)",
        "Interface utilisateur moderne",
        "Performance optimisée",
        "Sécurité renforcée"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      pricing: "À partir de 5 000€",
      timeline: "4-8 semaines"
    },
    design: {
      title: "Design & UX/UI",
      icon: <Palette className="h-12 w-12" />,
      description: "Création d'interfaces élégantes et intuitives",
      features: [
        "Design systems complets",
        "Prototypage interactif",
        "Tests utilisateurs",
        "Interface responsive",
        "Identité visuelle",
        "Optimisation conversion"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"],
      pricing: "À partir de 2 500€",
      timeline: "2-4 semaines"
    },
    backend: {
      title: "Développement Backend",
      icon: <Database className="h-12 w-12" />,
      description: "API robustes et infrastructures scalables",
      features: [
        "API REST et GraphQL",
        "Bases de données optimisées",
        "Authentification sécurisée",
        "Intégrations tierces",
        "Monitoring en temps réel",
        "Documentation complète"
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"],
      pricing: "À partir de 3 500€",
      timeline: "3-6 semaines"
    },
    conseil: {
      title: "Conseil & Stratégie Digitale",
      icon: <GraduationCap className="h-12 w-12" />,
      description: "Accompagnement stratégique pour vos projets",
      features: [
        "Audit technique complet",
        "Stratégie produit",
        "Architecture technique",
        "Formation des équipes",
        "Support et maintenance",
        "Optimisation continue"
      ],
      technologies: ["Analytics", "SEO", "Performance", "Security", "Monitoring"],
      pricing: "À partir de 1 500€",
      timeline: "1-2 semaines"
    }
  };

  const processSteps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Analyse des Besoins",
      description: "Audit complet de vos besoins et définition des objectifs"
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
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground">
            <span className="orange-text">Services</span>
            <span className="block text-foreground text-4xl md:text-5xl mt-4">Excellence & Innovation</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales sur mesure qui propulsent votre entreprise vers de nouveaux horizons
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedService} onValueChange={setSelectedService}>
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 bg-secondary p-2 rounded-2xl">
              <TabsTrigger value="applications" className="rounded-xl">Applications</TabsTrigger>
              <TabsTrigger value="design" className="rounded-xl">Design</TabsTrigger>
              <TabsTrigger value="backend" className="rounded-xl">Backend</TabsTrigger>
              <TabsTrigger value="conseil" className="rounded-xl">Conseil</TabsTrigger>
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
                      <h2 className="text-3xl font-bold text-foreground">{currentService.title}</h2>
                      <p className="text-medium-gray text-lg">{currentService.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Fonctionnalités incluses :</h3>
                    <div className="grid gap-3">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-medium-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Technologies utilisées :</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentService.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-sm border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card */}
                <Card className="modern-card">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center text-foreground">
                      <Target className="mr-3 h-6 w-6 text-primary" />
                      Tarification Transparente
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {currentService.pricing}
                      </div>
                      <div className="text-medium-gray">
                        Délai : {currentService.timeline}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-medium-gray">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Audit initial gratuit
                      </div>
                      <div className="flex items-center text-sm text-medium-gray">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Support 3 mois inclus
                      </div>
                      <div className="flex items-center text-sm text-medium-gray">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Formation équipe
                      </div>
                      <div className="flex items-center text-sm text-medium-gray">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Garantie qualité
                      </div>
                    </div>

                    <Button className="modern-button-primary w-full text-lg">
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
      <section className="py-24 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-foreground">
              Notre <span className="orange-text">Méthodologie</span>
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Un processus éprouvé pour garantir le succès de vos projets digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="modern-card text-center group">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-5 bg-primary/10 rounded-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-medium-gray leading-relaxed mb-4">{step.description}</p>
                  <div className="mt-6 text-primary font-bold text-lg">Étape {index + 1}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-foreground">
            <span className="orange-text">Transformons</span> Votre Vision
            <span className="block text-foreground text-3xl mt-2">en Réalité Digitale</span>
          </h2>
          <p className="text-xl mb-10 text-medium-gray leading-relaxed">
            Discutons de votre projet et découvrons ensemble comment nous pouvons propulser votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="modern-button-primary text-lg px-8 py-4">
              Consultation gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="modern-button-outline text-lg px-8 py-4">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;