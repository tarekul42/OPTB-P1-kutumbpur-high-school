export interface Program {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  color?: string;
  features?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export interface FeatureWithIcon {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  title?: string;
  content: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface OfficeHours {
  day: string;
  hours: string;
}

export interface StatItem {
  number?: string;
  value?: string;
  label: string;
  suffix?: string;
}

export interface AboutStatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface HomeTestimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  content?: string;
  excerpt?: string;
}

export interface UpdatesItem {
  title: string;
  date?: string;
  category?: string;
  description?: string;
  content?: string;
  icon?: React.ReactNode;
}

export interface Announcements {
  title: string;
  content?: string;
  icon: React.ReactNode;
}

export interface Events {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  category: string;
}

export interface PastEvents {
  title: string;
  date: string;
  description?: string;
  category: string;
}

export interface StudyMaterials {
  title: string;
  description: string;
  resources?: string[];
  icon: React.ReactNode;
}

export interface DigitalResources {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LibraryCollection {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

export interface Extracurricular {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AdmissionStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RequiredDocuments {
  title?: string;
  items?: string[];
}

export interface Alumni {
  name: string;
  graduationYear: string;
  currentPosition: string;
  company: string;
  image: string;
  quote?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AboutFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}