import React from "react";
import { useNavigate } from "react-router-dom";
import { studentPortalFeatures } from "@/shared/data/portalData";
import { Hero, Card, Button, ListItem } from "@/shared/ui";

const StudentPortal: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/portal/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-surface">
      <Hero
        title="Student Portal"
        description="Official digital gateway for Kutumbpur High School students (Class 6-10) to access academic materials, results (SSC), and schedules."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Enter Student Portal
            </h2>
            <p className="text-slate-600 mb-6">
              For demonstration purposes, click the button below to enter the
              student dashboard.
            </p>
            <Button
              onClick={handleLogin}
              variant="primary"
              size="lg"
              className="w-full uppercase tracking-widest"
            >
              Enter Portal (Demo)
            </Button>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Portal Features
              </h2>
              <ul className="space-y-6">
                {studentPortalFeatures.map((feature, index) => (
                  <ListItem 
                    key={index} 
                    icon={feature.icon}
                    iconClassName="text-accent-gold"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </Card>

            <Card className="bg-linear-to-r from-primary-900 to-primary-800 p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                {[
                  { label: "Dashboard", path: "/portal/student/dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { label: "Class Schedule", path: "/portal/student/schedule", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                  { label: "Assignments", path: "/portal/student/assignments", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                  { label: "Results", path: "/portal/student/results", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(link.path)}
                    className="flex items-center w-full text-left text-slate-100 hover:text-white transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                    </svg>
                    {link.label}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
