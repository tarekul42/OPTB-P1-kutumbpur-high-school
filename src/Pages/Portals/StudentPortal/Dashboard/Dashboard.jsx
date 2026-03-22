import { useMemo } from "react";
import { format } from "date-fns";
import { useStudent } from "../../../Context/StudentContext";
import StudentHeader from "./components/StudentHeader";
import QuickStats from "./components/QuickStats";
import DailySchedule from "./components/DailySchedule";
import PendingAssignments from "./components/PendingAssignments";
import NoticeBoard from "./components/NoticeBoard";
import StudentProfile from "./components/StudentProfile";
import AttendanceChart from "./components/AttendanceChart";
import LoadingFallback from "../../../Components/LoadingFallback/LoadingFallback";

const Dashboard = () => {
  const {
    student,
    pendingAssignments,
    scheduleData,
    attendanceData,
    noticeBoard,
    isLoading,
    error,
  } = useStudent();
  const today = format(new Date(), "EEEE");

  const currentDayClasses = useMemo(() => {
    if (!scheduleData) return [];
    const todaySchedule = scheduleData.find((day) => day.day === today);
    return todaySchedule ? todaySchedule.classes : [];
  }, [today, scheduleData]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingFallback />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg max-w-md">
          <svg
            className="w-12 h-12 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!student) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StudentHeader student={student} greeting={getGreeting()} />
        <QuickStats
          attendancePercentage={attendanceData?.percentage || 0}
          pendingCount={pendingAssignments.length}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DailySchedule classes={currentDayClasses} day={today} />
        <PendingAssignments assignments={pendingAssignments} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <NoticeBoard notices={noticeBoard} />
        <StudentProfile student={student} />
        <AttendanceChart
          attendance={
            attendanceData || { present: 0, absent: 0, late: 0, percentage: 0 }
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
