import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";

const Blog = () => {
  const { articles: blogPosts, featuredArticle, loading } = useArticles();

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
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section avec Image de Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/ai-brain.jpg" 
            alt="Intelligence Artificielle" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-md">
            Découvrez nos articles et plongez dans l'univers de l'intelligence artificielle émergentes qui vous permettra de booster votre business.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article en premier si il existe */}
            {featuredArticle && (
              <Link
                key={featuredArticle.id}
                to={`/blog/${featuredArticle.slug}`}
                className="group modern-card hover:border-primary/20 md:col-span-2 lg:col-span-3"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={featuredArticle.image_url || "/src/assets/ai-brain.jpg"}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-4 flex flex-col justify-center">
                    <div className="flex items-center justify-between text-sm text-white">
                      <span className="px-3 py-1 rounded-full font-medium bg-[#e76f51] text-white">
                        Featured • {featuredArticle.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.read_time} min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-medium-gray line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-3 text-sm text-medium-gray">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
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
            
            {/* Articles normaux */}
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group modern-card hover:border-primary/20"
              >
                <div className="aspect-[4/3] sm:aspect-video mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={post.image_url || "/src/assets/ai-brain.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-medium-gray line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-3 text-sm text-medium-gray">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
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
      <footer className="py-8 bg-white text-white rounded-t-[4rem] -mt-16 z-50 relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.png" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 GoGoGo Studio. Innovation digitale et solutions créatives.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
