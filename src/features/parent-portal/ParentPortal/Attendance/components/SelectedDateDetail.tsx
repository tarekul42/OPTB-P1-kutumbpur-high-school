import { format } from "date-fns";
import type { AttendanceRecord } from "@/shared/types/user";

interface SelectedDateDetailProps {
  selectedDate: Date;
  records: AttendanceRecord[];
}

const statusStyles: Record<string, string> = {
  Present: "bg-accent-100 text-accent-700",
  Absent: "bg-red-100 text-red-700",
  Late: "bg-amber-100 text-amber-700",
  Leave: "bg-yellow-100 text-yellow-700",
};

const SelectedDateDetail = ({ selectedDate, records }: SelectedDateDetailProps) => {
  return (
    <div className="bg-slate-50 rounded-xl p-6">
      <h3 className="font-semibold text-slate-800 mb-4">Selected Date</h3>
      <p className="text-sm text-slate-500 mb-2">
        {format(selectedDate, "EEEE, MMMM d, yyyy")}
      </p>
      {records.length > 0 ? (
        <div className="space-y-2">
          {records.map((record, idx) => (
            <div
              key={idx}
              className={`px-3 py-2 rounded-lg text-sm font-medium ${statusStyles[record.status] ?? "bg-slate-100 text-slate-700"}`}
            >
              {record.status}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 text-sm">No record / Weekend</p>
      )}
    </div>
  );
};

export default SelectedDateDetail;
