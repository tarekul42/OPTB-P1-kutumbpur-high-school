import { useState, useEffect } from "react";
import { format } from "date-fns";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return {
    date,
    day: format(date, "EEEE"),
    formatted: format(date, "MMM d, yyyy"),
  };
};
