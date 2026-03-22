import { useMemo } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useStudent } from "../../../Context/StudentContext";
import { scheduleData } from "../../../data/scheduleData";
import { attendanceData, noticeBoard } from "../../../data/studentData";

const Dashboard = () => {
  const { student, pendingAssignments } = useStudent();
  const today = format(new Date(), "EEEE");

  const currentDayClasses = useMemo(() => {
    const todaySchedule = scheduleData.find(
      (day) => day.day === today
    );
    return todaySchedule ? todaySchedule.classes : [];
  }, [today]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-6">
            <img
              src={student.photo}
              alt={student.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-accent-gold"
            />
            <div>
              <p className="text-primary-200 text-sm">{getGreeting()}</p>
              <h2 className="text-2xl font-serif font-bold">{student.name}</h2>
              <p className="text-primary-200 mt-1">
                {student.class} | Section {student.section} | Roll: {student.roll_no}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-bold text-lg text-primary-900">Quick Stats</h3>
            <span className="text-xs px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full font-medium">
              This Month
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-100 rounded-lg">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-slate-600">Attendance</span>
              </div>
              <span className="font-bold text-accent-600">{attendanceData.percentage}%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-slate-600">Pending Tasks</span>
              </div>
              <span className="font-bold text-secondary-600">{pendingAssignments.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-lg text-primary-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Today&apos;s Classes
            </h3>
            <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
              {today}
            </span>
          </div>
          {currentDayClasses.length > 0 ? (
            <div className="space-y-3">
              {currentDayClasses.map((classItem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-16 text-xs font-medium text-slate-500">{classItem.time}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{classItem.subject}</p>
                    <p className="text-xs text-slate-500">{classItem.teacher}</p>
                  </div>
                  <div className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded">
                    Room {classItem.room}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <p>No classes scheduled for today</p>
            </div>
          )}
          <Link
            to="/portal/student/schedule"
            className="mt-4 block text-center text-sm text-primary-700 hover:text-accent-gold font-medium transition-colors"
          >
            View Full Schedule →
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-lg text-primary-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Pending Assignments
            </h3>
            {pendingAssignments.length > 0 && (
              <span className="text-xs px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full font-medium">
                {pendingAssignments.length} pending
              </span>
            )}
          </div>
          {pendingAssignments.length > 0 ? (
            <div className="space-y-3">
              {pendingAssignments.slice(0, 4).map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="p-2 bg-secondary-100 rounded-lg">
                    <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 truncate">{assignment.title}</p>
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
              <svg className="w-12 h-12 mx-auto mb-3 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            Notice Board
          </h3>
          <div className="space-y-3">
            {noticeBoard.map((notice) => (
              <div
                key={notice.id}
                className="p-3 bg-slate-50 rounded-lg border-l-4 border-primary-500"
              >
                <p className="font-medium text-slate-800 text-sm">{notice.title}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {format(new Date(notice.date), "MMM d, yyyy")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            My Profile
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 text-sm">Student ID</span>
              <span className="font-medium text-slate-800 text-sm">{student.id}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 text-sm">Class</span>
              <span className="font-medium text-slate-800 text-sm">{student.class}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500 text-sm">Section</span>
              <span className="font-medium text-slate-800 text-sm">{student.section}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-500 text-sm">Blood Group</span>
              <span className="font-medium text-slate-800 text-sm">{student.bloodGroup}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-calm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Attendance
          </h3>
          <div className="flex items-center justify-center gap-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">{attendanceData.present}</div>
              <div className="text-xs text-slate-500 mt-1">Present</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">{attendanceData.absent}</div>
              <div className="text-xs text-slate-500 mt-1">Absent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{attendanceData.late}</div>
              <div className="text-xs text-slate-500 mt-1">Late</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Attendance Rate</span>
              <span className="font-medium">{attendanceData.percentage}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-accent-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${attendanceData.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
