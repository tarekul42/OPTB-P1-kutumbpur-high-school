import NewsCard from "@/features/home/components/NewsCard";
import { newsCategories } from "@/shared/data/homeData";
import { NewsItem } from "@/shared/types/common";

interface NewsSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setVisibleItems: (count: number) => void;
  displayedNews: NewsItem[];
  hasMore: boolean;
  handleLoadMore: () => void;
  handleReadMore: (item: NewsItem) => void;
  ITEMS_PER_PAGE: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  setVisibleItems,
  displayedNews,
  hasMore,
  handleLoadMore,
  handleReadMore,
  ITEMS_PER_PAGE,
}) => {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Latest News
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay updated with our latest events and achievements
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {newsCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleItems(ITEMS_PER_PAGE);
              }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-accent-gold text-white shadow-lg shadow-accent-gold/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((item) => (
            <NewsCard key={item.id} item={item} onReadMore={handleReadMore} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Load More News
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
