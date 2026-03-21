import { useState } from "react";

const NewsCard = ({ item, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="bg-surface rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group border border-neutral-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-48 object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          {item.tag && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-accent-gold text-white text-sm font-semibold rounded-full">
              {item.tag}
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-accent-gold text-sm font-semibold">
              {item.date}
            </span>
            <span className="text-slate-400 text-sm">{item.category}</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-900 transition-colors duration-300 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-neutral-600 mb-4 line-clamp-2">
            {item.description}
          </p>
          <button
            onClick={() => onReadMore(item)}
            className="inline-flex items-center text-primary-900 font-semibold hover:text-accent-gold transition-colors duration-300 cursor-pointer group/link"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
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

      {/* News Modal */}
    </>
  );
};

export default NewsCard;
