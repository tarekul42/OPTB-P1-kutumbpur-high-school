import React from "react";
import { Hero, SectionHeader, Card, Badge, Button } from "@/shared/ui";

interface SchoolEvent {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  category: string;
}

const upcomingEvents: SchoolEvent[] = [
  {
    title: "Annual Science Fair 2026",
    date: "March 25, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "School Auditorium",
    description: "Students showcase innovative science projects and experiments.",
    category: "Academic",
  },
  {
    title: "Sports Day",
    date: "March 28, 2026",
    time: "8:00 AM - 4:00 PM",
    location: "School Playground",
    description: "Annual sports competition with various athletic events.",
    category: "Sports",
  },
  {
    title: "Cultural Festival",
    date: "April 5, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "School Hall",
    description: "Celebrate our diverse culture through music, dance, and drama.",
    category: "Cultural",
  },
];

const pastEvents: SchoolEvent[] = [
  {
    title: "SSC Preparation Workshop",
    date: "February 15, 2026",
    description: "Intensive workshop for Class 10 students ahead of board exams.",
    category: "Academic",
  },
  {
    title: "Mother's Day Celebration",
    date: "March 8, 2026",
    description: "Heartfelt celebration honoring mothers and maternal figures.",
    category: "Cultural",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="School Events"
        description="Stay updated with our upcoming events and relive the memories of past celebrations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <SectionHeader title="Upcoming Events" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                hoverable
                className="overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="warning">{event.category}</Badge>
                    <span className="text-sm text-neutral-500">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    {event.time && (
                      <div className="flex items-center text-neutral-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-neutral-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-neutral-50 px-6 py-4">
                  <Button className="w-full">Register Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader title="Past Events" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral">{event.category}</Badge>
                  <span className="text-sm text-neutral-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-600">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <SectionHeader
            title="Stay Updated"
            description="Don't miss any events! Subscribe to our calendar and get notified about upcoming events."
          />
          <Button size="lg">
            View Full Calendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
