import React from 'react';

const Portals: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-8 text-center uppercase tracking-wider">
          School Portals
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Access specialized portals for students, faculty, and parents to manage academic life and stay connected with the school community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Student Portal</h2>
            <p className="text-slate-600 mb-6">Manage assignments, view grades, and check your attendance record.</p>
            <button className="w-full bg-primary-900 text-white py-3 rounded-xl font-bold hover:bg-primary-800 transition-colors">Enter Portal</button>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Faculty Portal</h2>
            <p className="text-slate-600 mb-6">Record grades, track attendance, and manage classroom resources.</p>
            <button className="w-full bg-primary-900 text-white py-3 rounded-xl font-bold hover:bg-primary-800 transition-colors">Enter Portal</button>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Parent Portal</h2>
            <p className="text-slate-600 mb-6">Monitor your child's progress, view fee statements, and communicate with teachers.</p>
            <button className="w-full bg-primary-900 text-white py-3 rounded-xl font-bold hover:bg-primary-800 transition-colors">Enter Portal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portals;
