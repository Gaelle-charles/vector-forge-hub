import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { useArticle } from "@/hooks/useArticles";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { article: post, loading, error } = useArticle(slug || '');

  useEffect(() => {
    if (error) {
      console.error('Error loading article:', error);
      navigate('/blog', { replace: true });
    }
  }, [error, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="h-8 bg-gray-200 rounded mb-6 w-1/4"></div>
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
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
    <div className="min-h-screen bg-background">
      {/* Header avec image de couverture */}
      <header className="relative h-96 w-full overflow-hidden">
        <img
          src={post.image_url || "/src/assets/ai-brain.jpg"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation retour */}
        <div className="absolute top-6 left-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
        {/* Card de contenu */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className={`px-4 py-2 rounded-full font-medium text-sm ${
              post.category === 'Innovation' ? 'bg-blue-100 text-blue-800' :
              post.category === 'Design' ? 'bg-pink-100 text-pink-800' :
              post.category === 'Développement' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {post.category}
            </span>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author || 'Auteur inconnu'}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.read_time || 5} min de lecture</span>
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-[#e76f51] pl-6 italic">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bouton partager */}
          <div className="flex justify-end mb-8">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-[#e76f51] transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
              <span>Partager cet article</span>
            </button>
          </div>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#e76f51] prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-[#e76f51] prose-blockquote:text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </article>

          {/* Séparateur */}
          <div className="border-t border-gray-200 my-12"></div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cet article vous a plu ?
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez nos autres contenus ou discutez avec nous de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog" 
                className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Voir tous les articles
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#e76f51] text-white px-6 py-3 rounded-full hover:bg-[#d45a3a] transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
