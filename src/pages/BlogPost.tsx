import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  author: string;
  date: string;
  read_time: number;
  category: string;
  image_url: string | null;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching article:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6 w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article non trouvé</h1>
          <Link to="/blog" className="modern-button-primary inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-medium-gray hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full font-medium text-sm ${
                post.category === 'Innovation' ? 'bg-neon-cyan/20 text-neon-cyan' :
                post.category === 'Design' ? 'bg-neon-pink/20 text-neon-pink' :
                post.category === 'Développement' ? 'bg-neon-green/20 text-neon-green' :
                'bg-neon-purple/20 text-neon-purple'
              }`}>
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-sm text-medium-gray">
                <Clock className="w-4 h-4" />
                <span>{post.read_time} min</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-medium-gray">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-medium-gray">
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
              
              <button className="flex items-center space-x-2 text-medium-gray hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Partager</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video overflow-hidden rounded-3xl">
          <img
            src={post.image_url || "/src/assets/ai-brain.jpg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-medium-gray prose-a:text-primary prose-strong:text-foreground prose-ul:text-medium-gray prose-li:text-medium-gray"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>

      {/* Navigation */}
      <div className="border-t border-border bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-medium-gray mb-8">
              Discutons de vos besoins et créons quelque chose d'extraordinaire ensemble.
            </p>
            <Link to="/contact" className="modern-button-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;