import { NewsItem } from "@/shared/types/common";
import { Link } from "react-router-dom";

interface NewsCardProps {
  item: NewsItem;
  onReadMore?: (item: NewsItem) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, onReadMore }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-accent-gold text-white text-sm font-semibold rounded-full">
            {item.tag}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{item.date}</span>
          <span className="mx-2">•</span>
          <span>{item.category}</span>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-accent-gold transition duration-300">
          {item.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {item.description}
        </p>
        <button
          onClick={() => onReadMore?.(item)}
          className="inline-flex items-center text-accent-gold font-semibold hover:text-primary-900 transition duration-300 cursor-pointer"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
