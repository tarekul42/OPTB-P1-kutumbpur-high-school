import { Link } from "react-router-dom";
import { format } from "date-fns";
import Badge from "@/shared/ui/UI/Badge";
import {
  ClipboardListIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@/shared/ui/Icons";
import { Assignment } from "@/shared/types/user";

interface PendingAssignmentsProps {
  assignments: Assignment[];
}

const PendingAssignments: React.FC<PendingAssignmentsProps> = ({ assignments }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif font-bold text-lg text-primary-900 flex items-center gap-2">
          <ClipboardListIcon className="w-5 h-5 text-secondary-600" />
          Pending Assignments
        </h3>
        {assignments.length > 0 && (
          <Badge variant="secondary">{assignments.length} pending</Badge>
        )}
      </div>
      {assignments.length > 0 ? (
        <div className="space-y-3">
          {assignments.slice(0, 4).map((assignment) => (
            <div
              key={assignment.id}
              className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="p-2 bg-secondary-100 rounded-lg">
                <DocumentTextIcon className="w-4 h-4 text-secondary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 truncate">
                  {assignment.title}
                </p>
                <p className="text-xs text-slate-500">{assignment.subject}</p>
              </div>
              <div className="text-xs text-secondary-600 font-medium whitespace-nowrap">
                Due: {format(new Date(assignment.dueDate), "MMM d")}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500">
          <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-accent-300" />
          <p>All assignments completed!</p>
        </div>
      )}
      <Link
        to="/portal/student/assignments"
        className="mt-4 block text-center text-sm text-primary-700 hover:text-accent-gold font-medium transition-colors"
      >
        View All Assignments →
      </Link>
    </div>
  );
};

export default PendingAssignments;
