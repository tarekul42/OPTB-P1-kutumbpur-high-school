import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsItem } from "@/shared/types/common";

interface SearchBarProps {
  data: NewsItem[];
  onSelect?: (item: NewsItem) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ data, onSelect }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<NewsItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSelectedIndex(-1);

    if (searchQuery.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        const selectedItem = results[selectedIndex];
        if (selectedItem) {
          handleSelect(selectedItem);
        }
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelect = (item: NewsItem) => {
    setQuery("");
    setIsOpen(false);
    setResults([]);
    onSelect?.(item);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search news, events, announcements..."
          className="w-full px-6 py-4 text-lg bg-white/95 backdrop-blur-sm rounded-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-accent-gold/50 transition-all"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-accent-gold transition-colors cursor-pointer">
          <svg
            className="w-6 h-6"
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
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50">
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto">
              {results.map((item, index) => (
                <li
                  key={item.id}
                  className={`px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors ${
                    selectedIndex === index ? "bg-accent-gold/10" : ""
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-accent-gold">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400">{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-neutral-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-8 text-center text-slate-500">
              <p>No results found for "{query}"</p>
            </div>
          )}
        </div>
      )}

      <div className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/70">
        Press <kbd className="px-2 py-1 bg-white/20 rounded text-xs">↑</kbd>{" "}
        <kbd className="px-2 py-1 bg-white/20 rounded text-xs">↓</kbd> to navigate,{" "}
        <kbd className="px-2 py-1 bg-white/20 rounded text-xs">Enter</kbd> to select,{" "}
        <kbd className="px-2 py-1 bg-white/20 rounded text-xs">Esc</kbd> to close
      </div>
    </div>
  );
};

export default SearchBar;
