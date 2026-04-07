import { format } from "date-fns";

interface Notice {
  id: string | number;
  title: string;
  date: string;
}

interface NoticeBoardCardProps {
  notices: Notice[];
}

const NoticeBoardCard = ({ notices }: NoticeBoardCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-secondary-900 mb-6">Notice Board</h3>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 bg-slate-50 rounded-lg border-l-4 border-secondary-500"
          >
            <p className="font-medium text-slate-800">{notice.title}</p>
            <p className="text-xs text-slate-500 mt-1">
              {format(new Date(notice.date), "MMM d, yyyy")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardCard;
