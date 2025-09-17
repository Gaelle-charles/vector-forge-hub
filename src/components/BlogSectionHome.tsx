import React from 'react';
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useArticles } from "@/hooks/useArticles";

const BlogSectionHome = () => {
  const { articles, loading } = useArticles(4);

  // On prend le dernier article comme "featured"
  const featuredArticle = articles.length > 0 ? articles[articles.length - 1] : null;

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

  if (!featuredArticle) {
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
          {/* Article Principal (dernier, en orange) */}
          <Link 
            to={`/blog/${featuredArticle.slug}`}
            className="block bg-[#e76f51] rounded-3xl overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          
            <div className="flex">
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
                
                <div className="relative z-10">
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
                  
                  <Button 
                    className="bg-white/20 text-white border border-white/30 rounded-full px-8 py-3 font-medium"
                  >
                    Lire l'article
                  </Button>
                </div>
              </div>
            </div>
          </Link>

          {/* Articles Secondaires */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(0, -1).map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group stagger-child opacity-0 overflow-hidden border border-gray-100"
              >
                <div className="flex">
                  <div className="w-1/3 h-48 relative overflow-hidden">
                    {article.image_url ? (
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      />
                    ) : (
                      <div className={`w-full h-full ${index === 0 ? 'bg-gradient-to-br from-teal-400 to-teal-600' : 'bg-gradient-to-br from-orange-400 via-red-400 to-pink-500'} flex items-center justify-center relative`}>
                        <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.415-3.414l5-5A2 2 0 008 10.172V5L8 4z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contenu avec bouton aligné */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[#e76f51] text-white border-0 px-3 py-1 rounded-full text-xs font-medium">
                        Article
                      </Badge>
                      <Badge className="bg-[#e76f51] text-white border-0 px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </Badge>
                      <span className="text-gray-500 text-xs">
                        {new Date(article.date).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost"
                      className="text-[#e76f51] font-medium text-sm mt-auto p-0 h-auto"
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionHome;
