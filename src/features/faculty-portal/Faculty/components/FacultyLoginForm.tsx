const FacultyLoginForm = () => {
  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Login to Portal</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-accent-gold focus:ring-accent-gold py-3 px-4 bg-slate-50 transition-all duration-200"
            placeholder="your.email@kutumbpurhs.edu"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-accent-gold focus:ring-accent-gold py-3 px-4 bg-slate-50 transition-all duration-200"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-accent-gold focus:ring-accent-gold border-slate-300 rounded cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-900 text-white py-4 px-6 rounded-md hover:bg-primary-950 hover:shadow-lg transition-all duration-300 font-bold uppercase tracking-widest border border-accent-gold/20"
        >
          Sign In to Dashboard
        </button>
      </form>
    </div>
  );
};

export default FacultyLoginForm;
