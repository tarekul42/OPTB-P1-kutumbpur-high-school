import React from "react";
import {
  updatesAnnouncements,
  updatesNewsItems,
} from "@/shared/data/homeData";
import { Hero, SectionHeader, UpdateCard, Card } from "@/shared/ui";

const Updates = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Latest Updates"
        description="Stay informed about the latest news, events, and announcements from Kutumbpur High School."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHeader title="Latest News" align="left" className="mb-8" />
            <div className="space-y-6">
              {updatesNewsItems.map((item, index) => (
                <UpdateCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  category={item.category}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Announcements" align="left" className="mb-8" />
            <div className="space-y-6">
              {updatesAnnouncements.map((announcement, index) => (
                <UpdateCard
                  key={index}
                  title={announcement.title}
                  description={announcement.content}
                  icon={announcement.icon}
                />
              ))}
            </div>

            <Card className="mt-8 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-4">
                {[
                  {
                    href: "#",
                    label: "Academic Calendar",
                    icon: (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    href: "#",
                    label: "Event Schedule",
                    icon: (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    href: "#",
                    label: "Newsletter Archive",
                    icon: (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    ),
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center text-accent-gold hover:text-primary-900 transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
