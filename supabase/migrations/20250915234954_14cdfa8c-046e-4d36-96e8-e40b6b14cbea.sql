-- Create articles table for blog posts
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  author TEXT NOT NULL DEFAULT 'Admin',
  date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  category TEXT NOT NULL DEFAULT 'General',
  read_time INTEGER NOT NULL DEFAULT 5,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (articles are public content)
CREATE POLICY "Articles are publicly readable" 
ON public.articles 
FOR SELECT 
USING (true);

-- Add index for better performance
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_featured ON public.articles(is_featured);
CREATE INDEX idx_articles_date ON public.articles(date DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.articles (title, slug, excerpt, content, author, category, read_time, image_url, is_featured) VALUES
('L''Intelligence Artificielle au Service de Votre Entreprise', 'ia-service-entreprise', 'Découvrez comment l''IA peut transformer vos processus métier et améliorer votre productivité de manière significative.', '<p>L''intelligence artificielle représente aujourd''hui l''une des plus grandes révolutions technologiques de notre époque...</p>', 'Sophie Martin', 'Innovation', 8, '/lovable-uploads/3a267165-a774-4ac0-a1ab-b489ef8f5bd0.png', true),
('Les Dernières Tendances en Développement Web', 'tendances-developpement-web', 'Restez à jour avec les technologies émergentes qui façonnent l''avenir du développement web moderne.', '<p>Le monde du développement web évolue à un rythme effréné...</p>', 'Alex Dubois', 'Développement', 6, '/src/assets/tech-devices.png', false),
('Optimisation SEO : Guide Complet 2024', 'optimisation-seo-guide-2024', 'Maîtrisez les techniques SEO modernes pour améliorer la visibilité de votre site web sur les moteurs de recherche.', '<p>Le référencement naturel reste un pilier fondamental...</p>', 'Marie Leroy', 'Marketing', 10, '/src/assets/tech-brain.png', false),
('Design UX/UI : Créer des Expériences Mémorables', 'design-ux-ui-experiences', 'Apprenez les principes fondamentaux pour concevoir des interfaces utilisateur intuitives et engageantes.', '<p>L''expérience utilisateur est au cœur de tout produit digital réussi...</p>', 'Thomas Bernard', 'Design', 7, '/src/assets/geometric-dashboard.png', false);