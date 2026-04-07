import { useParent } from "@/app/providers/ParentContext";
import ChildProfileCard from "./components/ChildProfileCard";
import DashboardStatsGrid from "./components/DashboardStatsGrid";
import RecentResultsCard from "./components/RecentResultsCard";
import NoticeBoardCard from "./components/NoticeBoardCard";
import QuickActionsCard from "./components/QuickActionsCard";

const Dashboard: React.FC = () => {
  const { selectedChild, childFees, noticeBoard } = useParent();
  const { attendance, results } = selectedChild;

  const averageScore = (() => {
    if (!results || results.length === 0) return "0";
    const total = results.reduce((sum, r) => sum + r.firstTerm + r.secondTerm, 0);
    return (total / (results.length * 2)).toFixed(1);
  })();

  const totalPendingAmount = childFees.quarterly
    .filter((f) => f.status !== "Paid")
    .reduce((sum, f) => sum + f.dueAmount, 0);

  const stats = [
    {
      label: "Attendance",
      value: `${attendance.percentage}%`,
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      iconBg: "bg-accent-100",
      iconColor: "text-accent-600",
      progress: attendance.percentage,
      progressColor: "bg-accent-500",
    },
    {
      label: "Average Score",
      value: `${averageScore}%`,
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      iconBg: "bg-secondary-100",
      iconColor: "text-secondary-600",
    },
    {
      label: "Pending Fees",
      value: `৳${totalPendingAmount.toLocaleString()}`,
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      label: "Days Present",
      value: attendance.present,
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      iconBg: "bg-primary-100",
      iconColor: "text-primary-600",
    },
  ];

  return (
    <div className="space-y-6">
      <ChildProfileCard
        name={selectedChild.name}
        photo={selectedChild.photo}
        className={selectedChild.class}
        section={selectedChild.section}
        rollNo={selectedChild.roll_no}
        studentId={selectedChild.studentId}
      />

      <DashboardStatsGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentResultsCard results={results} />
        <NoticeBoardCard notices={noticeBoard} />
      </div>

      <QuickActionsCard />
    </div>
  );
};

export default Dashboard;
