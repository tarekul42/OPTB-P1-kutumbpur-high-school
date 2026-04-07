import { format } from "date-fns";
import type { QuarterlyFee, MonthlyFee } from "@/shared/types/user";

type TabType = "quarterly" | "monthly";

const feeStatusStyles: Record<string, string> = {
  Paid: "bg-accent-100 text-accent-700",
  Overdue: "bg-red-100 text-red-700",
  Pending: "bg-amber-100 text-amber-700",
};

interface FeeTableProps {
  activeTab: TabType;
  quarterly: QuarterlyFee[];
  monthly: MonthlyFee[];
  onDownloadReceipt: (fee: QuarterlyFee | MonthlyFee) => void;
  onTabChange: (tab: TabType) => void;
}

const FeeTable = ({
  activeTab,
  quarterly,
  monthly,
  onDownloadReceipt,
  onTabChange,
}: FeeTableProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold text-secondary-900">Fee Records</h2>
        <div className="flex gap-2">
          {(["quarterly", "monthly"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer capitalize ${
                activeTab === tab
                  ? "bg-secondary-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        {activeTab === "quarterly" ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                {["Quarter", "Period", "Due Date", "Amount", "Status", "Action"].map((h, i) => (
                  <th
                    key={h}
                    className={`py-3 px-4 font-bold text-slate-700 ${i >= 3 ? (i === 3 ? "text-right" : "text-center") : "text-left"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {quarterly.map((fee) => (
                <tr key={fee.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4 font-medium text-slate-800">{fee.quarter}</td>
                  <td className="py-4 px-4 text-slate-600">{fee.months}</td>
                  <td className="py-4 px-4 text-slate-600">
                    {format(new Date(fee.dueDate), "MMM d, yyyy")}
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-slate-800">
                    ৳{fee.dueAmount.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${feeStatusStyles[fee.status] ?? "bg-slate-100 text-slate-700"}`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {fee.status === "Paid" ? (
                      <ReceiptButton onClick={() => onDownloadReceipt(fee)} />
                    ) : (
                      <span className="text-slate-400 text-sm">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                {["Month", "Due Date", "Amount", "Status", "Action"].map((h, i) => (
                  <th
                    key={h}
                    className={`py-3 px-4 font-bold text-slate-700 ${i === 2 ? "text-right" : i >= 3 ? "text-center" : "text-left"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {monthly.map((fee) => (
                <tr key={fee.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4 font-medium text-slate-800">{fee.monthName}</td>
                  <td className="py-4 px-4 text-slate-600">
                    {format(new Date(fee.dueDate), "MMM d, yyyy")}
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-slate-800">
                    ৳{fee.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${feeStatusStyles[fee.status] ?? "bg-slate-100 text-slate-700"}`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {fee.status === "Paid" ? (
                      <ReceiptButton onClick={() => onDownloadReceipt(fee)} />
                    ) : (
                      <button className="px-3 py-1.5 bg-accent-gold text-secondary-900 rounded-lg hover:bg-amber-400 transition-colors text-sm font-medium cursor-pointer">
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const ReceiptButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm cursor-pointer"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    Receipt
  </button>
);

export default FeeTable;
