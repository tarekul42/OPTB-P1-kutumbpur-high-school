import { aboutUsFeatures, aboutUsStats } from "@/shared/data/homeData";
import { Hero, SectionHeader, Card } from "@/shared/ui";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="About Kutumbpur High School"
        description="Nurturing minds, building futures, and creating leaders of tomorrow in Chandina since 1996."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutUsFeatures.map((feature, index) => (
            <Card
              key={index}
              hoverable
              className="p-8 border border-slate-200"
            >
              <div className="text-accent-gold mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-12 mb-16 border border-slate-200" shadow="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutUsStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center text-accent-gold mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600">
              To provide quality education that empowers students to become
              responsible global citizens, critical thinkers, and leaders who
              contribute positively to society in Chandina and beyond.
            </p>
          </Card>
          <Card className="p-8 border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600">
              To be a leading educational institution in Cumilla that nurtures
              academic excellence, character development, and innovation.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
