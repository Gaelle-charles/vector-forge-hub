import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Article = Database['public']['Tables']['articles']['Row'] & {
  Statut?: string;
};

export { type Article };

export const useArticles = (limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        
        // Construire la requête étape par étape
        let query = supabase
          .from('articles')
          .select('*')
          .order('date', { ascending: false });

        // Ajouter le filtre Statut en utilisant une assertion de type pour contourner le problème
        query = (query as any).eq('Statut', 'Publié');

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Error fetching articles:', error);
          setError('Erreur lors du chargement des articles');
          return;
        }

        if (data && data.length > 0) {
          // L'article le plus récent devient l'article featured
          const mostRecent = data[0] as Article;
          const otherArticles = data.slice(1) as Article[];

          setFeaturedArticle(mostRecent);
          setArticles(otherArticles);
        } else {
          setFeaturedArticle(null);
          setArticles([]);
        }
      } catch (err) {
        console.error('Error in fetchArticles:', err);
        setError('Erreur lors du chargement des articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [limit]);

  return {
    articles,
    featuredArticle,
    loading,
    error,
    refetch: () => {
      setLoading(true);
    }
  };
};

export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        
        let query = supabase
          .from('articles')
          .select('*')
          .eq('slug', slug);
        
        // Ajouter le filtre Statut
        query = (query as any).eq('Statut', 'Publié');

        const { data, error } = await query.maybeSingle();

        if (error) {
          console.error('Error fetching article:', error);
          setError('Erreur lors du chargement de l\'article');
          return;
        }

        setArticle(data as Article);
      } catch (err) {
        console.error('Error in fetchArticle:', err);
        setError('Erreur lors du chargement de l\'article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return {
    article,
    loading,
    error
  };
};