
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  author TEXT NOT NULL DEFAULT 'Gogogo Studio',
  date TIMESTAMPTZ NOT NULL DEFAULT now(),
  read_time INTEGER NOT NULL DEFAULT 5,
  category TEXT NOT NULL DEFAULT 'Innovation',
  image_url TEXT,
  slug TEXT NOT NULL UNIQUE,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.articles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.articles TO authenticated;
GRANT ALL ON public.articles TO service_role;

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Articles are viewable by everyone"
  ON public.articles FOR SELECT
  USING (true);
