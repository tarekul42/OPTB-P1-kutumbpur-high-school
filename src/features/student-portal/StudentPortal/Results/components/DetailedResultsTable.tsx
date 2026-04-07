interface Result {
  subject: string;
  firstTerm: number;
  secondTerm: number;
  total: number;
}

interface DetailedResultsTableProps {
  results: Result[];
}

const getGradeInfo = (total: number) => {
  if (total >= 180) return { grade: "A+", color: "text-accent-600 bg-accent-100" };
  if (total >= 160) return { grade: "A", color: "text-accent-500 bg-accent-50" };
  if (total >= 140) return { grade: "B", color: "text-primary-600 bg-primary-100" };
  if (total >= 120) return { grade: "C", color: "text-amber-600 bg-amber-100" };
  return { grade: "D", color: "text-red-600 bg-red-100" };
};

const DetailedResultsTable = ({ results }: DetailedResultsTableProps) => {
  const totals = results.reduce(
    (acc, r) => ({
      first: acc.first + r.firstTerm,
      second: acc.second + r.secondTerm,
      total: acc.total + r.total,
    }),
    { first: 0, second: 0, total: 0 },
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">Detailed Results</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 font-bold text-slate-700">Subject</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">First Term</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Second Term</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Total</th>
              <th className="text-center py-3 px-4 font-bold text-slate-700">Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => {
              const { grade, color } = getGradeInfo(result.total);
              return (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-800">{result.subject}</td>
                  <td className="text-center py-3 px-4 text-slate-600">{result.firstTerm}</td>
                  <td className="text-center py-3 px-4 text-slate-600">{result.secondTerm}</td>
                  <td className="text-center py-3 px-4 font-bold text-slate-800">{result.total}</td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${color}`}>
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
              <td className="text-center py-3 px-4 font-bold text-slate-800">{totals.first}</td>
              <td className="text-center py-3 px-4 font-bold text-slate-800">{totals.second}</td>
              <td className="text-center py-3 px-4 font-bold text-primary-900">{totals.total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DetailedResultsTable;
