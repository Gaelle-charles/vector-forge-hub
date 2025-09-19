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
          src={post.image_url || "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png"}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png";
          }}
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


         

          {/* Séparateur */}
          <div className="border-t border-gray-200 mb-8"></div>

       {/* CONTENU DE L'ARTICLE */}
<article className="prose prose-lg max-w-none text-black
  prose-headings:!text-black 
  prose-h2:!text-3xl prose-h2:!font-bold prose-h2:!mt-12 prose-h2:!mb-6
  prose-h3:!text-2xl prose-h3:!font-bold prose-h3:!mt-10 prose-h3:!mb-4
  prose-p:!text-black prose-p:!leading-relaxed prose-p:!mb-6
  prose-a:!text-[#e76f51] prose-a:!font-medium prose-a:!no-underline hover:prose-a:!underline
  prose-strong:!text-black
  prose-ul:!text-black prose-ul:!my-6
  prose-ol:!text-black prose-ol:!my-6
  prose-li:!text-black prose-li:!mb-2
  prose-blockquote:!border-[#e76f51] prose-blockquote:!text-gray-600 prose-blockquote:!italic prose-blockquote:!pl-6 prose-blockquote:!py-2
  prose-img:!rounded-xl prose-img:!shadow-md prose-img:!my-8
  prose-hr:!my-12 prose-hr:!border-gray-200
  prose-code:!text-black prose-code:!bg-gray-100 prose-code:!px-2 prose-code:!py-1 prose-code:!rounded
  prose-pre:!bg-gray-900 prose-pre:!text-gray-100 prose-pre:!p-6 prose-pre:!rounded-xl
  prose-table:!w-full prose-table:!my-8
  prose-th:!bg-gray-100 prose-th:!text-black prose-th:!p-4 prose-th:!text-left
  prose-td:!p-4 prose-td:!border-t prose-td:!border-gray-200 prose-td:!text-black
">
  <div dangerouslySetInnerHTML={{ __html: post.content || "<p>Contenu de l'article non disponible.</p>" }} />
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
                className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Voir tous les articles
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#e76f51] text-white px-6 py-3 rounded-full hover:bg-[#d45a3a] transition-colors font-medium"
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
