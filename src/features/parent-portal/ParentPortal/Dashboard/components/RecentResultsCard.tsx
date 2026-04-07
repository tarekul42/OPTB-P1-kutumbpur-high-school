import { Link } from "react-router-dom";

interface Result {
  subject: string;
  firstTerm: number;
  secondTerm: number;
}

interface RecentResultsCardProps {
  results: Result[];
}

const RecentResultsCard = ({ results }: RecentResultsCardProps) => {
  return (
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
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
          >
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
  );
};

export default RecentResultsCard;
