import React from "react";
import { extracurricularActivities } from "@/shared/data/academicData";
import { Hero, Card, Button, SectionHeader, ListItem } from "@/shared/ui";

const ExtracurricularActivities: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Hero
        accentColor="indigo-600"
        title="Extracurricular Activities"
        description="Discover and participate in various activities that help you grow beyond academics."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extracurricularActivities.map((activity, index) => (
            <Card
              key={index}
              hoverable
              className="p-8"
            >
              <div className="flex items-start">
                <div className="shrink-0 text-indigo-600">{activity.icon}</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-12 border border-indigo-100 bg-indigo-50/30" shadow="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Join Our Activities
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Take the first step towards discovering your talents and
              interests. Join our diverse range of extracurricular activities.
            </p>
            <Button size="lg" className="px-10 bg-indigo-600 hover:bg-indigo-700">
              Register Now
            </Button>
          </div>
        </Card>

        <div className="mt-16">
          <SectionHeader title="Activity Schedule" align="left" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sports", days: "Monday & Wednesday", time: "3:00 PM - 5:00 PM" },
              { title: "Arts & Culture", days: "Tuesday & Thursday", time: "3:00 PM - 5:00 PM" },
              { title: "Science Club", days: "Friday", time: "3:00 PM - 5:00 PM" },
              { title: "Debate Club", days: "Saturday", time: "10:00 AM - 12:00 PM" },
            ].map((schedule, idx) => (
              <Card key={idx} className="p-6 border border-gray-100" shadow="sm">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{schedule.title}</h3>
                <p className="text-gray-600 font-medium">{schedule.days}</p>
                <p className="text-slate-500 text-sm">{schedule.time}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
