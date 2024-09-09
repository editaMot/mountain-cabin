import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { NUM_PER_PAGE } from "../../utils/constants";

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const searchValue = searchParams.get("search");
  const search = { field: "guests.fullName", value: searchValue };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page, search],
    queryFn: () => getBookings({ filter, sortBy, page, search }),
  });

  const numOfPage = Math.ceil(count / NUM_PER_PAGE);

  if (page < numOfPage)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1, search],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1, search }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1, search],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1, search }),
    });

  return { isLoading, error, bookings, count };
};
