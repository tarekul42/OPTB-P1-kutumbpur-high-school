import { useState } from "react";
import { format } from "date-fns";
import { useParent } from "../../../context/ParentContext";
import { generateReceiptPDF } from "../../../utils/receiptGenerator";

const Fees = () => {
  const { selectedChild, parent, childFees } = useParent();
  const [activeTab, setActiveTab] = useState("quarterly");

  const { quarterly, monthly, summary } = childFees;

  const handleDownloadReceipt = (fee) => {
    generateReceiptPDF(fee, selectedChild, parent);
  };

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-secondary-800 to-secondary-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={selectedChild.photo}
              alt={selectedChild.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-accent-gold"
            />
            <div>
              <p className="text-secondary-200 text-sm">Fee Summary for</p>
              <h2 className="text-xl font-serif font-bold">
                {selectedChild.name}
              </h2>
              <p className="text-secondary-200 text-sm">
                {selectedChild.class} | {selectedChild.studentId}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-100 rounded-lg">
              <svg
                className="w-6 h-6 text-accent-600"
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
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                ৳{summary.paid.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">Total Paid</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                ৳{summary.pending.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">Pending Amount</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                ৳{summary.totalAnnual.toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">Annual Total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-secondary-900">
            Fee Records
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("quarterly")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeTab === "quarterly"
                  ? "bg-secondary-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeTab === "monthly"
                  ? "bg-secondary-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {activeTab === "quarterly" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Quarter
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Period
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Due Date
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-slate-700">
                    Amount
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-slate-700">
                    Status
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-slate-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {quarterly.map((fee) => (
                  <tr
                    key={fee.id}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-4 px-4 font-medium text-slate-800">
                      {fee.quarter}
                    </td>
                    <td className="py-4 px-4 text-slate-600">{fee.months}</td>
                    <td className="py-4 px-4 text-slate-600">
                      {format(new Date(fee.dueDate), "MMM d, yyyy")}
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-slate-800">
                      ৳{fee.dueAmount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          fee.status === "Paid"
                            ? "bg-accent-100 text-accent-700"
                            : fee.status === "Overdue"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {fee.status === "Paid" && (
                        <button
                          onClick={() => handleDownloadReceipt(fee)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Receipt
                        </button>
                      )}
                      {fee.status !== "Paid" && (
                        <span className="text-slate-400 text-sm">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "monthly" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Month
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Due Date
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-slate-700">
                    Amount
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-slate-700">
                    Status
                  </th>
                  <th className="text-center py-3 px-4 font-bold text-slate-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthly.map((fee) => (
                  <tr
                    key={fee.id}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-4 px-4 font-medium text-slate-800">
                      {fee.monthName}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {format(new Date(fee.dueDate), "MMM d, yyyy")}
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-slate-800">
                      ৳{fee.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          fee.status === "Paid"
                            ? "bg-accent-100 text-accent-700"
                            : fee.status === "Overdue"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {fee.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {fee.status === "Paid" && (
                        <button
                          onClick={() => handleDownloadReceipt(fee)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Receipt
                        </button>
                      )}
                      {fee.status !== "Paid" && (
                        <button className="px-3 py-1.5 bg-accent-gold text-secondary-900 rounded-lg hover:bg-amber-400 transition-colors text-sm font-medium">
                          Pay Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-900">Fee Payment Information</h4>
            <p className="text-sm text-blue-700 mt-1">
              Quarterly fees are due by the 15th of the first month of each
              quarter. A late fee of ৳100 will be applicable for payments made
              after the due date. Please contact the school office for any
              fee-related queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
