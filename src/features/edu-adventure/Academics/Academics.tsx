import React from "react";
import { academicPrograms } from "../../../shared/data/academicData";
import { Hero, SectionHeader, Card, ListItem } from "@/shared/ui";

const Academics: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Academic Programs"
        description="A commitment to excellence in Chandina. Specializing in Class 6-10 Secondary education with a focus on SSC board achievement."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {academicPrograms.map((program, index) => (
            <Card
              key={index}
              hoverable
              className="p-8 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-accent-gold/20 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                {program.title}
              </h3>
              <p className="text-neutral-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features?.map((feature, idx) => (
                  <ListItem key={idx}>
                    {feature}
                  </ListItem>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-10">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-accent-gold mr-4 rounded-full"></span>
              Academic Excellence
            </h2>
            <p className="text-neutral-600 mb-4">
              Our commitment to academic excellence is reflected in our
              comprehensive curriculum, experienced faculty, and
              state-of-the-art facilities. We focus on:
            </p>
            <ul className="space-y-2">
              {[
                "Individual attention and personalized learning",
                "Regular assessments and progress tracking",
                "Integration of technology in education",
              ].map((item, idx) => (
                <ListItem key={idx} icon={(
                  <svg className="w-5 h-5 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}>
                  {item}
                </ListItem>
              ))}
            </ul>
          </Card>

          <Card className="p-10">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-accent-gold mr-4 rounded-full"></span>
              Support Services
            </h2>
            <p className="text-neutral-600 mb-4">
              We provide comprehensive support services to ensure every student
              reaches their full potential:
            </p>
            <ul className="space-y-2">
              {[
                "Academic counseling and guidance",
                "Special education support",
                "Career counseling and college preparation",
              ].map((item, idx) => (
                <ListItem key={idx} icon={(
                  <svg className="w-5 h-5 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}>
                  {item}
                </ListItem>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;
