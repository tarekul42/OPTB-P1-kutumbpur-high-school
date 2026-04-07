interface ViewModeSwitcherProps {
  viewMode: "all" | "favorites";
  setViewMode: (mode: "all" | "favorites") => void;
  totalBooks: number;
  favoritesCount: number;
  filteredCount: number;
}

const ViewModeSwitcher = ({
  viewMode,
  setViewMode,
  totalBooks,
  favoritesCount,
  filteredCount,
}: ViewModeSwitcherProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 bg-white rounded-xl p-1 border border-slate-200 shadow-sm transition-all duration-300">
        <button
          onClick={() => setViewMode("all")}
          className={`px-6 py-3 rounded-lg font-medium transition-all cursor-pointer ${
            viewMode === "all"
              ? "bg-primary-600 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            View All
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${viewMode === "all" ? "bg-white/20" : "bg-slate-100"}`}
            >
              {totalBooks}
            </span>
          </span>
        </button>
        <button
          onClick={() => setViewMode("favorites")}
          className={`px-6 py-3 rounded-lg font-medium transition-all cursor-pointer ${
            viewMode === "favorites"
              ? "bg-primary-600 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill={viewMode === "favorites" ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            My Reading List
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${viewMode === "favorites" ? "bg-white/20" : "bg-slate-100"}`}
            >
              {favoritesCount}
            </span>
          </span>
        </button>
      </div>

      <p className="text-sm text-slate-500">
        Showing {filteredCount} {filteredCount === 1 ? "book" : "books"}
      </p>
    </div>
  );
};

export default ViewModeSwitcher;
