const StudentHeader = ({ student, greeting }) => {
  return (
    <div className="lg:col-span-2 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-6">
        <img
          src={student.photo}
          alt={student.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-accent-gold"
        />
        <div>
          <p className="text-primary-200 text-sm">{greeting}</p>
          <h2 className="text-2xl font-serif font-bold">{student.name}</h2>
          <p className="text-primary-200 mt-1">
            {student.class} | Section {student.section} | Roll: {student.roll_no}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
