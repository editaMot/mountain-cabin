import { differenceInDays, formatDistance, parseISO } from "date-fns";

export const formatCurrency = (value) => {
  const formattedValue = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  }).format(value);

  return formattedValue.replace(/€/, "") + " €";
};

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = (options = {}) => {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);

  return today.toISOString();
};
