import { NUM_PER_PAGE } from "../utils/constants";
import supabase from "./supabase";
import { getToday } from "../utils/helpers";

export const getBookings = async ({ filter, sortBy, page, search }) => {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests!inner(fullName, email)",
      { count: "exact" }
    );

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (search && search.value)
    query = query.ilike(search.field, `%${search.value}%`);

  if (page) {
    const from = (page - 1) * NUM_PER_PAGE;
    const to = from + NUM_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Bookings could not be loaded");

  return { data, count };
};

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error("Booking could not be loaded");

  return data;
};

export const updateBooking = async (id, obj) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");

  return data;
};

export const deleteBooking = async (id) => {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw new Error("Booking could not be deleted");

  return data;
};

export const getBookingsAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) throw new Error("Bookings could not get loaded");

  return data;
};

export const getStaysAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) throw new Error("Bookings could not get loaded");

  return data;
};

export const getTodayStaysActivity = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  if (error) throw new Error("Bookings could not get loaded");

  return data;
};
