import { useEffect, useState } from "react";
import { homeNews } from "../../../data/homeData";
import NewsModal from "../../../Components/NewsModal";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProgramsSection from "./components/ProgramsSection";
import StatsSection from "./components/StatsSection";
import NewsSection from "./components/NewsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import type { NewsItem } from "../../../types/common";

const ITEMS_PER_PAGE = 3;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredNews =
    selectedCategory === "All"
      ? homeNews
      : homeNews.filter((item) => item.tag === selectedCategory);

  const displayedNews = filteredNews.slice(0, visibleItems);
  const hasMore = visibleItems < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleReadMore = (item: NewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const handleSearchSelect = (item: NewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection
        isVisible={isVisible}
        homeNews={homeNews}
        handleSearchSelect={handleSearchSelect}
      />
      <FeaturesSection />
      <ProgramsSection />
      <StatsSection />
      <NewsSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setVisibleItems={setVisibleItems}
        displayedNews={displayedNews}
        hasMore={hasMore}
        handleLoadMore={handleLoadMore}
        handleReadMore={handleReadMore}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
      <TestimonialsSection />
      <CTASection />
      <NewsModal
        item={selectedNews}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedNews(null);
        }}
      />
    </div>
  );
};

export default Home;
