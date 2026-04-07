import React from "react";
import { homeFeatures } from "@/shared/data/homeData";
import { SectionHeader, Card } from "@/shared/ui";

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          description="Discover what makes our school the perfect place for your child's education"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeFeatures.map((feature, index) => (
            <Card
              key={index}
              hoverable
              className="p-8 group border-slate-200"
            >
              <div className="text-accent-gold mb-6 transform group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 group-hover:text-accent-gold transition duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
