import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ end, suffix, label, prefix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="text-center transform hover:scale-105 transition-all duration-300"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-3 text-accent-gold">
        <CountUp
          start={inView ? 0 : undefined}
          end={end}
          suffix={suffix}
          prefix={prefix}
          duration={2.5}
          separator=","
          useGrouping={true}
          redraw={true}
        />
      </div>
      <div className="text-slate-200 text-lg font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
