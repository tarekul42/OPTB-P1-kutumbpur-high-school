import { useEffect, useState } from "react";

interface StatCardProps {
  end: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ end, suffix = "", label, prefix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const incrementTime = (duration / end) * 5;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);
      if (currentCount >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6">
      <div className="text-5xl md:text-6xl font-bold mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg text-slate-200">{label}</div>
    </div>
  );
};

export default StatCard;
