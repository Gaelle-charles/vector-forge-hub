import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

const blogPosts = {
  1: {
    id: 1,
    title: "L'avenir du développement web avec l'IA",
    excerpt: "Comment l'intelligence artificielle transforme la façon dont nous créons des applications web modernes.",
    author: "Gogogo Studio",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Technologie",
    image: "/src/assets/ai-brain.jpg",
    content: `
      <p>L'intelligence artificielle révolutionne le développement web d'une manière que nous n'aurions jamais imaginée il y a quelques années. Cette transformation ne se limite pas à l'automatisation de tâches répétitives, mais s'étend à la création de nouvelles expériences utilisateur et à l'optimisation des processus de développement.</p>

      <h2>Les outils d'IA pour les développeurs</h2>
      <p>Les assistants de code comme GitHub Copilot et ChatGPT ont déjà commencé à changer la façon dont nous écrivons du code. Ces outils permettent aux développeurs de :</p>
      <ul>
        <li>Générer du code plus rapidement</li>
        <li>Résoudre des problèmes complexes</li>
        <li>Apprendre de nouvelles technologies</li>
        <li>Automatiser les tests et la documentation</li>
      </ul>

      <h2>L'impact sur l'expérience utilisateur</h2>
      <p>L'IA permet également de créer des interfaces plus intuitives et personnalisées. Les chatbots intelligents, les systèmes de recommandation et l'analyse prédictive améliorent considérablement l'engagement des utilisateurs.</p>

      <h2>Défis et opportunités</h2>
      <p>Bien que l'IA offre des possibilités extraordinaires, elle soulève aussi des questions importantes concernant la sécurité, la confidentialité et l'éthique. Il est crucial de développer des solutions responsables qui profitent à tous.</p>

      <p>Chez Gogogo Studio, nous intégrons ces technologies de pointe dans nos projets tout en maintenant notre engagement envers la qualité et l'innovation responsable.</p>
    `
  },
  2: {
    id: 2,
    title: "Design Systems : La clé d'une interface cohérente",
    excerpt: "Découvrez comment créer et maintenir un design system efficace pour vos projets.",
    author: "Gogogo Studio",
    date: "10 Mars 2024", 
    readTime: "7 min",
    category: "Design",
    image: "/src/assets/app-mockup.jpg",
    content: `
      <p>Un design system est bien plus qu'une simple bibliothèque de composants. C'est la fondation qui permet de créer des expériences utilisateur cohérentes et scalables à travers tous vos produits digitaux.</p>

      <h2>Qu'est-ce qu'un design system ?</h2>
      <p>Un design system est un ensemble de standards, de composants réutilisables et de guidelines qui permettent de construire des interfaces cohérentes. Il comprend :</p>
      <ul>
        <li>Une palette de couleurs définie</li>
        <li>Une typographie harmonieuse</li>
        <li>Des composants UI réutilisables</li>
        <li>Des règles d'espacement et de layout</li>
        <li>Des guidelines d'interaction</li>
      </ul>

      <h2>Les avantages d'un design system</h2>
      <p>Implementer un design system apporte de nombreux bénéfices :</p>
      <ul>
        <li>Cohérence visuelle à travers tous les produits</li>
        <li>Développement plus rapide</li>
        <li>Maintenance simplifiée</li>
        <li>Collaboration améliorée entre designers et développeurs</li>
        <li>Scalabilité facilitée</li>
      </ul>

      <h2>Comment créer votre design system</h2>
      <p>La création d'un design system efficace nécessite une approche méthodique. Commencez par auditer vos interfaces existantes, définissez vos principes de design, puis construisez progressivement votre bibliothèque de composants.</p>

      <p>N'oubliez pas que la documentation est cruciale pour l'adoption et la maintenance de votre design system.</p>
    `
  },
  3: {
    id: 3,
    title: "Performance Web : Optimisation avancée",
    excerpt: "Techniques et stratégies pour améliorer significativement les performances de votre site web.",
    author: "Gogogo Studio",
    date: "5 Mars 2024",
    readTime: "8 min", 
    category: "Performance",
    image: "/src/assets/tropical-arrangement.jpg",
    content: `
      <p>La performance web est devenue un facteur critique pour le succès d'un site internet. Une seconde de délai peut réduire les conversions de 7% et affecter significativement votre référencement naturel.</p>

      <h2>Les métriques clés à surveiller</h2>
      <p>Google a défini les Core Web Vitals comme standards de performance :</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> : Temps de chargement du plus gros élément</li>
        <li><strong>FID (First Input Delay)</strong> : Délai avant la première interaction</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> : Stabilité visuelle de la page</li>
      </ul>

      <h2>Techniques d'optimisation avancées</h2>
      <p>Voici quelques stratégies pour améliorer vos performances :</p>
      <ul>
        <li>Lazy loading des images et composants</li>
        <li>Code splitting et bundling optimisé</li>
        <li>Utilisation d'un CDN global</li>
        <li>Compression des assets (Gzip, Brotli)</li>
        <li>Optimisation des polices web</li>
        <li>Service Workers pour le cache</li>
      </ul>

      <h2>Optimisation des images</h2>
      <p>Les images représentent souvent la majorité du poids d'une page. Utilisez les formats modernes comme WebP ou AVIF, implémentez le responsive design avec srcset, et n'oubliez pas la compression.</p>

      <h2>Monitoring continu</h2>
      <p>La performance n'est pas un projet ponctuel mais un processus continu. Utilisez des outils comme Lighthouse, WebPageTest et des solutions de monitoring en temps réel pour maintenir vos performances au top niveau.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id) as keyof typeof blogPosts];

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
                post.category === 'Technologie' ? 'bg-neon-cyan/20 text-neon-cyan' :
                post.category === 'Design' ? 'bg-neon-pink/20 text-neon-pink' :
                'bg-neon-green/20 text-neon-green'
              }`}>
                {post.category}
              </span>
              <div className="flex items-center space-x-2 text-sm text-medium-gray">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
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
                  <span>{post.date}</span>
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
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-medium-gray prose-a:text-primary prose-strong:text-foreground prose-ul:text-medium-gray prose-li:text-medium-gray"
          dangerouslySetInnerHTML={{ __html: post.content }}
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