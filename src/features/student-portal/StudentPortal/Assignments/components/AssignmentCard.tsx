import { format, isPast, isToday, isTomorrow, addDays } from "date-fns";
import Badge from "@/shared/ui/UI/Badge";
import type { Assignment } from "@/shared/types/user";

interface AssignmentCardProps {
  assignment: Assignment;
  onUpload: (assignment: Assignment) => void;
}

const getDueDateStatus = (dueDate: string, status: string) => {
  if (status === "Submitted")
    return {
      text: "Submitted",
      color: "text-accent-600",
      bg: "bg-accent-100",
    };

  const date = new Date(dueDate);
  if (isPast(date) && !isToday(date)) {
    return { text: "Overdue", color: "text-red-600", bg: "bg-red-100" };
  }
  if (isToday(date)) {
    return { text: "Due Today", color: "text-amber-600", bg: "bg-amber-100" };
  }
  if (isTomorrow(date)) {
    return { text: "Due Tomorrow", color: "text-orange-600", bg: "bg-orange-100" };
  }
  if (addDays(new Date(), 3) >= date) {
    return { text: "Due Soon", color: "text-blue-600", bg: "bg-blue-100" };
  }
  return {
    text: format(date, "MMM d, yyyy"),
    color: "text-slate-600",
    bg: "bg-slate-100",
  };
};

const AssignmentCard = ({ assignment, onUpload }: AssignmentCardProps) => {
  const dueStatus = getDueDateStatus(assignment.dueDate, assignment.status);

  return (
    <div
      className={`p-5 rounded-xl border-2 transition-all ${
        assignment.status === "Submitted"
          ? "bg-accent-50 border-accent-200"
          : "bg-slate-50 border-transparent hover:border-slate-200"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Badge>{assignment.subject}</Badge>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${dueStatus.bg} ${dueStatus.color}`}
            >
              {dueStatus.text}
            </span>
          </div>
          <h3 className="font-bold text-lg text-slate-800">{assignment.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{assignment.description}</p>
          {assignment.status === "Submitted" && assignment.submittedDate && (
            <p className="text-xs text-accent-600 mt-2">
              Submitted on: {format(new Date(assignment.submittedDate), "MMMM d, yyyy")}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {assignment.status === "Pending" ? (
            <>
              <span className={`text-sm ${dueStatus.color}`}>
                Due: {format(new Date(assignment.dueDate), "MMM d, yyyy")}
              </span>
              <button
                onClick={() => onUpload(assignment)}
                className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-950 transition-colors font-medium text-sm flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                Upload
              </button>
            </>
          ) : (
            <span className="flex items-center gap-2 text-accent-600 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Completed
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
