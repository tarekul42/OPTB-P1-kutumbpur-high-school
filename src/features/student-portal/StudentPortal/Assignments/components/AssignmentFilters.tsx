interface AssignmentFiltersProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const AssignmentFilters = ({ filter, onFilterChange }: AssignmentFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h2 className="text-2xl font-serif font-bold text-primary-900">Assignments</h2>
      <div className="flex gap-2">
        {["all", "pending", "submitted"].map((status) => (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${
              filter === status
                ? "bg-primary-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentFilters;
