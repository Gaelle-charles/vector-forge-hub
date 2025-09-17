import React from 'react';
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useArticles } from "@/hooks/useArticles";

const BlogSectionHome = () => {
  const { articles, loading } = useArticles(4);

  if (loading) {
    return (
      <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-6 w-1/2 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-black mb-6">Aucun article disponible</h2>
            <p className="text-xl text-gray-600">Revenez bientôt pour découvrir nos derniers articles !</p>
          </div>
        </div>
      </section>
    );
  }

  // dernier article = card orange
  const featuredArticle = articles[articles.length - 1];
  // autres articles
  const otherArticles = articles.slice(0, -1);

  return (
    <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-black mb-6 tracking-tight stagger-child opacity-0">
            Derniers articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-child opacity-0">
            L'IA, la tech, l'automatisation, sont l'un de vos sujet de prédilection, vous êtes au bon endroit, découvrez nos articles rédigés avec passion et quelques assistants 😉
          </p>
        </div>

        <div className="space-y-12">
          {/* Article Principal (Dernier = Featured) */}
          <Link 
            to={`/blog/${featuredArticle.slug}`}
            className="block bg-[#e76f51] rounded-3xl overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          
            <div className="flex">
              {/* Image de l'article */}
              <div className="w-1/3 h-64 bg-gradient-to-br from-[#d95f3f] to-[#c44d2b] flex items-center justify-center relative overflow-hidden">
                <img 
                  src={featuredArticle.image_url || "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png"} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              <div className="flex-1 p-8 relative">
                <div className="absolute top-0 right-0 w-48 h-24 bg-gradient-to-bl from-pink-400/20 to-purple-400/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-black text-white border-0 px-4 py-2 rounded-full font-medium">
                      Article
                    </Badge>
                    <Badge className="bg-black text-white border-0 px-4 py-2 rounded-full font-medium">
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-white/80 text-sm font-medium">
                      {new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-[#e76f51] rounded-full px-8 py-3 font-medium transition-all duration-300"
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Articles Secondaires */}
          <div className="grid
