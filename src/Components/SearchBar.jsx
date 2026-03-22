import { useState, useRef, useMemo, useCallback } from "react";

const SearchBar = ({ data, onSelect }) => {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    if (query.length > 0) {
      return data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            (item.tag && item.tag.toLowerCase().includes(query.toLowerCase())),
        )
        .slice(0, 5);
    }
    return [];
  }, [query, data]);

  const isOpen = query.length > 0 && results.length > 0 && isDropdownOpen;

  const handleSelect = useCallback(
    (item) => {
      onSelect(item);
      setQuery("");
      setIsDropdownOpen(false);
    },
    [onSelect],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case "Escape":
          setIsDropdownOpen(false);
          break;
      }
    },
    [isOpen, results, selectedIndex, handleSelect],
  );

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    if (value.length > 0) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, []);

  const handleClear = useCallback(() => {
    setQuery("");
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsDropdownOpen(true)}
          placeholder="Search news, events, announcements..."
          className="w-full px-6 py-4 pl-12 text-lg rounded-full bg-white/95 backdrop-blur-md text-neutral-900 placeholder-slate-400 shadow-2xl border-2 border-transparent focus:border-accent-gold focus:outline-none transition-all duration-300"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
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
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
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

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-slate-200">
          {results.length > 0 ? (
            <>
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-200">
                <span className="text-sm text-slate-500 font-medium">
                  {results.length} result{results.length !== 1 ? "s" : ""} found
                </span>
              </div>
              <ul>
                {results.map((item, index) => (
                  <li key={item.id || index}>
                    <button
                      onClick={() => handleSelect(item)}
                      className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors cursor-pointer ${
                        selectedIndex === index ? "bg-slate-100" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent-gold mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-neutral-900 truncate">
                            {item.title}
                          </p>
                          <p className="text-sm text-slate-500 line-clamp-1">
                            {item.description}
                          </p>
                          {item.tag && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-accent-gold/10 text-accent-gold text-xs font-medium rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-200">
                <span className="text-xs text-slate-400">
                  Press{" "}
                  <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-xs">
                    ↑↓
                  </kbd>{" "}
                  to navigate,{" "}
                  <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-xs">
                    Enter
                  </kbd>{" "}
                  to select
                </span>
              </div>
            </>
          ) : (
            <div className="px-4 py-8 text-center">
              <svg
                className="w-12 h-12 mx-auto text-slate-300 mb-3"
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
              <p className="text-slate-500 font-medium">
                No results found for "{query}"
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Try different keywords or browse our news
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
