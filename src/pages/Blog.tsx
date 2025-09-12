import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "L'avenir du développement web avec l'IA",
    excerpt: "Comment l'intelligence artificielle transforme la façon dont nous créons des applications web modernes.",
    author: "Gogogo Studio",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Technologie",
    image: "/src/assets/ai-brain.jpg"
  },
  {
    id: 2,
    title: "Design Systems : La clé d'une interface cohérente",
    excerpt: "Découvrez comment créer et maintenir un design system efficace pour vos projets.",
    author: "Gogogo Studio", 
    date: "10 Mars 2024",
    readTime: "7 min",
    category: "Design",
    image: "/src/assets/app-mockup.jpg"
  },
  {
    id: 3,
    title: "Performance Web : Optimisation avancée",
    excerpt: "Techniques et stratégies pour améliorer significativement les performances de votre site web.",
    author: "Gogogo Studio",
    date: "5 Mars 2024", 
    readTime: "8 min",
    category: "Performance",
    image: "/src/assets/tropical-arrangement.jpg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Notre <span className="orange-text">Blog</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto mb-12">
            Découvrez nos derniers articles sur le développement web, le design et les technologies émergentes.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group modern-card hover:border-primary/20"
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-medium-gray">
                     <span className={`px-3 py-1 rounded-full font-medium ${
                       post.category === 'Technologie' ? 'bg-neon-cyan/20 text-neon-cyan' :
                       post.category === 'Design' ? 'bg-neon-pink/20 text-neon-pink' :
                       'bg-neon-green/20 text-neon-green'
                     }`}>
                       {post.category}
                     </span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
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
                        <span>{post.date}</span>
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

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Restez informé
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            Recevez nos derniers articles directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-2xl border border-border bg-background text-foreground placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="modern-button-primary whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;