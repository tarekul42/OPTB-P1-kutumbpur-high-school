import { useState } from "react";
import { useParent } from "@/app/providers/ParentContext";
import { generateReceiptPDF } from "@/shared/lib/receiptGenerator";
import type { QuarterlyFee, MonthlyFee } from "@/shared/types/user";
import FeesSummaryBanner from "./components/FeesSummaryBanner";
import FeesStatCards from "./components/FeesStatCards";
import FeeTable from "./components/FeeTable";

type TabType = "quarterly" | "monthly";

const FEE_INFO_TEXT =
  "Quarterly fees are due by the 15th of the first month of each quarter. A late fee of ৳100 will be applicable for payments made after the due date. Please contact the school office for any fee-related queries.";

const Fees: React.FC = () => {
  const { selectedChild, parent, childFees } = useParent();
  const [activeTab, setActiveTab] = useState<TabType>("quarterly");

  const { quarterly, monthly, summary } = childFees;

  const handleDownloadReceipt = (fee: QuarterlyFee | MonthlyFee) => {
    generateReceiptPDF(fee as QuarterlyFee, selectedChild as any, parent);
  };

  return (
    <div className="space-y-6">
      <FeesSummaryBanner
        name={selectedChild.name}
        photo={selectedChild.photo}
        className={selectedChild.class}
        studentId={selectedChild.studentId}
      />

      <FeesStatCards
        paid={summary.paid}
        pending={summary.pending}
        totalAnnual={summary.totalAnnual}
      />

      <FeeTable
        activeTab={activeTab}
        quarterly={quarterly}
        monthly={monthly}
        onDownloadReceipt={handleDownloadReceipt}
        onTabChange={setActiveTab}
      />

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-sm text-blue-700 mt-1">{FEE_INFO_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
