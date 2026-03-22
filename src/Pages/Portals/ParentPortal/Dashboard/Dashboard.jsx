import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useParent } from "../../../context/ParentContext";

const Dashboard = () => {
  const { selectedChild, childFees, noticeBoard } = useParent();
  const { attendance, results } = selectedChild;

  const getAverageResult = () => {
    if (!results || results.length === 0) return 0;
    const total = results.reduce((sum, r) => sum + r.firstTerm + r.secondTerm, 0);
    return (total / (results.length * 2)).toFixed(1);
  };

  const pendingFees = childFees.quarterly.filter((f) => f.status !== "Paid");
  const totalPendingAmount = pendingFees.reduce((sum, f) => sum + f.dueAmount, 0);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-secondary-800 to-secondary-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <img
            src={selectedChild.photo}
            alt={selectedChild.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-accent-gold"
          />
          <div className="flex-1">
            <p className="text-secondary-200 text-sm">Currently Viewing</p>
            <h2 className="text-2xl font-serif font-bold">{selectedChild.name}</h2>
            <p className="text-secondary-200 mt-1">
              {selectedChild.class} | Section {selectedChild.section} | Roll: {selectedChild.roll_no}
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm text-secondary-300">Student ID</p>
            <p className="font-medium">{selectedChild.studentId}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-100 rounded-lg">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{attendance.percentage}%</p>
              <p className="text-sm text-slate-500">Attendance</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-accent-500 h-2 rounded-full"
                style={{ width: `${attendance.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{getAverageResult()}%</p>
              <p className="text-sm text-slate-500">Average Score</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">৳{totalPendingAmount.toLocaleString()}</p>
              <p className="text-sm text-slate-500">Pending Fees</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{attendance.present}</p>
              <p className="text-sm text-slate-500">Days Present</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-lg text-secondary-900">Recent Results</h3>
            <Link
              to="/portal/parent/attendance"
              className="text-sm text-secondary-600 hover:text-accent-gold font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {results.slice(0, 4).map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="font-medium text-slate-800">{result.subject}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">1st: {result.firstTerm}</span>
                  <span className="text-sm text-slate-500">2nd: {result.secondTerm}</span>
                  <span className="font-bold text-secondary-700">
                    {((result.firstTerm + result.secondTerm) / 2).toFixed(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-lg text-secondary-900">Notice Board</h3>
          </div>
          <div className="space-y-4">
            {noticeBoard.map((notice) => (
              <div
                key={notice.id}
                className="p-4 bg-slate-50 rounded-lg border-l-4 border-secondary-500"
              >
                <p className="font-medium text-slate-800">{notice.title}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {format(new Date(notice.date), "MMM d, yyyy")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/portal/parent/attendance"
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="p-3 bg-accent-100 rounded-lg">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">View Attendance</p>
              <p className="text-sm text-slate-500">Check attendance calendar</p>
            </div>
          </Link>

          <Link
            to="/portal/parent/fees"
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="p-3 bg-amber-100 rounded-lg">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Pay Fees</p>
              <p className="text-sm text-slate-500">Download receipts</p>
            </div>
          </Link>

          <Link
            to="/portal/parent/messages"
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Contact Teachers</p>
              <p className="text-sm text-slate-500">Send messages</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
