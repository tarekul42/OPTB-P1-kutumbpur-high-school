import { format } from "date-fns";
import type { AttendanceRecord } from "@/shared/types/user";

interface RecentAbsencesTableProps {
  absences: AttendanceRecord[];
}

const RecentAbsencesTable = ({ absences }: RecentAbsencesTableProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">
        Recent Absences &amp; Leaves
      </h3>
      {absences.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-bold text-slate-700">Date</th>
                <th className="text-left py-3 px-4 font-bold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {absences.map((record, idx) => (
                <tr key={idx} className="border-b border-slate-100">
                  <td className="py-3 px-4 text-slate-600">
                    {format(new Date(record.date), "MMMM d, yyyy")}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        record.status === "Absent"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-slate-400 text-center py-8">No recent absences</p>
      )}
    </div>
  );
};

export default RecentAbsencesTable;
