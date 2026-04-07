import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Hero, Card, Button, InfoBanner } from '@/shared/ui';

/**
 * Curiosity Corner Hub.
 * A central landing page for all enrichment features (Library, Alumni, etc.).
 */
const CuriosityCorner: FC = () => {
  const categories = [
    {
      title: "Digital Library",
      description: "Access our collection of books, journals, and digital research materials.",
      link: "/library",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Alumni Network",
      description: "Connect with our former students and explore their success stories.",
      link: "/alumni",
      icon: (
        <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "emerald"
    },
    {
      title: "Extracurriculars",
      description: "Discover our clubs, sports teams, and cultural activity programs.",
      link: "/extracurricular",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "amber"
    },
    {
      title: "Educational Resources",
      description: "Downloadable forms, sample papers, and learning aids for all classes.",
      link: "/resources",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      color: "indigo"
    }
  ];

  return (
    <div className="pb-20 space-y-12 animate-fade-in">
      <Hero 
        title="Curiosity Corner"
        description="A dedicated space for discovery, learning, and staying connected with the Kutumbpur High School community."
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <InfoBanner type="info" title="Ongoing Development">
          We are currently digitizing our entire archive. Check back often for new resources and alumni profiles!
        </InfoBanner>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((category) => (
            <Card 
              key={category.title}
              className="p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${category.color}-50 dark:bg-${category.color}-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {category.description}
              </p>
              <NavLink to={category.link}>
                <Button variant="outline" className="w-full font-bold">
                  Explore {category.title.split(' ')[1] || 'More'}
                </Button>
              </NavLink>
            </Card>
          ))}
        </div>

        <section className="mt-20 p-12 bg-primary-900 rounded-[3rem] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Have something to share?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Are you an alumni with a story? Or a student with a project? We'd love to showcase your curiosity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button className="bg-accent-gold hover:bg-accent-gold/90 text-primary-950 border-none font-bold px-8">
                Submit Your Story
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold px-8">
                Join Our Club
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CuriosityCorner;
