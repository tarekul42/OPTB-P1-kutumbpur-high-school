import { format } from "date-fns";
import { SpeakerphoneIcon } from "@/shared/ui/Icons";
import { Notice } from "@/shared/types/user";

interface NoticeBoardProps {
  notices: Notice[];
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
        <SpeakerphoneIcon className="w-5 h-5 text-primary-600" />
        Notice Board
      </h3>
      <div className="space-y-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-3 bg-slate-50 rounded-lg border-l-4 border-primary-500"
          >
            <p className="font-medium text-slate-800 text-sm">{notice.title}</p>
            <p className="text-xs text-slate-500 mt-1">
              {format(new Date(notice.date), "MMM d, yyyy")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
