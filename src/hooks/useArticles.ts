import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  content?: string | null;
  author: string;
  date: string;
  read_time: number;
  category: string;
  image_url: string | null;
  slug: string;
  is_featured?: boolean;
}

export const useArticles = (limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let query = supabase
          .from('articles')
          .select('*')
          .order('date', { ascending: false });

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
          // Séparer l'article featured des autres
          const featured = data.find(article => article.is_featured);
          const regular = data.filter(article => !article.is_featured);

          setFeaturedArticle(featured || null);
          setArticles(regular);
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
      // Re-déclencher l'useEffect
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
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) {
          console.error('Error fetching article:', error);
          setError('Erreur lors du chargement de l\'article');
          return;
        }

        setArticle(data);
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