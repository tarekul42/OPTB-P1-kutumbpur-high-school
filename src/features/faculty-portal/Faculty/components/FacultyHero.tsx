const FacultyHero = () => {
  return (
    <div className="relative bg-primary-900 overflow-hidden py-24">
      <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-top-4 duration-700 drop-shadow-lg">
            Faculty Portal
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
            Administrative and teaching hub for Kutumbpur High School educators. Manage Class 6-10
            streams, assessments, and attendance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyHero;
