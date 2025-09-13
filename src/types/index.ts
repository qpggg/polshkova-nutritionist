export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  text: string;
  rating: number;
  location?: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  age?: string;
  message: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
}
