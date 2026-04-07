interface ClassTeacherCardProps {
  classTeacher: string;
  className: string;
  onContact: () => void;
}

const ClassTeacherCard = ({ classTeacher, className, onContact }: ClassTeacherCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">Contact Class Teacher</h3>
      <div className="p-4 bg-accent-50 rounded-xl border border-accent-200">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-bold text-slate-800">{classTeacher}</p>
            <p className="text-sm text-slate-500">Class Teacher - {className}</p>
          </div>
          <button
            onClick={onContact}
            className="px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm font-medium cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassTeacherCard;
