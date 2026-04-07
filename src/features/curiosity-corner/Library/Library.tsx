import { useState, useEffect, useMemo } from "react";
import { booksData } from "@/shared/data/booksData";
import LibraryHero from "./components/LibraryHero";
import SearchFilters from "./components/SearchFilters";
import ViewModeSwitcher from "./components/ViewModeSwitcher";
import BookGrid from "./components/BookGrid";
import DigitalResources from "./components/DigitalResources";
import LibraryStats from "./components/LibraryStats";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [viewMode, setViewMode] = useState<"all" | "favorites">("all");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("libraryFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("libraryFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId: number) => {
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

      return matchesSearch && matchesSubject && matchesAvailability && matchesFavorites;
    });
  }, [searchQuery, selectedSubject, selectedAvailability, viewMode, favorites]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <LibraryHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedAvailability={selectedAvailability}
            setSelectedAvailability={setSelectedAvailability}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          <ViewModeSwitcher
            viewMode={viewMode}
            setViewMode={setViewMode}
            totalBooks={booksData.length}
            favoritesCount={favorites.length}
            filteredCount={filteredBooks.length}
          />
        </div>

        <BookGrid
          filteredBooks={filteredBooks}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          viewMode={viewMode}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery("")}
          onBrowseAll={() => setViewMode("all")}
        />

        <DigitalResources />

        <LibraryStats />
      </div>
    </div>
  );
};

export default Library;
