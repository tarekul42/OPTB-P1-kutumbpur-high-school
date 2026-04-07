import React from "react";
import {
  admissionsRequiredDocuments,
  admissionSteps,
} from "@/shared/data/academicData";
import { Hero, SectionHeader, Card, Button } from "@/shared/ui";

const Admissions: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Admissions"
        description="Join the academic community of Kutumbpur High School. We are accepting applications for Classes 6 through 10 (SSC)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <SectionHeader title="Admission Process" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card
                key={index}
                hoverable
                className="p-8"
              >
                <div className="text-accent-gold mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Required Documents
            </h2>
            <ul className="space-y-4">
              {admissionsRequiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center text-neutral-600">
                  <svg
                    className="w-5 h-5 text-accent-gold mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Important Dates
            </h2>
            <div className="space-y-4">
              {[
                { label: "Application Period", date: "November 1 - December 15" },
                { label: "Admission Test", date: "December 20 - 25" },
                { label: "Results Declaration", date: "December 30" },
                { label: "New Academic Session", date: "January 1" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-neutral-600">{item.label}</span>
                  <span className="text-neutral-900 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <SectionHeader
            title="Ready to Join Us?"
            description="Start your journey with Kutumbpur High School today. Apply now and take the first step towards a bright future."
          />
          <Button size="lg">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
