import React from 'react';
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useArticles } from "@/hooks/useArticles";

const BlogSectionHome = () => {
  const {
    articles: allArticles,
    loading
  } = useArticles(3);

  if (loading) {
    return <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-6 w-1/2 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>;
  }

  // Filtrer les articles pour n'afficher que ceux avec le statut "Publié"
  const publishedArticles = allArticles?.filter(article => article.status === "Publié") || [];
  
  // Trier par date décroissante (plus récent en premier)
  const articles = publishedArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!articles || articles.length === 0) {
    return <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-black mb-6">Aucun article disponible</h2>
            <p className="text-xl text-gray-600">Revenez bientôt pour découvrir nos derniers articles !</p>
          </div>
        </div>
      </section>;
  }

  // Article principal = le plus récent (premier de la liste triée)
  const featuredArticle = articles[0];
  // Autres articles = les 2 suivants
  const otherArticles = articles.slice(1);

  return <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-black mb-6 tracking-tight stagger-child opacity-0">Notre blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-child opacity-0">
            L'IA, la tech, l'automatisation, sont l'un de vos sujet de prédilection, vous êtes au bon endroit, découvrez nos articles rédigés avec passion et quelques assistants 😉
          </p>
        </div>

        <div className="space-y-12">
          {/* Article Principal (Plus récent = Featured) */}
          <Link to={`/blog/${featuredArticle.slug}`} className="block bg-[#e76f51] rounded-3xl overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            
            <div className="w-full h-80 relative overflow-hidden">
              <img 
                src={featuredArticle.image_url || "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png"} 
                alt={featuredArticle.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Design%20sans%20titre%20(33).png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            <div className="p-8 relative flex flex-col">
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
                <Button className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-[#e76f51] rounded-full px-8 py-3 font-medium transition-all duration-300">
                  Lire l'article
                </Button>
              </div>
            </div>
          </Link>

          {/* Articles Secondaires */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherArticles.map(article => <Link key={article.id} to={`/blog/${article.slug}`} className="block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group stagger-child opacity-0 overflow-hidden border border-gray-100 flex flex-col">
                {/* Image pleine largeur */}
                <div className="w-full h-48 relative overflow-hidden">
                  {article.image_url ? (
                    <img 
                      src={article.image_url} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Design%20sans%20titre%20(33).png";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.415-3.414l5-5A2 2 0 008 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Contenu */}
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
                  
                  <Button variant="ghost" className="text-[#e76f51] p-0 h-auto font-medium text-sm mt-auto">
                    Lire l'article
                  </Button>
                </div>
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
};

export default BlogSectionHome;
