import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/app/providers/contexts/AppContext";
import SearchResultsList from "./SearchResultsList";
import { SearchResult } from "@/shared/types/common";

const SearchModal = () => {
  const {
    isSearchOpen,
    closeSearch,
    searchQuery,
    setSearchQuery,
    searchResults,
  } = useApp();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelect = useCallback(
    (item: SearchResult) => {
      closeSearch();
      navigate(item.path);
    },
    [closeSearch, navigate],
  );

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isSearchOpen) return;

      switch (e.key) {
        case "Escape":
          closeSearch();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < searchResults.length - 1 ? prev + 1 : prev,
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
    },
    [isSearchOpen, searchResults, selectedIndex, closeSearch, handleSelect],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
          <SearchResultsList
            results={searchResults}
            searchQuery={searchQuery}
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">
                ↓
              </kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-600 rounded">
                Enter
              </kbd>
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
