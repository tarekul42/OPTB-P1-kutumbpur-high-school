import React from "react";
import { Hero, Card, Button, SectionHeader, ListItem } from "@/shared/ui";

interface AlumniStory {
  name: string;
  year: string;
  role: string;
  story: string;
  image: string;
}

const alumniSectionAlumniStories: AlumniStory[] = [
  {
    name: "Dr. Karim Rahman",
    year: "Class of 2015",
    role: "Medical Doctor, Dhaka Medical College",
    story: "The foundation I received at Kutumbpur High School shaped my career in medicine. The dedicated teachers and challenging curriculum prepared me well for university.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=300&fit=crop",
  },
  {
    name: "Fatima Begum",
    year: "Class of 2018",
    role: "Software Engineer, Tech Corp Bangladesh",
    story: "My journey in technology started in the computer lab at Kutumbpur. The school's focus on digital literacy gave me a head start in my engineering career.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
  },
  {
    name: "Ahmed Hassan",
    year: "Class of 2012",
    role: "Civil Servant, Bangladesh Civil Service",
    story: "The values of discipline and hard work instilled at this school have been instrumental in my journey to becoming a civil servant serving the nation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop",
  },
];

const AlumniSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Hero
        accentColor="teal-600"
        title="Alumni Network"
        description="Stay connected with your alma mater and fellow alumni. Share your success stories and inspire the next generation."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <SectionHeader title="Alumni Success Stories" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniSectionAlumniStories.map((story, index) => (
              <Card
                key={index}
                hoverable
                className="overflow-hidden shadow-lg border border-slate-100"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-2">
                    {story.year}
                  </p>
                  <p className="text-gray-600 mb-4 font-medium">{story.role}</p>
                  <p className="text-gray-600 italic leading-relaxed">"{story.story}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-12 mb-16 border border-teal-100 bg-teal-50/30" shadow="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Join Our Alumni Network
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Connect with fellow alumni, share your experiences, and stay
              updated with school events and opportunities.
            </p>
            <Button size="lg" className="px-10 bg-teal-600 hover:bg-teal-700">
              Register as Alumni
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {[
                { title: "Annual Alumni Meet", date: "December 15, 2024", location: "School Auditorium" },
                { title: "Career Fair", date: "January 20, 2025", location: "Main Campus" }
              ].map((event, idx) => (
                <div key={idx} className="border-l-4 border-teal-500 pl-6 py-2 bg-teal-50/20 rounded-r-lg">
                  <h4 className="font-bold text-gray-900 text-lg">{event.title}</h4>
                  <p className="text-gray-600 font-medium">{event.date}</p>
                  <p className="text-gray-500">{event.location}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Alumni Benefits
            </h3>
            <ul className="space-y-4">
              {[
                "Access to school facilities and resources",
                "Networking opportunities with fellow alumni",
                "Career development workshops",
                "Mentorship opportunities"
              ].map((benefit, idx) => (
                <ListItem 
                  key={idx} 
                  iconClassName="text-teal-600"
                >
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </ListItem>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlumniSection;
