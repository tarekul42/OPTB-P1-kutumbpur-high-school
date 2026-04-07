import React from "react";
import { Badge, Card } from "@/shared/ui";
import {
  CheckCircleIcon,
  ClipboardListIcon,
} from "@/shared/ui";

interface QuickStatsProps {
  attendancePercentage: number;
  pendingCount: number;
}

const QuickStats: React.FC<QuickStatsProps> = ({ attendancePercentage, pendingCount }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif font-bold text-lg text-primary-900">
          Quick Stats
        </h3>
        <Badge variant="gold">This Month</Badge>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent-100 rounded-lg">
              <CheckCircleIcon className="w-5 h-5 text-accent-600" />
            </div>
            <span className="text-slate-600 font-medium">Attendance</span>
          </div>
          <span className="font-bold text-accent-600 text-lg">
            {attendancePercentage}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary-100 rounded-lg">
              <ClipboardListIcon className="w-5 h-5 text-secondary-600" />
            </div>
            <span className="text-slate-600 font-medium">Pending Tasks</span>
          </div>
          <span className="font-bold text-secondary-600 text-lg">{pendingCount}</span>
        </div>
      </div>
    </Card>
  );
};

export default QuickStats;
