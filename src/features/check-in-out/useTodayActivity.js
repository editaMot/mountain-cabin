import { useQuery } from "@tanstack/react-query";
import { getTodayStaysActivity } from "../../services/apiBookings";

export const useTodayActivity = () => {
  const { isLoading, data: activities } = useQuery({
    queryFn: getTodayStaysActivity,
    queryKey: ["today-activity"],
  });

  return { activities, isLoading };
};
