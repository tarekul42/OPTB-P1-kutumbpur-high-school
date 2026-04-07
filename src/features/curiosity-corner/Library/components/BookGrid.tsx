import { Button } from "@/shared/ui";
import BookCard from "@/features/curiosity-corner/components/BookCard";

interface BookGridProps {
  filteredBooks: any[];
  favorites: number[];
  onToggleFavorite: (bookId: number) => void;
  viewMode: "all" | "favorites";
  searchQuery: string;
  onClearSearch: () => void;
  onBrowseAll: () => void;
}

const BookGrid = ({
  filteredBooks,
  favorites,
  onToggleFavorite,
  viewMode,
  searchQuery,
  onClearSearch,
  onBrowseAll,
}: BookGridProps) => {
  if (filteredBooks.length === 0) {
    return (
      <div className="text-center py-16 mb-20 bg-slate-50 rounded-2xl border border-slate-200">
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
          {viewMode === "favorites" ? "No books in your reading list" : "No books found"}
        </h3>
        <p className="text-slate-500 mb-6">
          {viewMode === "favorites"
            ? "Start adding books to your reading list by clicking the heart icon"
            : "Try adjusting your search or filters"}
        </p>
        <div className="flex gap-4 justify-center">
          {searchQuery && (
            <Button onClick={onClearSearch} variant="primary">
              Clear Search
            </Button>
          )}
          {viewMode === "favorites" && (
            <Button onClick={onBrowseAll} variant="primary">
              Browse All Books
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 animate-fade-in">
      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(book.id)}
        />
      ))}
    </div>
  );
};

export default BookGrid;
