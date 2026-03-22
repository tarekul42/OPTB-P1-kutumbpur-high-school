import { useState } from "react";

const BookCard = ({ book, onToggleFavorite, isFavorite }) => {
  const [imageError, setImageError] = useState(false);

  const statusColors = {
    Available: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Issued: "bg-red-100 text-red-700 border-red-200",
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 ${
        book.status === "Issued" ? "opacity-90" : ""
      }`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        {!imageError ? (
          <img
            src={book.coverImage}
            alt={book.title}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              book.status === "Issued" ? "grayscale-[40%] opacity-80" : ""
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <svg
              className={`w-20 h-20 text-primary-300 ${book.status === "Issued" ? "opacity-50" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        )}

        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[book.status]}`}
          >
            {book.status === "Available" ? (
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {book.status}
          </span>
        </div>

        <button
          onClick={() => onToggleFavorite(book.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            isFavorite
              ? "bg-rose-500 text-white hover:bg-rose-600"
              : "bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white"
          } shadow-lg`}
          aria-label={isFavorite ? "Remove from reading list" : "Add to reading list"}
        >
          <svg
            className="w-5 h-5"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {book.status === "Issued" && (
          <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
            <div className="bg-white/95 px-4 py-2 rounded-lg shadow-lg transform rotate-[-12deg]">
              <span className="text-sm font-bold text-red-600">Currently Issued</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
            {book.subject}
          </span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-2 leading-tight group-hover:text-primary-700 transition-colors">
          {book.title}
        </h3>

        <p className="text-sm text-slate-500 mb-3">{book.author}</p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <span className="text-xs text-slate-400 font-medium">{book.classLevel}</span>
          <span className="text-xs text-slate-400">ISBN: {book.isbn.slice(-6)}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
