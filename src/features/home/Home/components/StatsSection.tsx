import { homeStats } from "@/shared/data/homeData";
import StatCard from "@/features/home/components/StatCard";

const StatsSection: React.FC = () => {
  return (
    <div className="py-20 bg-linear-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeStats.map((stat, index) => (
            <StatCard
              key={index}
              end={parseInt(stat.number, 10)}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
