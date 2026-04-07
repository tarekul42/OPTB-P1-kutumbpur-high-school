import { UserCircleIcon } from "@/shared/ui";
import { Student } from "@/shared/types/user";

interface StudentProfileProps {
  student: Student;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
        <UserCircleIcon className="w-5 h-5 text-accent-600" />
        My Profile
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <span className="text-slate-500 text-sm">Student ID</span>
          <span className="font-medium text-slate-800 text-sm">
            {student.id}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <span className="text-slate-500 text-sm">Class</span>
          <span className="font-medium text-slate-800 text-sm">
            {student.class}
          </span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <span className="text-slate-500 text-sm">Section</span>
          <span className="font-medium text-slate-800 text-sm">
            {student.section}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-slate-500 text-sm">Blood Group</span>
          <span className="font-medium text-slate-800 text-sm">
            {student.bloodGroup}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
