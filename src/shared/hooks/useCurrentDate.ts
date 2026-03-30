import { useState, useEffect } from "react";
import { format } from "date-fns";

interface UseCurrentDateReturn {
  date: Date;
  day: string;
  formatted: string;
}

export const useCurrentDate = (): UseCurrentDateReturn => {
  const [date, setDate] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return {
    date,
    day: format(date, "EEEE"),
    formatted: format(date, "MMM d, yyyy"),
  };
};
