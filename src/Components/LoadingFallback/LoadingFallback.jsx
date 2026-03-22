const LoadingFallback = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-600 dark:border-primary-400 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-primary-900 dark:bg-primary-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-2">
          Loading...
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Preparing your experience
        </p>
      </div>
    </div>
  );
};

export const PageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default LoadingFallback;
