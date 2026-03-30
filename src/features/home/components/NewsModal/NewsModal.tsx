import { NewsItem } from "@/shared/types/common";

interface NewsModalProps {
  item: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-all cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {item.tag && (
              <span className="absolute bottom-4 left-6 px-4 py-1.5 bg-accent-gold text-white text-sm font-semibold rounded-full">
                {item.tag}
              </span>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-accent-gold font-semibold">{item.date}</span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
              <span className="text-slate-500">{item.category}</span>
            </div>

            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              {item.title}
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              {item.content || item.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Published on {item.date}</span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
