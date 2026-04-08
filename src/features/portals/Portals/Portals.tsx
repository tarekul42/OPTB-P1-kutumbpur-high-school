import React from 'react';
import { SectionHeader, Card, Button } from '@/shared/ui';
import { Link } from 'react-router-dom';

const Portals: React.FC = () => {
  const portalItems = [
    {
      title: 'Student Portal',
      description: 'Manage assignments, view grades, and check your attendance record.',
      to: '/student-portal',
    },
    {
      title: 'Faculty Portal',
      description: 'Record grades, track attendance, and manage classroom resources.',
      to: '/faculty-portal',
    },
    {
      title: 'Parent Portal',
      description: "Monitor your child's progress, view fee statements, and communicate with teachers.",
      to: '/parent-portal',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="School Portals"
          description="Access specialized portals for students, faculty, and parents to manage academic life and stay connected with the school community."
          titleClassName="uppercase tracking-wider font-serif"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portalItems.map((portal, index) => (
            <Card key={index} className="p-8" shadow="xl">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">{portal.title}</h2>
              <p className="text-slate-600 mb-6">{portal.description}</p>
              <Link to={portal.to} className="w-full block">
                <Button className="w-full" size="lg">
                  Enter Portal
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portals;
