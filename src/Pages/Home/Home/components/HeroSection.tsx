import { Link } from "react-router-dom";
import SearchBar from "../../../../Components/SearchBar/SearchBar";
import heroImage from "../../../../assets/school_hero_main.png";
import { NewsItem } from "../../../../types/common";

interface HeroSectionProps {
  isVisible: boolean;
  homeNews: NewsItem[];
  handleSearchSelect: (item: NewsItem) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, homeNews, handleSearchSelect }) => {
  return (
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
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
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
  );
};

export default HeroSection;
