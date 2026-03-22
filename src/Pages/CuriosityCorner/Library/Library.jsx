import { useState, useEffect, useMemo } from "react";
import BookCard from "../../../Components/BookCard";
import {
  booksData,
  digitalResources,
  subjects,
  availabilityOptions,
} from "../../../data/booksData";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [viewMode, setViewMode] = useState("all");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("libraryFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    localStorage.setItem("libraryFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId) => {
    setFavorites((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId],
    );
  };

  const filteredBooks = useMemo(() => {
    return booksData.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubject =
        selectedSubject === "All" || book.subject === selectedSubject;

      const matchesAvailability =
        selectedAvailability === "All" || book.status === selectedAvailability;

      const matchesFavorites =
        viewMode === "all" || favorites.includes(book.id);

      return (
        matchesSearch &&
        matchesSubject &&
        matchesAvailability &&
        matchesFavorites
      );
    });
  }, [searchQuery, selectedSubject, selectedAvailability, viewMode, favorites]);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
        );
      case "mp4":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        );
      case "epub":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
    }
  };

  const fileTypeColors = {
    pdf: "text-red-500 bg-red-50",
    mp4: "text-blue-500 bg-blue-50",
    epub: "text-emerald-500 bg-emerald-50",
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="relative bg-linear-to-r from-primary-900 via-primary-800 to-primary-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/10 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Digital Library
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              School Library
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Discover a world of knowledge through our extensive collection of
              books and digital resources at Kutumbpur High School.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filters
              </button>

              <div className="hidden lg:flex gap-4">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                >
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={`${showFilters ? "block" : "hidden"} lg:block mb-8`}>
            <div className="flex flex-wrap gap-4 lg:hidden">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>

              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
              <button
                onClick={() => setViewMode("all")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  viewMode === "all"
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  View All
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {booksData.length}
                  </span>
                </span>
              </button>
              <button
                onClick={() => setViewMode("favorites")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  viewMode === "favorites"
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill={viewMode === "favorites" ? "currentColor" : "none"}
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
                  My Reading List
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {favorites.length}
                  </span>
                </span>
              </button>
            </div>

            <p className="text-sm text-slate-500">
              Showing {filteredBooks.length}{" "}
              {filteredBooks.length === 1 ? "book" : "books"}
            </p>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(book.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-20">
            <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              {viewMode === "favorites"
                ? "No books in your reading list"
                : "No books found"}
            </h3>
            <p className="text-slate-500 mb-6">
              {viewMode === "favorites"
                ? "Start adding books to your reading list by clicking the heart icon"
                : "Try adjusting your search or filters"}
            </p>
            <div className="flex gap-4 justify-center">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                >
                  Clear Search
                </button>
              )}
              {viewMode === "favorites" && (
                <button
                  onClick={() => setViewMode("all")}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                >
                  Browse All Books
                </button>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-slate-200 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Digital Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access our collection of online tutorials, PDFs, and e-books to
              enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalResources.map((resource) => (
              <a
                key={resource.id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${fileTypeColors[resource.fileType]} group-hover:scale-110 transition-transform`}
                  >
                    {getFileIcon(resource.fileType)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors truncate">
                        {resource.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-medium rounded-full uppercase">
                        {resource.fileType}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      <span>Access Resource</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-linear-to-r from-primary-50 to-primary-100 rounded-3xl p-12 border border-primary-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-4">
                Library Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-200">
                  <span className="text-slate-700 font-medium">
                    Saturday - Thursday
                  </span>
                  <span className="text-primary-800 font-bold">
                    8:00 AM - 3:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-200">
                  <span className="text-slate-700 font-medium">Friday</span>
                  <span className="text-red-600 font-bold">Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-700 font-medium">
                    Exam Season (Extended)
                  </span>
                  <span className="text-primary-800 font-bold">
                    Until 5:00 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-primary-100 rounded-xl">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-4xl font-bold text-primary-900">
                      {booksData.length}+
                    </p>
                    <p className="text-slate-600">Books Available</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">
                  Visit us to explore our growing collection of academic and
                  fiction books
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
