import React from 'react';
import { Hero, SectionHeader, Card, Button } from '@/shared/ui';
import { Link } from 'react-router-dom';

const EduAdventure: React.FC = () => {
  const sections = [
    {
      title: 'Academic Programs',
      description: 'Explore our comprehensive curriculum for Classes 6-10, designed to foster intellectual growth and excellence.',
      link: '/edu-adventure/academics',
      icon: '📚'
    },
    {
      title: 'Admissions',
      description: 'Join our vibrant academic community. Learn about our admission process, requirements, and key dates.',
      link: '/edu-adventure/admissions',
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero 
        title="Edu Adventure" 
        description="Embark on a journey of discovery and excellence at Kutumbpur High School."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Your Journey Starts Here" 
          description="Discover the academic paths and opportunities that await you at our institution."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <Card key={index} hoverable className="p-10 flex flex-col items-center text-center">
              <div className="text-6xl mb-6">{section.icon}</div>
              <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">{section.title}</h3>
              <p className="text-xl text-neutral-600 mb-8">{section.description}</p>
              <Link to={section.link} className="w-full">
                <Button variant="primary" size="lg" className="w-full">
                  Explore {section.title}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduAdventure;
