import React from "react";
import { useNavigate } from "react-router-dom";
import { parentalPortalFeatures } from "@/shared/data/portalData";
import { Hero, Card, Button, ListItem } from "@/shared/ui";

const ParentPortal: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/portal/parent/dashboard");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-surface">
      <Hero
        accentColor="secondary-800"
        title="Parent Portal"
        description="Monitor your child's academic journey at Kutumbpur High School. Track attendance, view results, and communicate with teachers."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Access Parent Portal
            </h2>
            <p className="text-slate-600 mb-6">
              For demonstration purposes, click the button below to enter the
              parent dashboard.
            </p>
            <Button
              onClick={handleLogin}
              variant="primary"
              size="lg"
              className="w-full bg-secondary-800 hover:bg-secondary-900 uppercase tracking-widest"
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
                {parentalPortalFeatures.map((feature, index) => (
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

            <Card className="bg-linear-to-r from-secondary-800 to-secondary-700 p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                {[
                  { label: "Dashboard", path: "/portal/parent/dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { label: "Attendance", path: "/portal/parent/attendance", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                  { label: "Fees & Payments", path: "/portal/parent/fees", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
                  { label: "Messages", path: "/portal/parent/messages", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }
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

export default ParentPortal;
