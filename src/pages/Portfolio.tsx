import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, Smartphone, Video } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout', icon: Globe },
    { id: 'web', label: 'Sites Web', icon: Globe },
    { id: 'mobile', label: 'Applications', icon: Smartphone },
    { id: 'video', label: 'Vidéos', icon: Video },
  ];

  const projects = [
    {
      id: 1,
      title: 'Site E-commerce Moderne',
      category: 'web',
      description: 'Plateforme e-commerce complète avec paiement intégré et gestion des stocks en temps réel.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Stripe', 'IA'],
      link: '#',
    },
    {
      id: 2,
      title: 'Application Mobile Fitness',
      category: 'mobile',
      description: 'Application de suivi fitness avec plans d\'entraînement personnalisés par IA.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React Native', 'IA', 'Santé'],
      link: '#',
    },
    {
      id: 3,
      title: 'Vidéo Promotionnelle IA',
      category: 'video',
      description: 'Vidéo de présentation produit entièrement générée par IA avec voix-off personnalisée.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      tags: ['IA Vidéo', 'Animation', 'Marketing'],
      link: '#',
    },
    {
      id: 4,
      title: 'Portail Client B2B',
      category: 'web',
      description: 'Plateforme de gestion client avec tableau de bord analytique et automatisation des processus.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Dashboard', 'Analytics', 'Automation'],
      link: '#',
    },
    {
      id: 5,
      title: 'App de Réservation',
      category: 'mobile',
      description: 'Application de réservation en ligne avec notifications push et paiement sécurisé.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Booking', 'Notifications', 'Mobile'],
      link: '#',
    },
    {
      id: 6,
      title: 'Série de Contenus Vidéo',
      category: 'video',
      description: 'Série de vidéos courtes pour réseaux sociaux générées avec IA, optimisées pour l\'engagement.',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
      tags: ['Social Media', 'IA', 'Branding'],
      link: '#',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Notre Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos réalisations : sites web, applications mobiles et vidéos créées avec l'IA
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-black pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#e76f51] text-white scale-105'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-2 border-gray-200 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        className="bg-black text-white hover:bg-[#e76f51] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-[#e76f51] hover:bg-black text-white rounded-full transition-all duration-300 group"
                  >
                    Voir le projet
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-[#e76f51] mb-4">50+</div>
              <div className="text-xl text-white">Projets Réalisés</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#e76f51] mb-4">30+</div>
              <div className="text-xl text-white">Clients Satisfaits</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#e76f51] mb-4">100%</div>
              <div className="text-xl text-white">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="bg-[#e76f51] hover:bg-black text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contactez-nous
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
