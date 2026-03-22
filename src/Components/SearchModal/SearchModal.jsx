import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const SearchModal = () => {
  const {
    isSearchOpen,
    closeSearch,
    searchQuery,
    setSearchQuery,
    searchResults,
  } = useApp();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelect = useCallback((item) => {
    closeSearch();
    navigate(item.path);
  }, [closeSearch, navigate]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleKeyDown = useCallback((e) => {
    if (!isSearchOpen) return;

    switch (e.key) {
      case "Escape":
        closeSearch();
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        if (selectedIndex >= 0 && searchResults[selectedIndex]) {
          handleSelect(searchResults[selectedIndex]);
        }
        break;
    }
  }, [isSearchOpen, searchResults, selectedIndex, closeSearch, handleSelect]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "News":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case "Events & Holidays":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "Library":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]"
      onClick={closeSearch}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 p-4 border-b border-slate-200 dark:border-slate-700">
          <svg
            className="w-6 h-6 text-slate-400 shrink-0"
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
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for news, events, library books..."
            className="flex-1 bg-transparent text-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 dark:text-slate-400 rounded">
            <span className="text-[10px]">esc</span>
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery.trim() === "" ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-slate-100 dark:bg-slate-700 rounded-full">
                <svg
                  className="w-8 h-8 text-slate-400"
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
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Type to search across news, events, and library...
              </p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded text-xs">Ctrl+K</kbd> to open search
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-slate-100 dark:bg-slate-700 rounded-full">
                <svg
                  className="w-8 h-8 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                No results found for &quot;{searchQuery}&quot;
              </p>
            </div>
          ) : (
            <div className="py-2">
              {["News", "Events & Holidays", "Library"].map((category) => {
                const categoryItems = searchResults.filter(
                  (item) => item.category === category
                );
                if (categoryItems.length === 0) return null;

                return (
                  <div key={category} className="mb-4">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {category}
                    </div>
                    {categoryItems.map((item) => {
                      const globalIndex = searchResults.findIndex(
                        (r) => r.id === item.id && r.category === item.category
                      );
                      return (
                        <button
                          key={`${item.category}-${item.id}`}
                          onClick={() => handleSelect(item)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                            selectedIndex === globalIndex
                              ? "bg-primary-50 dark:bg-primary-900/30"
                              : "hover:bg-slate-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 shrink-0">
                            {getCategoryIcon(item.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-800 dark:text-slate-100 truncate">
                              {item.title}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                              {item.description || item.author || item.date}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0"
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
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">Enter</kbd>
              <span>to select</span>
            </span>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {searchResults.length} results
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
