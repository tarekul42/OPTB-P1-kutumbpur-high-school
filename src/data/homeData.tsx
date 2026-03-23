import { Feature, FeatureItem, NewsItem, Program, Stat, Testimonial } from '../types/common';

export const homeFeatures: Feature[] = [
  {
    title: "Academic Excellence",
    description:
      "Comprehensive curriculum designed to nurture intellectual growth and critical thinking",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Holistic Development",
    description:
      "Focus on physical, emotional, and social growth through diverse activities",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Modern Facilities",
    description:
      "State-of-the-art infrastructure supporting innovative learning experiences",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export const homePrograms: Program[] = [
  {
    title: "Junior Secondary",
    description: "Building strong academic foundations for Classes 6 to 8.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Secondary (SSC)",
    description:
      "Intensive prep for Science, Humanities, and Commerce streams.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Digital Learning",
    description: "Modern computer labs and multi-media classroom facilities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0bb7c3f3dfad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export const homeStats: Stat[] = [
  { number: "1200", label: "Students", suffix: "+" },
  { number: "45", label: "Expert Teachers", suffix: "+" },
  { number: "1996", label: "Est. Year", suffix: "" },
  { number: "100", label: "SSC Pass Rate", suffix: "%" },
];

export const homeTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote:
      "The school's commitment to excellence and personalized attention has helped my child thrive academically and personally.",
  },
  {
    name: "Michael Chen",
    role: "Alumni",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote:
      "The foundation I received here has been instrumental in my professional success. The teachers truly care about student development.",
  },
  {
    name: "Fatima Rahman",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote:
      "My daughter has grown so much since joining this school. The extracurricular activities have helped her discover her hidden talents.",
  },
  {
    name: "Ahmed Hassan",
    role: "Alumni",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    quote:
      "The values and education I received here shaped my career. I'm proud to be an alumnus of Kutumbpur High School.",
  },
];

export const homeNews: NewsItem[] = [
  {
    id: 1,
    title: "Annual Science Fair 2024",
    date: "March 15, 2024",
    category: "Academic",
    tag: "Academic",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description:
      "Students showcase innovative projects at our annual science fair, demonstrating creativity and scientific thinking.",
    content:
      "Our annual Science Fair brought together over 50 student projects spanning biology, chemistry, physics, and environmental science.",
  },
  {
    id: 2,
    title: "Sports Championship Victory",
    date: "March 10, 2024",
    category: "Sports",
    tag: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Our school team wins the regional sports championship.",
    content:
      "Congratulations to our athletics team for winning the Regional Sports Championship!",
  },
  {
    id: 3,
    title: "New Library Inauguration",
    date: "March 5, 2024",
    category: "Events",
    tag: "Events",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "State-of-the-art library with 10,000+ books now open.",
    content:
      "We are thrilled to inaugurate our newly renovated library featuring over 10,000 books, digital resources, and a dedicated study area.",
  },
  {
    id: 4,
    title: "Teacher Training Workshop",
    date: "February 28, 2024",
    category: "Academic",
    tag: "Academic",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Professional development program for all faculty members.",
    content:
      "Our annual teacher training workshop focused on innovative teaching methodologies.",
  },
  {
    id: 5,
    title: "Cultural Festival 2024",
    date: "February 20, 2024",
    category: "Events",
    tag: "Events",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Celebrating diversity through music, dance, and art.",
    content:
      "Our Cultural Festival brought the community together to celebrate the diverse talents of our students.",
  },
];

export const newsCategories = ["All", "Academic", "Sports", "Events"];

export const aboutUsFeatures: FeatureItem[] = [
  {
    title: "Quality Education",
    description: "Comprehensive curriculum aligned with national standards with focus on holistic development",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  {
    title: "Experienced Faculty",
    description: "Dedicated and qualified teachers committed to student success and well-being",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  {
    title: "Modern Infrastructure",
    description: "Well-equipped classrooms, labs, library, and sports facilities for complete development",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
];

export const aboutUsStats = [
  { value: "28+", label: "Years of Excellence", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  { value: "1200+", label: "Students Enrolled", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
  { value: "45+", label: "Qualified Teachers", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
];

export interface UpdatesNewsItem {
  icon: React.ReactNode;
  category: string;
  date: string;
  title: string;
  description: string;
}

export interface UpdatesAnnouncement {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const updatesNewsItems: UpdatesNewsItem[] = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    category: "Academic",
    date: "March 15, 2024",
    title: "Annual Science Fair 2024",
    description: "Students showcase innovative projects at our annual science fair.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    category: "Events",
    date: "March 10, 2024",
    title: "Sports Championship Victory",
    description: "Our school team wins the regional sports championship.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    category: "Academic",
    date: "March 5, 2024",
    title: "New Library Inauguration",
    description: "State-of-the-art library with 10,000+ books now open.",
  },
];

export const updatesAnnouncements: UpdatesAnnouncement[] = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
    title: "Holiday Notice",
    content: "School will remain closed from March 20-25 for annual examinations.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Fee Submission Deadline",
    content: "Last date for quarterly fee submission is March 31, 2024.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Exam Schedule Released",
    content: "SSC examination routine is now available on the notice board.",
  },
];
