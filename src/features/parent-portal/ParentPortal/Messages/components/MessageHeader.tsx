interface MessageHeaderProps {
  name: string;
  photo: string;
  className: string;
  classTeacher: string;
}

const MessageHeader = ({ name, photo, className, classTeacher }: MessageHeaderProps) => {
  return (
    <div className="bg-linear-to-r from-secondary-800 to-secondary-700 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-accent-gold"
        />
        <div>
          <p className="text-secondary-200 text-sm">Messaging about</p>
          <h2 className="text-xl font-serif font-bold">{name}</h2>
          <p className="text-secondary-200 text-sm">
            {className} | Class Teacher: {classTeacher}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
