import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Home } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { articles: allArticles, featuredArticle, loading } = useArticles();

  // L'article principal est le plus récent parmi tous les articles
  const mainArticle = allArticles.length > 0 
    ? allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] 
    : null;
  
  // Les autres articles (sans l'article principal)
  const blogPosts = allArticles.filter(article => article.id !== mainArticle?.id);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pb-10 bg-white">
      {/* Hero Section avec Image de Header */}
<section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/logo%20noir.svg')"
          }}
        ></div>
        
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 z-5 bg-black/40"></div>
        
        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-12 drop-shadow-xl leading-relaxed">
              Découvrez nos articles et plongez dans l'univers de l'intelligence artificielle émergentes qui vous permettra de booster votre business.
            </p>
          </div>
        </div>
      </section>

      {/* Bouton Retour à l'accueil */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline">
            <Link
              to="/"
              className="inline-flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article principal (le plus récent publié) */}
            {mainArticle && (
              <Link
                key={mainArticle.id}
                to={`/blog/${mainArticle.slug}`}
                className="group modern-card hover:border-primary/20 md:col-span-2 lg:col-span-3"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={mainArticle.image_url}
                      alt={mainArticle.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        onError={(e) => {
                      e.currentTarget.src = "https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Design%20sans%20titre%20(33).png";
                    }}
                    />
                  </div>
                  
                  <div className="space-y-4 flex flex-col justify-center">
                    <div className="flex items-center justify-between text-sm text-white">
                      <span className="px-3 py-1 rounded-full font-medium bg-[#e76f51] text-white">
                        Récent • {mainArticle.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{mainArticle.read_time} min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-[#e76f51] transition-colors">
                      {mainArticle.title}
                    </h3>
                    
                    <p className="text-medium-gray line-clamp-3">
                      {mainArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-3 text-sm text-medium-gray">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(mainArticle.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
            
            {/* Autres articles (sans l'article principal) */}
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group modern-card hover:border-primary/20"
              >
                <div className="aspect-[4/3] sm:aspect-video mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Design%20sans%20titre%20(33).png";
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-white">
                     <span className={`px-3 py-1 rounded-full font-medium ${
                       post.category === 'Innovation' ? 'bg-[#e76f51] text-white' :
                       post.category === 'Design' ? 'bg-[#e76f51] text-white' :
                       post.category === 'Développement' ? 'bg-[#e76f51] text-white' :
                       'bg-[#e76f51] text-white'
                     }`}>
                       {post.category}
                     </span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.read_time} min</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#e76f51] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-medium-gray line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-3 text-sm text-medium-gray">

                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Footer */}

    </div>
  );
};

export default Blog;
