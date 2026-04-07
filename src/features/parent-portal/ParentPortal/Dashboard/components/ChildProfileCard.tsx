interface ChildProfileCardProps {
  name: string;
  photo: string;
  className: string;
  section: string;
  rollNo: string | number;
  studentId: string;
}

const ChildProfileCard = ({
  name,
  photo,
  className,
  section,
  rollNo,
  studentId,
}: ChildProfileCardProps) => {
  return (
    <div className="bg-linear-to-r from-secondary-800 to-secondary-700 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-6">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-accent-gold"
        />
        <div className="flex-1">
          <p className="text-secondary-200 text-sm">Currently Viewing</p>
          <h2 className="text-2xl font-serif font-bold">{name}</h2>
          <p className="text-secondary-200 mt-1">
            {className} | Section {section} | Roll: {rollNo}
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm text-secondary-300">Student ID</p>
          <p className="font-medium">{studentId}</p>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileCard;
