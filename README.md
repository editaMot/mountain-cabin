MOUNTAIN CABIN

This is an application for managing stays in mountain cabins. 

## Features:
1. Cabin Management: This section allows administrators to manage details about each cabin, including its capacity, amenities, and pricing. It also enables them to add new cabins to the system's database or update existing cabin information.
2. Bookings management: Cabin reservations are displayed in a table where administrators can manage reservations by deleting them, checking in/out guests, viewing guest details and additional observations left, the number of nights reserved, arrival/departure days, adding breakfast (if not previously added), checking payment status, and confirming payments. Bookings are categorized into three different statuses: "unconfirmed" (guest has not arrived yet), "checked in" (guests have arrived), and "checked out" (guests have departed).
3. Dashboard: A dashboard displaying various statistics about reservations and today's activities, such as arrivals and departures, total bookings, occupancy rate, and profit in the last 7, 30, and 90 days.
4. Settings: In this section, administrators can update the minimum/maximum number of nights for cabin stays, maximum number of guests allowed, and breakfast price.
5. Authentication: Only authenticated users can access all data and perform authorized tasks. New users can only be added by existing employees to ensure that only authorized personnel have accounts.

## Technology Stack:
1. Remote state management: TanStack Query
2. UI state management: Context API
3. Form management: React Hook Form
4. Routing: React Router
5. Styling: SCSS
6. Dashboard charts: Recharts
7. Data base & Authentication: Supabase
8. Deployment: Netlify (https://mountain-cabin.netlify.app/)
