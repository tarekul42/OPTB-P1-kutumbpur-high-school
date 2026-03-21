import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/school_hero_main.png";
import {
  homeFeatures,
  homePrograms,
  homeStats,
  homeTestimonials,
  homeNews,
  newsCategories,
} from "../../../data/homeData.jsx";
import StatCard from "../../../Components/StatCard";
import SearchBar from "../../../Components/SearchBar";
import NewsCard from "../../../Components/NewsCard";
import NewsModal from "../../../Components/NewsModal";
import TestimonialCarousel from "../../../Components/TestimonialCarousel";

const ITEMS_PER_PAGE = 3;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [selectedNews, setSelectedNews] = useState(null);
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

  const handleReadMore = (item) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const handleSearchSelect = (item) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Enhanced Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-[2px] z-10"></div>
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/60 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: "scale(1.05)",
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent-gold/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent-gold/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full">
          <div
            className={`inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-8 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <span className="text-sm font-semibold tracking-wider">
              Welcome to Excellence in Education
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-white drop-shadow-2xl">
              Nurturing <span className="text-accent-gold">Minds</span>,
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              Building <span className="text-accent-gold">Futures</span>
            </span>
          </h1>

          <p
            className={`text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            A prestigious secondary institution in Chandina, Cumilla, providing
            quality education for Classes 6-10 and fostering excellence since
            1996.
          </p>

          <div
            className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <SearchBar data={homeNews} onSelect={handleSearchSelect} />
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              to="/admissions"
              className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-accent-50"></span>
              <span className="relative text-primary-900 group-hover:text-primary-950">
                Apply Now
              </span>
            </Link>
            <Link
              to="/about"
              className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 border-2 border-white transition-all duration-300 group-hover:bg-white"></span>
              <span className="relative text-white group-hover:text-primary-900">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover what makes our school the perfect place for your child's
              education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl group border border-slate-200"
              >
                <div className="text-accent-gold mb-6 transform group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 group-hover:text-accent-gold transition duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive education programs for every stage of learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePrograms.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-200">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div className="py-20 bg-linear-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeStats.map((stat, index) => (
              <StatCard
                key={index}
                end={parseInt(stat.number)}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* News Section with Filtering & Load More */}
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

          {/* Filter Buttons */}
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNews.map((item) => (
              <NewsCard key={item.id} item={item} onReadMore={handleReadMore} />
            ))}
          </div>

          {/* Load More Button */}
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

      {/* Testimonials Section with Carousel */}
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our community about their experiences
            </p>
          </div>
          <TestimonialCarousel testimonials={homeTestimonials} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-linear-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            Take the first step towards a bright future for your child
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/admissions"
              className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* News Modal */}
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
