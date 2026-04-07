import React from "react";
import NewsCard from "@/features/home/components/NewsCard";
import { newsCategories } from "@/shared/data/homeData";
import { NewsItem } from "@/shared/types/common";
import { SectionHeader, Button } from "@/shared/ui";

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
        <SectionHeader
          title="Latest News"
          description="Stay updated with our latest events and achievements"
        />

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
            <Button onClick={handleLoadMore} size="lg">
              Load More News
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
