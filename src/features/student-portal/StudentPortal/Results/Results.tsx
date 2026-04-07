import { useMemo } from "react";
import { academicResults } from "@/shared/data/studentData";
import { useStudent } from "@/app/providers/StudentContext";
import ResultsHeader from "./components/ResultsHeader";
import PerformanceCharts from "./components/PerformanceCharts";
import DetailedResultsTable from "./components/DetailedResultsTable";

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

  const gradeCount = useMemo(() => {
    return academicResults.reduce(
      (acc, result) => {
        let grade: keyof typeof acc;
        if (result.total >= 180) grade = "A+";
        else if (result.total >= 160) grade = "A";
        else if (result.total >= 140) grade = "B";
        else if (result.total >= 120) grade = "C";
        else grade = "D";
        
        acc[grade] = (acc[grade] || 0) + 1;
        return acc;
      },
      { "A+": 0, A: 0, B: 0, C: 0, D: 0 },
    );
  }, []);

  const pieData = [
    { name: "A+", value: gradeCount["A+"], color: "#059669" },
    { name: "A", value: gradeCount["A"], color: "#10b981" },
    { name: "B", value: gradeCount["B"], color: "#fbbf24" },
    { name: "C", value: gradeCount["C"], color: "#f97316" },
    { name: "D", value: gradeCount["D"], color: "#ef4444" },
  ].filter((item) => item.value > 0);

  if (!student) return null;

  return (
    <div className="space-y-6">
      <ResultsHeader
        name={student.name}
        photo={student.photo}
        className={student.class}
        averageMarks={averageMarks}
      />

      <PerformanceCharts
        combinedMarks={combinedMarks}
        pieData={pieData}
      />

      <DetailedResultsTable results={academicResults} />
    </div>
  );
};

export default Results;
