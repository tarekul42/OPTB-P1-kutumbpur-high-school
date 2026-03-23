export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  content?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote?: string;
  content?: string;
}

export interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

export interface Program {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  color?: string;
  features?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MenuItem {
  label: string;
  link: string;
}

export interface MenuConfig {
  title: string;
  key: string;
  items: MenuItem[];
}

export interface SearchResult {
  id?: number;
  title: string;
  description?: string;
  category?: string;
  type: string;
  path: string;
  author?: string;
}
