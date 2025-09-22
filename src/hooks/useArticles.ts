import { useState, useEffect } from 'react';

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

const SUPABASE_URL = "https://zsvnqforlvunxzphatey.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzdm5xZm9ybHZ1bnh6cGhhdGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODAyNjAsImV4cCI6MjA3MzM1NjI2MH0.XQcMCR2E4Xk7k53NU2Q1RQiKyOT_2Ei2gRp126goOBw";

export const useArticles = (limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        
        let url = `${SUPABASE_URL}/rest/v1/articles?Statut=eq.Publié&order=date.desc`;
        if (limit) {
          url += `&limit=${limit}`;
        }

        const response = await fetch(url, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data: Article[] = await response.json();

        if (data && data.length > 0) {
          // L'article le plus récent devient l'article featured
          const mostRecent = data[0];
          const otherArticles = data.slice(1);

          setFeaturedArticle(mostRecent);
          setArticles(otherArticles);
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
        
        const url = `${SUPABASE_URL}/rest/v1/articles?slug=eq.${slug}&Statut=eq.Publié&limit=1`;
        
        const response = await fetch(url, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }

        const data: Article[] = await response.json();
        setArticle(data.length > 0 ? data[0] : null);
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