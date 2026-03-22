import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { academicResults } from "../../../data/studentData";
import { useStudent } from "../../../context/StudentContext";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
        <p className="font-bold text-slate-800">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Results = () => {
  const { student } = useStudent();

  const combinedMarks = useMemo(() => {
    return academicResults.map((result) => ({
      subject: result.subject.split(" ")[0],
      "First Term": result.firstTerm,
      "Second Term": result.secondTerm,
      total: result.total,
    }));
  }, []);

  const averageMarks = useMemo(() => {
    const total = academicResults.reduce((sum, r) => sum + r.total, 0);
    return (total / academicResults.length).toFixed(1);
  }, []);

  const gradeDistribution = useMemo(() => {
    return academicResults.map((result) => {
      let grade;
      if (result.total >= 180) grade = "A+";
      else if (result.total >= 160) grade = "A";
      else if (result.total >= 140) grade = "B";
      else if (result.total >= 120) grade = "C";
      else grade = "D";
      return { name: result.subject, grade, marks: result.total };
    });
  }, []);

  const gradeCount = gradeDistribution.reduce(
    (acc, item) => {
      acc[item.grade] = (acc[item.grade] || 0) + 1;
      return acc;
    },
    { "A+": 0, A: 0, B: 0, C: 0, D: 0 },
  );

  const pieData = [
    { name: "A+", value: gradeCount["A+"], color: "#059669" },
    { name: "A", value: gradeCount["A"], color: "#10b981" },
    { name: "B", value: gradeCount["B"], color: "#fbbf24" },
    { name: "C", value: gradeCount["C"], color: "#f97316" },
    { name: "D", value: gradeCount["D"], color: "#ef4444" },
  ].filter((item) => item.value > 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-linear-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white shadow-lg md:col-span-2">
          <div className="flex items-center gap-4">
            <img
              src={student.photo}
              alt={student.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-accent-gold"
            />
            <div>
              <p className="text-primary-200 text-sm">Academic Performance</p>
              <h2 className="text-xl font-serif font-bold">{student.name}</h2>
              <p className="text-primary-200 text-sm">
                {student.class} | Session 2025-26
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {averageMarks}
              </p>
              <p className="text-sm text-slate-500">Average Total</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg
                className="w-6 h-6 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">A+</p>
              <p className="text-sm text-slate-500">Highest Grade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
            Term-wise Performance
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={combinedMarks}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="subject"
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="First Term"
                  fill="#102a43"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Second Term"
                  fill="#d4af37"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
            Total Marks by Subject
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={combinedMarks} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  domain={[0, 200]}
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis
                  dataKey="subject"
                  type="category"
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                  width={80}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="total" fill="#334e68" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
            Grade Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md lg:col-span-2">
          <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
            Subject-wise Progress Trend
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={combinedMarks}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="subject"
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis
                  domain={[60, 100]}
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="First Term"
                  stroke="#102a43"
                  strokeWidth={2}
                  dot={{ fill: "#102a43", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Second Term"
                  stroke="#d4af37"
                  strokeWidth={2}
                  dot={{ fill: "#d4af37", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
          Detailed Results
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-bold text-slate-700">
                  Subject
                </th>
                <th className="text-center py-3 px-4 font-bold text-slate-700">
                  First Term
                </th>
                <th className="text-center py-3 px-4 font-bold text-slate-700">
                  Second Term
                </th>
                <th className="text-center py-3 px-4 font-bold text-slate-700">
                  Total
                </th>
                <th className="text-center py-3 px-4 font-bold text-slate-700">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {academicResults.map((result, index) => {
                let grade, gradeColor;
                if (result.total >= 180) {
                  grade = "A+";
                  gradeColor = "text-accent-600 bg-accent-100";
                } else if (result.total >= 160) {
                  grade = "A";
                  gradeColor = "text-accent-500 bg-accent-50";
                } else if (result.total >= 140) {
                  grade = "B";
                  gradeColor = "text-primary-600 bg-primary-100";
                } else if (result.total >= 120) {
                  grade = "C";
                  gradeColor = "text-amber-600 bg-amber-100";
                } else {
                  grade = "D";
                  gradeColor = "text-red-600 bg-red-100";
                }

                return (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-3 px-4 font-medium text-slate-800">
                      {result.subject}
                    </td>
                    <td className="text-center py-3 px-4 text-slate-600">
                      {result.firstTerm}
                    </td>
                    <td className="text-center py-3 px-4 text-slate-600">
                      {result.secondTerm}
                    </td>
                    <td className="text-center py-3 px-4 font-bold text-slate-800">
                      {result.total}
                    </td>
                    <td className="text-center py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${gradeColor}`}
                      >
                        {grade}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-800">Total</td>
                <td className="text-center py-3 px-4 font-bold text-slate-800">
                  {academicResults.reduce((sum, r) => sum + r.firstTerm, 0)}
                </td>
                <td className="text-center py-3 px-4 font-bold text-slate-800">
                  {academicResults.reduce((sum, r) => sum + r.secondTerm, 0)}
                </td>
                <td className="text-center py-3 px-4 font-bold text-primary-900">
                  {academicResults.reduce((sum, r) => sum + r.total, 0)}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
