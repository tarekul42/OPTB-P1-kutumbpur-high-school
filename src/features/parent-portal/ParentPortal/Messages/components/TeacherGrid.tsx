import Badge from "@/shared/ui/UI/Badge";
import { Subject } from "@/shared/types/user";

interface TeacherGridProps {
  subjects: Subject[];
  onMessageTeacher: (teacher: any) => void;
}

const TeacherGrid = ({ subjects, onMessageTeacher }: TeacherGridProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-secondary-900">Subject Teachers</h2>
          <p className="text-slate-500 mt-1">Contact your child's subject teachers directly</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-secondary-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <Badge>{subject.name}</Badge>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">{subject.teacher}</h3>
            <p className="text-sm text-slate-500 mb-4">{subject.email}</p>
            <button
              onClick={() => onMessageTeacher(subject)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm font-medium cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Send Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherGrid;
